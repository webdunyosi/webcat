import { useCart } from "../context/CartContext"
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa"

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart()

  return (
    <div className="max-w-4xl mx-auto p-4 py-8">
      <h1 className="text-3xl font-bold text-[#9333EA] mb-8">Savatcha 🐈‍⬛</h1>

      <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
        {cartItems.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-lg">
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
                  className="w-24 h-24 bg-gray-50 rounded-2xl object-contain p-2"
                />
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-[#9333EA] font-bold">
                    {(item.price * item.quantity).toLocaleString()} so'm
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-xl">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="cursor-pointer text-gray-500 hover:text-purple-600"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="font-bold min-w-[20px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-[#9333EA] cursor-pointer hover:text-purple-800"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 p-2 cursor-pointer"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Jami summa:</p>
                <h2 className="text-3xl font-bold text-gray-800">
                  {totalPrice.toLocaleString()} so'm
                </h2>
              </div>
              <button className="bg-[#9333EA] text-white px-12 py-4 rounded-2xl font-bold hover:bg-purple-700 shadow-lg shadow-purple-200 cursor-pointer transition-all active:scale-95">
                Buyurtma berish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
