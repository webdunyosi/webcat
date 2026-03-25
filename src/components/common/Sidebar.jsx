import { FaBoxOpen, FaInfoCircle, FaShoppingBag, FaShoppingCart } from "react-icons/fa" // FaShoppingCart qo'shildi
import { Link, useLocation } from "react-router-dom"
import { useCart } from "../../context/CartContext" // Savatdagi sonni olish uchun

const Sidebar = () => {
  const location = useLocation()
  const { cartItems } = useCart() // Savatdagi mahsulotlarni olamiz

  // Savatdagi jami mahsulotlar sonini hisoblash
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  // Aktiv linkni aniqlash uchun yordamchi funksiya
  const isActive = (path) => location.pathname === path

  return (
    <div className="w-1/5 shrink-0">
      <aside className="fixed top-16 left-0 bottom-0 z-20 w-1/5 bg-gradient-to-b from-purple-700 to-blue-600 p-4 flex flex-col gap-2">
        
        {/* Mahsulotlar */}
        <Link
          to="/"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            isActive("/")
              ? "bg-white text-[#9333EA] shadow-md"
              : "text-white hover:bg-white/10"
          }`}
        >
          <FaShoppingBag />
          <span className="font-medium">Mahsulotlar</span>
        </Link>

        {/* Savatcha - YANGI QISM */}
        <Link
          to="/cart"
          className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
            isActive("/cart")
              ? "bg-white text-[#9333EA] shadow-lg"
              : "text-white hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <FaShoppingCart />
            <span className="font-medium">Savatcha</span>
          </div>
          
          {/* Savatda mahsulot bo'lsa, sonini ko'rsatish */}
          {totalItems > 0 && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
              isActive("/cart") 
                ? "bg-purple-600 text-white border-purple-600" 
                : "bg-red-500 text-white border-red-400 animate-pulse"
            }`}>
              {totalItems}
            </span>
          )}
        </Link>

        {/* Buyurtmalarim */}
        <Link
          to="/orders"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            isActive("/orders")
              ? "bg-white text-[#9333EA] shadow-lg"
              : "text-white hover:bg-white/10"
          }`}
        >
          <FaBoxOpen />
          <span className="font-medium">Buyurtmalarim</span>
        </Link>

        {/* Do'kon Haqida */}
        <Link
          to="/about"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            isActive("/about")
              ? "bg-white text-[#9333EA] shadow-lg"
              : "text-white hover:bg-white/10"
          }`}
        >
          <FaInfoCircle />
          <span className="font-medium">Do'kon Haqida</span>
        </Link>

      </aside>
    </div>
  )
}

export default Sidebar