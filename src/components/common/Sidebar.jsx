import { FaBoxOpen, FaInfoCircle, FaShoppingBag, FaShoppingCart } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const Sidebar = () => {
  const location = useLocation()
  const { cartItems } = useCart()
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const isActive = (path) => location.pathname === path

  const menuItems = [
    { path: "/", label: "Do'kon", icon: <FaShoppingBag /> },
    { path: "/cart", label: "Savat", icon: <FaShoppingCart />, badge: totalItems },
    { path: "/orders", label: "Buyurtma", icon: <FaBoxOpen /> },
    { path: "/about", label: "Haqida", icon: <FaInfoCircle /> },
  ]

  return (
    <>
      {/* DESKTOP SIDEBAR (lg ekrandan boshlab ko'rinadi) */}
      <aside className="hidden lg:flex fixed top-16 left-0 bottom-0 z-20 w-1/5 bg-gradient-to-b from-purple-700 to-blue-600 p-4 flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
              isActive(item.path) ? "bg-white text-purple-600 shadow-lg" : "text-white hover:bg-white/10"
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </div>
            {item.badge > 0 && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive(item.path) ? 'bg-purple-600 text-white' : 'bg-red-500 text-white animate-pulse'}`}>
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </aside>

      {/* MOBILE BOTTOM NAVIGATION (faqat mobilda ko'rinadi) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-100 flex justify-around items-center px-2 py-2 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all relative ${
              isActive(item.path) ? "text-purple-600" : "text-gray-400"
            }`}
          >
            <div className={`text-xl ${isActive(item.path) ? "scale-110" : ""}`}>{item.icon}</div>
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
            
            {/* Mobilda savatdagi son belgisi */}
            {item.badge > 0 && (
              <span className="absolute top-1 right-2 bg-red-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full border border-white">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Sidebar