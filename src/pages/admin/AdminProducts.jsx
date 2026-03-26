import React, { useState } from "react"
import { FaEdit, FaTrash, FaPlus, FaSearch, FaFilter } from "react-icons/fa"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"

const AdminProducts = () => {
  // ALL_PRODUCTS ma'lumotlari asosida boshlang'ich holatni belgilaymiz
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Mushuk Ovqati",
      price: 45000, 
      category: "foods",
      image: "/products/1.png",
      stock: 24 // Admin uchun qo'shimcha maydon
    },
    {
      id: 2,
      name: "Mushuk Konserva Ovqati",
      price: 25000,
      category: "foods",
      image: "/products/2.png",
      stock: 12
    },
    {
      id: 3,
      name: "Mushuk O'yinchoqlari",
      price: 15000,
      category: "items",
      image: "/products/3.png",
      stock: 45
    },
    {
      id: 4,
      name: "Mushuk Uyqu To'shagi",
      price: 30000,
      category: "items",
      image: "/products/4.png",
      stock: 8
    },
    {
      id: 5,
      name: "Scottish Fold Mushuk",
      price: 150000,
      category: "cats",
      image: "/products/5.png",
      stock: 2
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")

  const handleDelete = (id, name) => {
    if (window.confirm(`${name} mahsulotini ro'yxatdan o'chirmoqchimisiz?`)) {
      setProducts(products.filter(p => p.id !== id))
      toast.error(`${name} o'chirildi!`)
    }
  }

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-800 tracking-tight">
            Mahsulotlar <span className="text-purple-600">Boshqaruvi</span>
          </h1>
          <p className="text-gray-400 font-medium text-sm mt-1">
            Omborda jami {products.length} turdagi mahsulot bor
          </p>
        </div>
        
        <Link
          to="/admin/add-product"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-[20px] font-black flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-purple-200 transition-all active:scale-95 text-sm uppercase tracking-widest"
        >
          <FaPlus /> Yangi Qo'shish
        </Link>
      </div>

      {/* SEARCH BAR */}
      <div className="bg-white p-4 rounded-[25px] border border-gray-100 shadow-sm">
        <div className="relative group">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-purple-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Mahsulot nomini qidirish..." 
            className="w-full pl-14 pr-6 py-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 ring-purple-100 transition-all font-medium text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* PRODUCTS TABLE */}
      <div className="bg-white rounded-[40px] border border-gray-50 overflow-hidden shadow-2xl shadow-purple-900/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Rasm & Nomi</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Kategoriya</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Narxi</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Soni</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-purple-50/20 transition-all group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gray-100 p-1 border border-gray-100 group-hover:scale-110 transition-transform flex items-center justify-center">
                        <img src={p.image} alt={p.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="font-black text-gray-800 text-sm">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-purple-50 text-purple-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                      {p.category}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-black text-gray-800">{p.price.toLocaleString()}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">so'm</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm font-black text-gray-600 italic">
                    {p.stock} dona
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <button className="p-3 bg-indigo-50 text-indigo-500 rounded-xl hover:bg-indigo-600 hover:text-white transition-all active:scale-90" title="Tahrirlash">
                        <FaEdit size={14} />
                      </button>
                      <button 
                        onClick={() => handleDelete(p.id, p.name)}
                        className="p-3 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all active:scale-90" 
                        title="O'chirish"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="p-20 text-center">
            <h3 className="text-xl font-bold text-gray-300 italic">Bunday mahsulot topilmadi...</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminProducts