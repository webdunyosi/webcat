import { FaBox, FaClipboardList, FaChartPie, FaUsers } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

const AdminSidebar = () => {
  const location = useLocation()
  
  // Aktiv linkni aniqlash uchun funksiya
  const isActive = (path) => location.pathname === path

  const menuItems = [
    { 
      name: "Dashboard", 
      path: "/admin", 
      icon: <FaChartPie /> 
    },
    { 
      name: "Mahsulotlar", 
      path: "/admin/products", 
      icon: <FaBox /> 
    },
    { 
      name: "Buyurtmalar", 
      path: "/admin/orders", 
      icon: <FaClipboardList /> 
    },
    { 
      name: "Foydalanuvchilar", 
      path: "/admin/users", 
      icon: <FaUsers /> 
    },
  ]

  return (
    <div className="w-1/5 shrink-0">
      <aside className="fixed top-16 left-0 bottom-0 z-20 w-1/5 bg-gradient-to-b from-gray-900 to-purple-950 p-4 flex flex-col gap-2 shadow-2xl border-r border-white/5">
        
        {/* Navigatsiya menyusi */}
        <nav className="flex flex-col gap-2 mt-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                isActive(item.path)
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40 scale-[1.02]"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className={`text-xl transition-transform duration-300 ${isActive(item.path) ? "scale-110" : "group-hover:scale-110"}`}>
                {item.icon}
              </span>
              <span className="font-bold text-sm tracking-wide">
                {item.name}
              </span>

              {/* Aktiv bo'lganda yonida kichik indikator */}
              {isActive(item.path) && (
                <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
              )}
            </Link>
          ))}
        </nav>

      </aside>
    </div>
  )
}

export default AdminSidebar