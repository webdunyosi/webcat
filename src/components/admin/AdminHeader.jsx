import { FaCat, FaBell, FaSignOutAlt, FaUserShield } from "react-icons/fa"
import { useAuth } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const AdminHeader = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    toast.success("Tizimdan chiqildi")
    navigate("/login")
  }

  return (
    <header className="h-16 md:h-20 bg-[#0f172a] text-white flex items-center justify-between px-4 md:px-10 shadow-2xl z-[60] sticky top-0 border-b border-white/5 backdrop-blur-md bg-[#0f172a]/95">
      
      {/* --- CHAP TOMON: LOGO & QIDIRUV --- */}
      <div className="flex items-center gap-8">
        <Link to="/admin" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:rotate-12 transition-transform duration-300">
            <FaCat className="text-xl text-white" />
          </div>
          <div>
            <h1 className="text-sm md:text-lg font-black uppercase tracking-tighter leading-none">
              Web Cat <span className="text-purple-500 italic">Admin</span>
            </h1>
            <p className="text-[9px] text-gray-500 font-bold tracking-[3px] uppercase mt-1">Boshqaruv paneli</p>
          </div>
        </Link>
      </div>

      {/* --- O'NG TOMON: ACTIONLAR --- */}
      <div className="flex items-center gap-2 md:gap-6">
        
        {/* Bildirishnomalar */}
        <button className="relative p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
          <FaBell size={20} className="group-hover:animate-swing" />
          <span className="absolute top-2.5 right-2.5 bg-red-500 w-2 h-2 rounded-full border-2 border-[#0f172a] animate-ping"></span>
          <span className="absolute top-2.5 right-2.5 bg-red-500 w-2 h-2 rounded-full border-2 border-[#0f172a]"></span>
        </button>

        {/* Admin Profil qismi */}
        <div className="h-10 md:h-12 flex items-center gap-2 md:gap-3 bg-white/5 p-1 md:pr-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-inner">
            <FaUserShield size={18} />
          </div>
          
          <div className="hidden md:block">
            <p className="text-[10px] font-black uppercase text-purple-200 leading-none mb-0.5">
              {user?.role || "Administrator"}
            </p>
            <p className="text-xs font-bold text-white truncate max-w-[100px]">
              {user?.name || "Farangiz"}
            </p>
          </div>

          <div className="h-6 w-[1px] bg-white/10 mx-1 hidden md:block"></div>

          <button
            onClick={handleLogout}
            className="p-2 text-gray-400 hover:text-red-400 transition-colors group"
            title="Tizimdan chiqish"
          >
            <FaSignOutAlt size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Qo'shimcha Animatsiyalar uchun CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes swing {
          0%, 100% { transform: rotate(0); }
          20% { transform: rotate(15deg); }
          40% { transform: rotate(-10deg); }
          60% { transform: rotate(5deg); }
          80% { transform: rotate(-5deg); }
        }
        .group-hover\\:animate-swing:hover {
          animation: swing 0.6s ease-in-out;
        }
      `}} />
    </header>
  )
}

export default AdminHeader