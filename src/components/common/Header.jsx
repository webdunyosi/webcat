import { FaShoppingCart, FaCat } from "react-icons/fa"
import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const Header = () => {
  const { cartItems } = useCart()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const handleLogout = () => {
    logout()
    toast.success("Tizimdan chiqdingiz")
    navigate("/login")
  }

  return (
    <header className="h-16 bg-gradient-to-r from-purple-700 to-blue-600 text-white flex items-center justify-between px-8 shadow-lg z-50 sticky top-0">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold group">
        <FaCat className="text-3xl group-hover:rotate-12 transition-transform duration-300" />
        <span className="tracking-tight italic">Web Cat</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/cart"
          className="relative p-2 hover:scale-110 transition-transform"
        >
          <FaShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-purple-700 font-bold animate-pulse">
              {totalItems}
            </span>
          )}
        </Link>

        <div className="flex items-center gap-3 backdrop-blur-md bg-white/20 px-4 py-1.5 rounded-full border border-white/20 shadow-inner">
          <span className="font-medium text-sm hidden sm:block">
            {user ? user.name : "Mehmon"}
          </span>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-white text-purple-700 px-4 py-1 rounded-full text-xs font-bold hover:bg-red-50 transition active:scale-95 shadow-sm"
            >
              Chiqish
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-white text-purple-700 px-4 py-1 rounded-full text-xs font-bold transition"
            >
              Kirish
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
