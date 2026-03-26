import { FaBox, FaUsers, FaClipboardList, FaMoneyBillWave, FaArrowUp, FaChartLine } from "react-icons/fa"

const AdminDashboard = () => {
  // Simulyatsiya qilingan ma'lumotlar
  const stats = [
    {
      id: 1,
      title: "Jami Mahsulotlar",
      value: "156 ta",
      icon: <FaBox />,
      color: "from-blue-600 to-indigo-500",
      percent: "+12%",
    },
    {
      id: 2,
      title: "Mijozlar",
      value: "1,240 ta",
      icon: <FaUsers />,
      color: "from-purple-600 to-fuchsia-500",
      percent: "+8%",
    },
    {
      id: 3,
      title: "Buyurtmalar",
      value: "542 ta",
      icon: <FaClipboardList />,
      color: "from-orange-500 to-amber-400",
      percent: "+20%",
    },
    {
      id: 4,
      title: "Umumiy Daromad",
      value: "18.4M so'm",
      icon: <FaMoneyBillWave />,
      color: "from-emerald-500 to-teal-400",
      percent: "+15%",
    },
  ]

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Sarlavha (Header Dashboard) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-800 tracking-tight">
            Dashboard
          </h1>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[2px] mt-1">
            Xush kelibsiz, Admin! 🐾
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tizim Onlayn</span>
        </div>
      </div>

      {/* Statistika Kartochkalari */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-white p-7 rounded-[35px] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            {/* Dekorativ orqa fon */}
            <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 rounded-full`}></div>

            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl shadow-lg shadow-indigo-100 mb-6 group-hover:rotate-6 transition-transform`}>
                {item.icon}
              </div>
              
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.title}</p>
              <h3 className="text-2xl font-black text-gray-800">{item.value}</h3>
              
              <div className="flex items-center gap-1 mt-4 text-emerald-500 font-black text-[10px] bg-emerald-50 w-fit px-2 py-1 rounded-lg">
                <FaArrowUp size={8} />
                <span>{item.percent}</span>
                <span className="text-gray-400 font-bold ml-1 uppercase">O'sish</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grafik va Faoliyat bo'limi */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Sotuvlar Grafigi (Pro Dark Design) */}
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-purple-950 rounded-[45px] p-10 shadow-2xl relative overflow-hidden group">
          <div className="relative z-10 flex items-center justify-between mb-10">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <FaChartLine className="text-purple-400" />
                Sotuvlar Dinamikasi
              </h2>
              <p className="text-gray-400 text-xs font-medium mt-1">Oxirgi haftalik ko'rsatkichlar</p>
            </div>
            <select className="bg-white/10 text-white border-none outline-none rounded-xl px-4 py-2 text-xs font-bold backdrop-blur-md cursor-pointer hover:bg-white/20 transition-all">
              <option className="bg-gray-900">Haftalik</option>
              <option className="bg-gray-900">Oylik</option>
            </select>
          </div>

          {/* Vizual Grafik (CSS Bars) */}
          <div className="h-48 w-full flex items-end gap-4 justify-around relative z-10">
            {[35, 60, 45, 85, 55, 75, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3">
                <div 
                  style={{ height: `${h}%` }} 
                  className="w-full bg-gradient-to-t from-purple-600 via-indigo-500 to-purple-400 rounded-t-2xl opacity-80 hover:opacity-100 hover:scale-x-105 transition-all cursor-pointer relative group/bar"
                >
                   {/* Hover Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-[10px] font-black py-1 px-3 rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity shadow-xl">
                    {h}%
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase">Kun {i+1}</span>
              </div>
            ))}
          </div>
          
          {/* Neon effektlar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/5 blur-[120px] pointer-events-none"></div>
        </div>

        {/* Oxirgi Foydalanuvchilar Listi */}
        <div className="bg-white rounded-[45px] p-10 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-black text-gray-800">Yangi Mijozlar</h2>
            <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
               <FaUsers size={14} />
            </div>
          </div>
          
          <div className="space-y-7">
            {[
              { name: "Asaloy Ahmedova", email: "asal@mail.uz", color: "bg-pink-100 text-pink-600" },
              { name: "Bekzod Rahmonov", email: "bek@mail.uz", color: "bg-blue-100 text-blue-600" },
              { name: "Sardor Komilov", email: "sara@mail.uz", color: "bg-orange-100 text-orange-600" },
              { name: "Guli Ergasheva", email: "guli@mail.uz", color: "bg-emerald-100 text-emerald-600" },
            ].map((u, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className={`w-12 h-12 rounded-2xl ${u.color} flex items-center justify-center font-black text-sm group-hover:scale-110 transition-transform shadow-inner`}>
                  {u.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 border-b border-gray-50 pb-2">
                  <p className="text-sm font-black text-gray-800 group-hover:text-purple-600 transition-colors">{u.name}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{u.email}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-10 py-4 bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-[3px] rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300">
            Hammasini ko'rish
          </button>
        </div>

      </div>
    </div>
  )
}

export default AdminDashboard