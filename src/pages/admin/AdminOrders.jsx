import React, { useState } from "react"
import { FaEye, FaCheck, FaTruck, FaTimes, FaSearch, FaUserCircle } from "react-icons/fa"
import toast from "react-hot-toast"

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState("")
  
  // Boshlang'ich buyurtmalar datasi
  const [orders, setOrders] = useState([
    { 
      id: "ORD-7721", 
      customer: "Ali Valiyev", 
      phone: "+998 90 123 45 67",
      items: "Premium Ozuqa (2x)", 
      total: 90000, 
      status: "Yangi",
      date: "2026-03-25"
    },
    { 
      id: "ORD-8842", 
      customer: "Dilnoza Karimova", 
      phone: "+998 93 987 65 43",
      items: "Mushuk To'shagi (1x)", 
      total: 350000, 
      status: "Yetkazilmoqda",
      date: "2026-03-26"
    },
    { 
      id: "ORD-9910", 
      customer: "Sardor Azimov", 
      phone: "+998 94 555 11 22",
      items: "Lazer O'yinchoq (3x)", 
      total: 135000, 
      status: "Yakunlangan",
      date: "2026-03-24"
    }
  ])

  // Status ranglarini aniqlash
  const getStatusStyle = (status) => {
    switch (status) {
      case "Yangi": return "bg-blue-50 text-blue-600 border-blue-100"
      case "Yetkazilmoqda": return "bg-amber-50 text-amber-600 border-amber-100"
      case "Yakunlangan": return "bg-emerald-50 text-emerald-600 border-emerald-100"
      case "Bekor qilingan": return "bg-red-50 text-red-600 border-red-100"
      default: return "bg-gray-50 text-gray-500"
    }
  }

  // Statusni o'zgartirish funksiyasi
  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order))
    toast.success(`Buyurtma holati: ${newStatus}`, {
      style: { borderRadius: '15px', background: '#1e1b4b', color: '#fff' }
    })
  }

  const filteredOrders = orders.filter(o => 
    o.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    o.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-800 tracking-tighter">
            Buyurtmalar <span className="text-purple-600 italic">Nazorati</span>
          </h1>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[4px] mt-2">Sotuvlar oqimi</p>
        </div>
        
        {/* QIDIRUV */}
        <div className="relative group w-full md:w-80">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-purple-500 transition-colors" />
          <input 
            type="text" 
            placeholder="ID yoki ism bo'yicha..." 
            className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-4 ring-purple-50 transition-all font-bold text-gray-700 shadow-sm text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white rounded-[40px] border border-gray-50 overflow-hidden shadow-2xl shadow-purple-900/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Buyurtma ID</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Mijoz</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Summa</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Holat</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-purple-50/5 transition-all group">
                  <td className="px-8 py-6 font-black text-purple-600 text-sm italic">{order.id}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-200 text-3xl"><FaUserCircle /></div>
                      <div>
                        <p className="font-black text-gray-800 text-sm">{order.customer}</p>
                        <p className="text-[10px] text-gray-400 font-bold">{order.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="font-black text-gray-800">{order.total.toLocaleString()} <span className="text-[10px] text-gray-400 uppercase">uzs</span></p>
                    <p className="text-[10px] text-gray-400 font-medium italic">{order.items}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      {/* TASDIQLASH */}
                      <button 
                        onClick={() => updateStatus(order.id, "Yetkazilmoqda")}
                        className="p-3 bg-amber-50 text-amber-600 rounded-xl hover:bg-amber-500 hover:text-white transition-all shadow-sm active:scale-90"
                        title="Yetkazishga yuborish"
                      >
                        <FaTruck size={14} />
                      </button>
                      {/* YAKUNLASH */}
                      <button 
                        onClick={() => updateStatus(order.id, "Yakunlangan")}
                        className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm active:scale-90"
                        title="Yakunlash"
                      >
                        <FaCheck size={14} />
                      </button>
                      {/* BEKOR QILISH */}
                      <button 
                        onClick={() => updateStatus(order.id, "Bekor qilingan")}
                        className="p-3 bg-red-50 text-red-400 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm active:scale-90"
                        title="Bekor qilish"
                      >
                        <FaTimes size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminOrders