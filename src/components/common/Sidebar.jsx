import { FaBoxOpen, FaInfoCircle, FaShoppingBag } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
  const location = useLocation()

  // Aktiv linkni aniqlash uchun yordamchi funksiya
  const isActive = (path) => location.pathname === path

  return (
    <div>
      <aside className="fixed top-16 left-0 bottom-0 z-20 w-1/5 bg-linear-180 from-purple-700 to-blue-600 p-4 flex flex-col gap-2 shrink-0">
        <Link
          to="/"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            isActive("/")
              ? "bg-white text-[#9333EA] shadow-md hover:shadow-purple-400"
              : "text-white hover:bg-[#A855F7]"
          }`}
        >
          <FaShoppingBag />
          <span className="font-medium">Mahsulotlar</span>
        </Link>

        <Link
          to="/orders"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            isActive("/orders")
              ? "bg-white text-[#9333EA] shadow-lg"
              : "text-white hover:bg-[#A855F7]"
          }`}
        >
          <FaBoxOpen />
          <span className="font-medium">Buyurtmalarim</span>
        </Link>

        <Link
          to="/about"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            isActive("/about")
              ? "bg-white text-[#9333EA] shadow-lg"
              : "text-white hover:bg-[#A855F7]"
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
