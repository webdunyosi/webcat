import React from "react"
import { useNavigate } from "react-router-dom"
import { FaBox, FaUsers, FaClipboardList, FaMoneyBillWave, FaArrowUp, FaChartLine } from "react-icons/fa"
// JSON ma'lumotlarini import qilamiz
import DASHBOARD_DATA from "../../data/dashboard.json"

// Ikonkalar va ranglar xaritasi (Mapping)
const statConfig = {
  products: { icon: <FaBox />, color: "from-blue-600 to-indigo-500" },
  users: { icon: <FaUsers />, color: "from-purple-600 to-fuchsia-500" },
  orders: { icon: <FaClipboardList />, color: "from-orange-500 to-amber-400" },
  revenue: { icon: <FaMoneyBillWave />, color: "from-emerald-500 to-teal-400" }
}

// --- KICHIK KOMPONENTLAR ---

const StatCard = ({ item }) => {
  const config = statConfig[item.type]
  return (
    <div className="group relative bg-white p-7 rounded-[35px] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${config.color} opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 rounded-full`}></div>
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center text-white text-2xl shadow-lg mb-6 group-hover:rotate-6 transition-transform`}>
          {config.icon}
        </div>
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.title}</p>
        <h3 className="text-2xl font-black text-gray-800 tracking-tight">{item.value}</h3>
        <div className="flex items-center gap-1 mt-4 text-emerald-500 font-black text-[10px] bg-emerald-50 w-fit px-2 py-1 rounded-lg">
          <FaArrowUp size={8} />
          <span>{item.percent}</span>
          <span className="text-gray-400 font-bold ml-1 uppercase text-[8px]">O'sish</span>
        </div>
      </div>
    </div>
  )
}

const UserRow = ({ user }) => (
  <div className="flex items-center gap-4 group cursor-pointer border-b border-gray-50 pb-4 last:border-0">
    <div className={`w-11 h-11 rounded-2xl ${user.color} flex items-center justify-center font-black text-xs group-hover:scale-110 transition-transform shadow-inner`}>
      {user.name.split(' ').map(n => n[0]).join('')}
    </div>
    <div className="flex-1">
      <p className="text-sm font-black text-gray-800 group-hover:text-purple-600 transition-colors">{user.name}</p>
      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">{user.email}</p>
    </div>
  </div>
)

// --- ASOSIY DASHBOARD ---

const AdminDashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-800 tracking-tight">Dashboard</h1>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[3px] mt-2">Xush kelibsiz, Admin! 🐾</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-50">
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Tizim Onlayn</span>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_DATA.stats.map((stat) => (
          <StatCard key={stat.id} item={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* CHART CONTAINER */}
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-950 rounded-[50px] p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex items-center justify-between mb-12">
            <div>
              <h2 className="text-xl font-black text-white flex items-center gap-3">
                <FaChartLine className="text-purple-500" /> Dinamika
              </h2>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Haftalik ko'rsatkichlar</p>
            </div>
          </div>

          <div className="h-56 w-full flex items-end gap-5 justify-around relative z-10">
            {DASHBOARD_DATA.chartData.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar h-full justify-end">
                <div 
                  style={{ height: `${val}%` }} 
                  className="w-full bg-gradient-to-t from-purple-700 via-indigo-600 to-purple-400 rounded-t-2xl opacity-70 group-hover/bar:opacity-100 group-hover/bar:scale-x-110 transition-all duration-500 relative cursor-pointer"
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-[10px] font-black py-1.5 px-3 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-opacity shadow-xl">
                    {val}%
                  </div>
                </div>
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-tighter">Kun {i+1}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-purple-500/5 blur-[120px] pointer-events-none"></div>
        </div>

        {/* USERS LIST */}
        <div className="bg-white rounded-[50px] p-10 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-lg font-black text-gray-800 tracking-tight">Yangi Mijozlar</h2>
            <span className="text-[10px] font-black text-purple-600 bg-purple-50 px-3 py-1.5 rounded-xl uppercase">Yangi</span>
          </div>
          
          <div className="space-y-6">
            {DASHBOARD_DATA.newUsers.map((user, i) => (
              <UserRow key={i} user={user} />
            ))}
          </div>
          
          <button 
            onClick={() => navigate("/admin/users")}
            className="w-full mt-10 py-5 bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-[4px] rounded-[22px] hover:bg-purple-600 hover:text-white hover:shadow-xl hover:shadow-purple-100 transition-all duration-500 active:scale-95 cursor-pointer"
          >
            Barchasini ko'rish
          </button>
        </div>

      </div>
    </div>
  )
}

export default AdminDashboard