import React, { useState, useEffect } from "react"
import { FaUserShield, FaUserSlash, FaSearch, FaUserCircle, FaKey } from "react-icons/fa"
import toast from "react-hot-toast"
// JSON faylni import qilamiz
import USERS_DATA from "../../data/users.json"

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Sizning JSON strukturangizda ma'lumotlar "users" kaliti ichida
    setUsers(USERS_DATA.users)
  }, [])

  // Statusni o'zgartirish (Simulyatsiya)
  const toggleStatus = (id) => {
    toast.error("Foydalanuvchi cheklandi!", {
      style: { borderRadius: '15px', background: '#333', color: '#fff' }
    })
  }

  // Rolni o'zgartirish (Simulyatsiya)
  const toggleRole = (id) => {
    toast.success("Rol muvaffaqiyatli o'zgartirildi", {
      icon: '🔑'
    })
  }

  const filteredUsers = users.filter(u => 
    u.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.username.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-800 tracking-tighter">
            Tizim <span className="text-purple-600 italic">A'zolari</span>
          </h1>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[4px] mt-2 italic">
            Jami: {users.length} ta profil aniqlandi
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="relative group w-full md:w-96">
          <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-purple-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Ism yoki login orqali qidirish..." 
            className="w-full pl-16 pr-6 py-4 bg-white border border-gray-100 rounded-[25px] outline-none focus:ring-4 ring-purple-50 transition-all font-bold text-gray-700 shadow-sm text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="bg-white rounded-[45px] border border-gray-50 overflow-hidden shadow-2xl shadow-purple-900/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-10 py-7 text-[10px] font-black text-gray-400 uppercase tracking-[4px]">Profil</th>
                <th className="px-10 py-7 text-[10px] font-black text-gray-400 uppercase tracking-[4px]">Login / Parol</th>
                <th className="px-10 py-7 text-[10px] font-black text-gray-400 uppercase tracking-[4px]">Rol</th>
                <th className="px-10 py-7 text-[10px] font-black text-gray-400 uppercase tracking-[4px]">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-purple-50/10 transition-all group">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-[20px] flex items-center justify-center text-gray-300 group-hover:text-purple-500 transition-colors border border-gray-100">
                        <FaUserCircle size={28} />
                      </div>
                      <div>
                        <p className="font-black text-gray-800 text-base leading-tight">{user.fullName}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">ID: #000{user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <div className="space-y-1">
                      <p className="text-sm font-black text-gray-700">@{user.username}</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                        <FaKey size={8} /> 
                        <span className="blur-[3px] group-hover:blur-none transition-all duration-500 cursor-help">{user.password}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[2px] border ${
                      user.role === "admin" 
                      ? "bg-purple-50 text-purple-600 border-purple-100 shadow-sm" 
                      : "bg-gray-50 text-gray-400 border-gray-100"
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => toggleRole(user.id)}
                        className="p-3 bg-indigo-50 text-indigo-500 rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm active:scale-90"
                        title="Rolni o'zgartirish"
                      >
                        <FaUserShield size={16} />
                      </button>
                      <button 
                        onClick={() => toggleStatus(user.id)}
                        className="p-3 bg-red-50 text-red-400 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm active:scale-90"
                        title="Bloklash"
                      >
                        <FaUserSlash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FOOTER INFO */}
      <div className="flex justify-center">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[5px]">Web Cat Security System</p>
      </div>

    </div>
  )
}

export default AdminUsers