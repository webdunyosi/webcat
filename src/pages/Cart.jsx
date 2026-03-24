import { useCart } from "../context/CartContext"
import { FaTrash, FaPlus, FaMinus, FaCat } from "react-icons/fa"
import { sendOrderToTelegram } from "../services/telegramService"
import { useState } from "react"
import { toast } from "react-hot-toast" // Zamonaviy bildirishnoma

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart()
  const [loading, setLoading] = useState(false)

  const handleOrder = async () => {
    if (cartItems.length === 0) {
      toast.error("Savatchangiz bo'sh!")
      return
    }

    setLoading(true)
    const loadId = toast.loading("Buyurtma yuborilmoqda...")

    try {
      await sendOrderToTelegram(cartItems, totalPrice)

      // Muvaffaqiyatli xabar
      toast.success("Buyurtmangiz qabul qilindi! 🐈‍⬛", { id: loadId })
      clearCart()
    } catch (error) {
      // Xatolik xabari
      toast.error("Xatolik yuz berdi, qaytadan urunib ko'ring.", { id: loadId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <FaCat className="text-4xl text-[#9333EA]" />
        <h1 className="text-3xl font-bold text-[#9333EA]">Savatcha</h1>
      </div>

      <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
        {cartItems.length === 0 ? (
          <div className="text-center py-16 text-gray-400 italic text-lg">
            Savatingiz hozircha bo'sh... 🛒
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b border-gray-50 pb-6 last:border-0"
              >
                <img
                  src={item.image}
                  className="w-20 h-20 object-contain rounded-xl bg-gray-50 p-2"
                  alt=""
                />
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-[#9333EA] font-semibold">
                    {item.price.toLocaleString()} so'm
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="cursor-pointer text-gray-400 hover:text-purple-600"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="font-bold w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-[#9333EA] cursor-pointer hover:text-purple-800"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 cursor-pointer hover:text-red-600"
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm italic font-medium">
                  Jami to'lov:
                </p>
                <h2 className="text-3xl font-extrabold text-gray-800">
                  {totalPrice.toLocaleString()} so'm
                </h2>
              </div>
              <button
                onClick={handleOrder}
                disabled={loading}
                className={`w-full md:w-auto px-12 py-4 rounded-2xl font-bold text-white transition-all shadow-lg active:scale-95 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#9333EA] hover:bg-purple-700 shadow-purple-200 cursor-pointer"
                }`}
              >
                {loading ? "Yuborilmoqda..." : "Buyurtma berish"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
