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
      {/* DESKTOP SIDEBAR (O'zgarishsiz qoldi) */}
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

      {/* MOBILE LIQUID NAVIGATION (Admin paneldagi uslubda) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white h-[70px] flex justify-around items-center px-4 rounded-t-[30px] border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        {menuItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-16"
            >
              {/* Active Liquid Pop-up */}
              {active && (
                <div className="absolute -top-[30px] w-14 h-14 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full border-[5px] border-white shadow-lg shadow-purple-200 flex items-center justify-center transition-all duration-500 animate-pop">
                   <span className="text-white text-xl">{item.icon}</span>
                   {item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                      {item.badge}
                    </span>
                   )}
                </div>
              )}

              {/* Inactive Icon & Label */}
              <div className={`transition-all duration-500 flex flex-col items-center ${active ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}>
                <div className="text-xl text-gray-400">{item.icon}</div>
                <span className="text-[9px] font-black uppercase tracking-tighter text-gray-400 mt-1">{item.label}</span>
                
                {/* Badge for inactive state */}
                {!active && item.badge > 0 && (
                  <span className="absolute -top-1 right-2 bg-red-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full border border-white">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Indicator Dot */}
              {active && (
                <div className="absolute bottom-1 w-1.5 h-1.5 bg-purple-600 rounded-full shadow-[0_0_8px_rgba(147,51,234,1)]"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Animatsiya uchun CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pop {
          0% { transform: scale(0.5) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-pop {
          animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}} />
    </>
  )
}

export default Sidebar