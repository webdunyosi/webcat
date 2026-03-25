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
    <header className="h-16 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white flex items-center justify-between px-8 shadow-2xl z-50 sticky top-0 border-b border-white/10">
      
      {/* Logo */}
      <Link to="/admin" className="flex items-center gap-2 text-2xl font-black group">
        <FaCat className="text-3xl text-purple-400" />
        <span className="tracking-tight italic text-sm uppercase">
          Web Cat <span className="text-purple-400 ml-1">Admin</span>
        </span>
      </Link>

      <div className="flex items-center gap-6">
        {/* Bildirishnomalar */}
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <FaBell size={22} />
          <span className="absolute top-1.5 right-2 bg-red-500 w-2 h-2 rounded-full border border-gray-900"></span>
        </button>

        {/* Admin Profil va Chiqish */}
        <div className="flex items-center gap-3 backdrop-blur-lg bg-white/10 px-4 py-1.5 rounded-2xl border border-white/10">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
            <FaUserShield size={18} />
          </div>
          <span className="font-bold text-xs uppercase tracking-widest text-purple-100 hidden sm:block">
            {user?.name || "Admin"}
          </span>
          <button
            onClick={handleLogout}
            className="ml-2 bg-red-500 text-white px-3 py-1 rounded-lg text-[10px] font-black hover:bg-red-600 transition active:scale-95 uppercase"
          >
            Chiqish
          </button>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader  