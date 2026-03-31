import { FaBox, FaClipboardList, FaChartPie, FaUsers } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

const AdminSidebar = () => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  const menuItems = [
    { name: "Asosiy", path: "/admin", icon: <FaChartPie /> },
    { name: "Tovarlar", path: "/admin/products", icon: <FaBox /> },
    { name: "Buyurtma", path: "/admin/orders", icon: <FaClipboardList /> },
    { name: "Userlar", path: "/admin/users", icon: <FaUsers /> },
  ]

  return (
    <>
      {/* --- DESKTOP SIDEBAR (Faqat katta ekranlar uchun) --- */}
      <aside className="hidden lg:flex fixed top-20 left-0 bottom-0 z-20 w-1/5 bg-[#0f172a] p-6 pl-2 flex-col gap-3 border-r border-white/5 shadow-2xl">
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                isActive(item.path)
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-900/40 translate-x-2"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className={`text-xl transition-transform duration-300 ${isActive(item.path) ? "scale-110" : "group-hover:scale-110"}`}>
                {item.icon}
              </span>
              <span className="font-bold text-sm tracking-wide uppercase">{item.name}</span>
              {isActive(item.path) && (
                <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></div>
              )}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pb-6 text-center opacity-20">
           <p className="text-[10px] text-white font-black tracking-[5px] uppercase">Admin Mode</p>
        </div>
      </aside>

      {/* --- MOBILE LIQUID BOTTOM NAV (Faqat telefonlar uchun) --- */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-[#0f172a] h-[70px] flex justify-around items-center px-4 rounded-t-[30px] border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
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
                <div className="absolute -top-[30px] w-14 h-14 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full border-[5px] border-[#f8fafc] shadow-lg shadow-purple-900/40 flex items-center justify-center transition-all duration-500 animate-pop">
                   <span className="text-white text-xl">{item.icon}</span>
                </div>
              )}

              {/* Inactive Icon & Label */}
              <div className={`transition-all duration-500 flex flex-col items-center ${active ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}>
                <div className="text-xl text-gray-500">{item.icon}</div>
                <span className="text-[9px] font-black uppercase tracking-tighter text-gray-500 mt-1">{item.name}</span>
              </div>

              {/* Indicator Dot */}
              {active && (
                <div className="absolute bottom-1 w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"></div>
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

export default AdminSidebar