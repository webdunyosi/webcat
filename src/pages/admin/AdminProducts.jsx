import React, { useState } from "react"
import { FaEdit, FaTrash, FaPlus, FaSearch, FaSave, FaTimes, FaBoxOpen, FaCloudUploadAlt, FaCat } from "react-icons/fa"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"

const AdminProducts = () => {
  // 1. Ma'lumotlar bazasi simulyatsiyasi (Barcha maydonlar bilan)
  const [products, setProducts] = useState([
    { id: 1, name: "Premium Mushuk Ovqati", price: 45000, category: "foods", image: "/products/1.png", stock: 24, desc: "Yuqori sifatli oziqa" },
    { id: 2, name: "Mushuk Konserva Ovqati", price: 25000, category: "foods", image: "/products/2.png", stock: 12, desc: "Tabiiy go'shtli konserva" },
    { id: 3, name: "Mushuk O'yinchoqlari", price: 15000, category: "items", image: "/products/3.png", stock: 45, desc: "Ekologik toza material" },
    { id: 4, name: "Mushuk Uyqu To'shagi", price: 30000, category: "items", image: "/products/4.png", stock: 8, desc: "Yumshoq va qulay" },
    { id: 5, name: "Scottish Fold Mushuk", price: 150000, category: "cats", image: "/products/5.png", stock: 2, desc: "Zotdor va aqlli" }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [editingProduct, setEditingProduct] = useState(null) // Tahrirlanayotgan mahsulot obyektini saqlaydi

  // 2. O'chirish funksiyasi (Custom Toast bilan)
  const handleDelete = (id, name) => {
    toast((t) => (
      <div className="flex flex-col gap-3 p-1">
        <p className="text-sm"><b>{name}</b> rostdan ham o'chirilsinmi?</p>
        <div className="flex gap-2">
          <button 
            onClick={() => {
              setProducts(prev => prev.filter(p => p.id !== id))
              toast.dismiss(t.id)
              toast.error("O'chirildi")
            }}
            className="bg-red-500 text-white px-4 py-1.5 rounded-xl text-xs font-bold"
          >Ha</button>
          <button onClick={() => toast.dismiss(t.id)} className="bg-gray-700 text-white px-4 py-1.5 rounded-xl text-xs font-bold">Yo'q</button>
        </div>
      </div>
    ), { duration: 5000 })
  }

  // 3. Tahrirlashni saqlash
  const handleUpdate = (e) => {
    e.preventDefault()
    // Oddiy validatsiya
    if (!editingProduct.name || !editingProduct.price || editingProduct.stock < 0) {
      return toast.error("Ma'lumotlarni to'g'ri kiriting!")
    }

    setProducts(prev => prev.map(p => p.id === editingProduct.id ? editingProduct : p))
    toast.success("Muvaffaqiyatli saqlandi! ✨")
    setEditingProduct(null)
  }

  // 4. Rasmni yuklash va preview qilish logikasi
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return;

    // Fayl turini tekshirish (faqat rasm)
    if (!file.type.startsWith('image/')) {
      return toast.error("Iltimos, faqat rasm yuklang!")
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      // FileReader rasmni Base64 formatiga o'tkazadi
      setEditingProduct({...editingProduct, image: reader.result})
    }
    reader.readAsDataURL(file)
  }

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4 md:p-8 space-y-6 animate-in fade-in duration-500">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-800 tracking-tight">Mahsulotlar</h1>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1">Jami: {products.length} ta umumiy tovar</p>
        </div>
        
        <Link to="/admin/add-product" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-7 py-3 rounded-2xl font-black flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-200 transition-all active:scale-95 text-xs uppercase tracking-widest">
          <FaPlus /> Qo'shish
        </Link>
      </div>

      {/* SEARCH BOX */}
      <div className="bg-white p-5 rounded-[30px] border border-gray-100 shadow-sm flex items-center gap-4">
        <div className="relative flex-1 group">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-purple-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Mahsulot nomini qidirish..." 
            className="w-full pl-14 pr-6 py-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 ring-purple-100 transition-all font-bold text-gray-700"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* JADVAL */}
      <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-2xl shadow-purple-900/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Mahsulot</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Kategoriya</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Narxi</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Soni (Stock)</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[3px]">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-purple-50/20 transition-all group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 p-1 flex items-center justify-center border group-hover:scale-110 transition-transform flex-shrink-0">
                        <img src={p.image} className="max-w-full max-h-full object-contain" alt="" />
                      </div>
                      <span className="font-black text-gray-800 text-sm tracking-tight">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-purple-50 text-purple-600 text-[10px] font-black px-3 py-1 rounded-full uppercase italic tracking-widest">{p.category}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="font-black text-gray-800">{p.price.toLocaleString()} <small className="text-gray-400 text-[9px] uppercase">so'm</small></span>
                  </td>
                  <td className="px-8 py-6">
                    <div className={`text-xs font-black px-3 py-1 rounded-lg w-fit ${p.stock < 10 ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-600'}`}>
                      {p.stock} dona
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                      <button onClick={() => setEditingProduct(p)} className="p-3 bg-indigo-50 text-indigo-500 rounded-xl hover:bg-indigo-600 hover:text-white transition-all active:scale-90 shadow-sm"><FaEdit size={14} /></button>
                      <button onClick={() => handleDelete(p.id, p.name)} className="p-3 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all active:scale-90 shadow-sm"><FaTrash size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- MUKAMMAL TAHRIRLASH MODALI (Rasm bilan) --- */}
      {editingProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="absolute inset-0" onClick={() => setEditingProduct(null)}></div>
          
          <div className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto border border-gray-100">
            
            {/* Modal Header */}
            <div className="p-10 pb-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-inner border border-purple-50">
                  <FaBoxOpen size={20} />
                </div>
                <h2 className="font-black text-gray-900 text-xl tracking-tight">Tahrirlash</h2>
              </div>
              <button onClick={() => setEditingProduct(null)} className="p-3 text-gray-300 hover:text-red-500 transition-colors bg-white rounded-full hover:bg-red-50">
                <FaTimes size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleUpdate} className="p-10 pt-6 space-y-6">
              
              {/* === RASMNI TAHRIRLASH QISMI (Yangi) === */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mahsulot Rasmi</label>
                <div className="grid grid-cols-1 sm:grid-cols-[120px,1fr] gap-4 items-center bg-gray-50/50 p-4 rounded-3xl border border-gray-100/50 shadow-inner">
                  
                  {/* Hozirgi rasm preview */}
                  <div className="aspect-square bg-white rounded-2xl p-2 flex items-center justify-center border border-gray-100 shadow-sm relative group">
                    <img src={editingProduct.image} className="max-w-full max-h-full object-contain" alt="" />
                  </div>
                  
                  {/* Yangi rasm yuklash UI */}
                  <label className="flex-1 aspect-[3/1] bg-white border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 text-gray-300 hover:border-purple-300 hover:bg-purple-50 transition-all cursor-pointer group relative">
                    <FaCloudUploadAlt size={28} className="group-hover:scale-110 group-hover:text-purple-400 transition-transform" />
                    <p className="text-[9px] font-black uppercase tracking-widest px-4 text-center">Yangi Rasm Tanlash</p>
                    {/* Yashirin Fayl Inputi */}
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" onChange={handleImageChange} />
                  </label>
                </div>
              </div>

              {/* Nomi */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mahsulot nomi</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-3.5 bg-gray-50/50 rounded-xl font-bold text-sm border-none outline-none focus:ring-4 ring-purple-50 transition-all text-gray-700 shadow-inner"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Narxi */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Narxi (so'm)</label>
                  <input 
                    type="number" 
                    className="w-full px-5 py-3.5 bg-gray-50/50 rounded-xl font-bold text-sm border-none outline-none focus:ring-4 ring-purple-50 transition-all text-gray-700 shadow-inner"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({...editingProduct, price: Number(e.target.value)})}
                  />
                </div>
                {/* Kategoriya */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Kategoriya</label>
                  <select 
                    className="w-full px-5 py-3.5 bg-gray-50/50 rounded-xl font-bold text-sm border-none outline-none focus:ring-4 ring-purple-50 transition-all appearance-none cursor-pointer text-gray-700 shadow-inner"
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})}
                  >
                    <option value="foods">Ovqatlar</option>
                    <option value="items">Jihozlar</option>
                    <option value="cats">Mushuklar</option>
                  </select>
                </div>
              </div>

              {/* Stock va Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Ombordagi Soni</label>
                  <input 
                    type="number" 
                    className="w-full px-5 py-3.5 bg-gray-50/50 rounded-xl font-bold text-sm border-none outline-none focus:ring-4 ring-purple-50 transition-all text-gray-700 shadow-inner"
                    value={editingProduct.stock}
                    onChange={(e) => setEditingProduct({...editingProduct, stock: Number(e.target.value)})}
                  />
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Status</label>
                    <div className={`px-5 py-3 rounded-xl flex items-center justify-between border ${editingProduct.stock > 0 ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-red-50 border-red-100 text-red-600'}`}>
                        <span className="text-xs font-black uppercase tracking-widest">{editingProduct.stock > 0 ? "Sotuvda mavjud" : "Tugagan"}</span>
                        <FaCat />
                    </div>
                </div>
              </div>

              {/* Tavsif */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mahsulot Tavsifi</label>
                <textarea 
                  rows="3"
                  className="w-full px-5 py-4 bg-gray-50/50 rounded-xl font-bold text-sm border-none outline-none focus:ring-4 ring-purple-50 transition-all text-gray-700 shadow-inner resize-none"
                  value={editingProduct.desc || ""}
                  onChange={(e) => setEditingProduct({...editingProduct, desc: e.target.value})}
                />
              </div>

              {/* SAQLASH TUGMASI */}
              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 rounded-3xl font-black uppercase tracking-[3px] shadow-xl shadow-purple-100 transition-all flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-95 group"
                >
                  <FaSave className="group-hover:rotate-6 transition-transform text-lg" /> Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminProducts