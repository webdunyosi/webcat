import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"
import { FaTrash, FaPlus, FaMinus, FaCat, FaShoppingCart, FaChevronRight } from "react-icons/fa"
import { sendOrderToTelegram } from "../services/telegramService"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart, addOrder } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleOrder = async () => {
    if (!user) {
      toast.error("Buyurtma berish uchun avval tizimga kiring!")
      navigate("/login")
      return
    }
    if (cartItems.length === 0) {
      toast.error("Savatchangiz bo'sh!")
      return
    }

    setLoading(true)
    const loadId = toast.loading("Buyurtma yuborilmoqda...")
    try {
      await sendOrderToTelegram(cartItems, totalPrice, user.name)
      addOrder(user.name)
      toast.success(`Rahmat, ${user.name}! Buyurtma qabul qilindi 🐈‍⬛`, { id: loadId })
      clearCart()
    } catch (error) {
      toast.error("Xatolik yuz berdi.", { id: loadId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans">
      {/* Sarlavha */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#9333EA] rounded-2xl flex items-center justify-center text-white shadow-lg">
          <FaShoppingCart size={20} />
        </div>
        <h1 className="text-3xl font-black text-gray-800 tracking-tight">Savatcha</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-[40px] border border-gray-100 p-20 text-center">
          <FaCat size={80} className="mx-auto mb-6 opacity-10 text-purple-600" />
          <p className="text-gray-400 font-bold text-xl">Savatchangiz hozircha bo'sh...</p>
          <button onClick={() => navigate("/")} className="mt-6 text-[#9333EA] font-black uppercase text-sm border-b-2 border-purple-200 hover:border-purple-600 transition-all cursor-pointer">Do'konga qaytish</button>
        </div>
      ) : (
        /* ASOSIY GRID: Kompyuterda 3 qism mahsulot, 1 qism checkout */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* CHAP TOMON: MAHSULOTLAR LISTI */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-[35px] border border-gray-100 p-4 md:p-8 shadow-sm">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 md:gap-6 border-b border-gray-50 py-6 last:border-0 group">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-2xl p-2 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                    <img src={item.image} className="max-w-full max-h-full object-contain" alt="" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-black text-gray-800 text-sm md:text-lg truncate">{item.title}</h3>
                    <p className="text-[#9333EA] font-black text-xs md:text-base mt-1">{item.price.toLocaleString()} so'm</p>
                    
                    {/* Mobilda sonini boshqarish */}
                    <div className="flex sm:hidden items-center gap-3 mt-3">
                      <div className="flex items-center gap-4 bg-gray-100 px-3 py-1 rounded-xl">
                        <button onClick={() => updateQuantity(item.id, -1)}><FaMinus size={8} /></button>
                        <span className="font-black text-xs">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-purple-600"><FaPlus size={8} /></button>
                      </div>
                    </div>
                  </div>

                  {/* Desktopda soni va o'chirish */}
                  <div className="hidden sm:flex items-center gap-6">
                    <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-red-500"><FaMinus size={10} /></button>
                      <span className="font-black w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-purple-600"><FaPlus size={10} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="p-3 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all"><FaTrash size={14} /></button>
                  </div>
                  
                  {/* Mobilda o'chirish tugmasi */}
                  <button onClick={() => removeFromCart(item.id)} className="sm:hidden p-3 text-red-300"><FaTrash size={14} /></button>
                </div>
              ))}
            </div>
          </div>

          {/* O'NG TOMON: UMUMIY TO'LOV (Sticky) */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-[35px] border border-gray-100 p-8 shadow-xl shadow-purple-900/5">
              <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
                <FaCat className="text-purple-600" /> Buyurtma xulosasi
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-400 font-bold text-sm">
                  <span>Mahsulotlar soni:</span>
                  <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)} ta</span>
                </div>
                <div className="flex justify-between text-gray-400 font-bold text-sm">
                  <span>Yetkazib berish:</span>
                  <span className="text-green-500">Bepul</span>
                </div>
                <div className="pt-4 border-t border-gray-50 flex justify-between items-end">
                  <span className="text-gray-800 font-black uppercase text-xs tracking-widest">Jami:</span>
                  <div className="text-right">
                    <h2 className="text-2xl font-black text-[#9333EA] leading-none">{totalPrice.toLocaleString()}</h2>
                    <span className="text-[10px] font-black text-gray-400 uppercase">so'm</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleOrder}
                disabled={loading}
                className={`w-full py-5 rounded-2xl font-black text-white uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg ${
                  loading ? "bg-gray-300" : "bg-[#9333EA] hover:bg-black shadow-purple-200"
                }`}
              >
                {loading ? "Yuborilmoqda..." : (
                  <>
                    Tasdiqlash <FaChevronRight />
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-gray-400 mt-4 font-medium px-4">
                "Tasdiqlash" tugmasini bosish orqali xizmat ko'rsatish shartlariga rozilik bildirasiz.
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

export default Cart