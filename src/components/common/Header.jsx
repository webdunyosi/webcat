import { FaShoppingCart, FaCat } from "react-icons/fa" // FaCat qo'shildi
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Header = () => {
  const { cartItems } = useCart()

  // Savatdagi jami mahsulotlar sonini hisoblash
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="h-16 bg-linear-90 from-purple-700 to-blue-600 text-white flex items-center justify-between px-8 shadow-md shadow-purple-500 z-50">
      {/* Logotip qismi: Emoji o'rniga React Icon */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-bold cursor-pointer group"
      >
        <FaCat className="text-3xl group-hover:rotate-12 transition-transform duration-300" />
        <span className="tracking-tight">Web Cat</span>
      </Link>

      <div className="flex items-center gap-6">
        {/* Savatcha ikonka qismi */}
        <Link
          to="/cart"
          className="relative cursor-pointer hover:scale-110 transition-all duration-200 p-2"
        >
          <FaShoppingCart size={24} />

          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#9333EA] font-bold animate-bounce">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Foydalanuvchi ma'lumotlari */}
        <div className="flex items-center gap-3 backdrop-blur-2xl bg-white/20 px-4 py-2 rounded-full border border-white/10">
          <span className="font-medium text-sm hidden sm:block">
            Dilnoza Rashidova
          </span>
          <button className="cursor-pointer bg-white text-[#9333EA] px-5 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition shadow-sm active:scale-95">
            Chiqish
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
