import React, { useState } from "react"
import { FaArrowLeft, FaCloudUploadAlt, FaSave, FaCat } from "react-icons/fa"
import { useNavigate, Link } from "react-router-dom"
import toast from "react-hot-toast"

const AddProduct = () => {
  const navigate = useNavigate()
  
  // Form holati
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "foods",
    stock: "",
    description: ""
  })

  // Input o'zgarganda ishlaydi
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Formni jo'natish
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validatsiya (oddiy)
    if (!formData.name || !formData.price || !formData.stock) {
      return toast.error("Iltimos, barcha maydonlarni to'ldiring!")
    }

    // Bu yerda API ga so'rov yuboriladi (Kelajakda)
    console.log("Yangi mahsulot:", formData)
    
    toast.success("Mahsulot muvaffaqiyatli qo'shildi! 🐾")
    
    // 1.5 soniyadan keyin ro'yxatga qaytarish
    setTimeout(() => {
      navigate("/admin/products")
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
      
      {/* Back Button & Title */}
      <div className="flex items-center justify-between">
        <Link 
          to="/admin/products" 
          className="group flex items-center gap-2 text-gray-400 hover:text-purple-600 transition-colors font-bold text-sm uppercase tracking-widest"
        >
          <div className="p-2 rounded-xl bg-white border border-gray-100 group-hover:bg-purple-50 group-hover:border-purple-100 transition-all">
            <FaArrowLeft />
          </div>
          Orqaga qaytish
        </Link>
        <h1 className="text-3xl font-black text-gray-800">Yangi <span className="text-purple-600">Mahsulot</span></h1>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Image Upload UI */}
        <div className="md:col-span-1 space-y-4">
          <div className="aspect-square bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] flex flex-col items-center justify-center gap-4 text-gray-300 hover:border-purple-300 hover:bg-purple-50 transition-all cursor-pointer group relative overflow-hidden">
            <FaCloudUploadAlt size={50} className="group-hover:scale-110 group-hover:text-purple-400 transition-transform" />
            <p className="text-[10px] font-black uppercase tracking-widest px-6 text-center">Rasm yuklash (PNG, JPG)</p>
            {/* Real rasm yuklash uchun input hidden bo'ladi */}
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
          </div>
          <p className="text-[10px] text-gray-400 font-medium text-center italic">Maslahat: 1:1 formatdagi kvadrat rasm ishlating.</p>
        </div>

        {/* Right: Form Fields */}
        <div className="md:col-span-2 bg-white p-10 rounded-[40px] border border-gray-50 shadow-2xl shadow-purple-900/5 space-y-6">
          
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mahsulot Nomi</label>
            <input 
              name="name"
              type="text" 
              placeholder="Masalan: Premium Mushuk Ovqati"
              className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 ring-purple-100 transition-all font-bold text-gray-700"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Narxi (so'm)</label>
              <input 
                name="price"
                type="number" 
                placeholder="45000"
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 ring-purple-100 transition-all font-bold text-gray-700"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Kategoriya</label>
              <select 
                name="category"
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 ring-purple-100 transition-all font-bold text-gray-700 appearance-none cursor-pointer"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="foods">Ovqatlar</option>
                <option value="items">Jihozlar</option>
                <option value="cats">Mushuklar</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Ombor (Soni)</label>
              <input 
                name="stock"
                type="number" 
                placeholder="24"
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 ring-purple-100 transition-all font-bold text-gray-700"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Status</label>
              <div className="h-[56px] flex items-center gap-3 px-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black text-emerald-600 uppercase">Sotuvda mavjud</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-5 rounded-2xl font-black uppercase tracking-[3px] shadow-xl shadow-purple-200 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-4 group"
            >
              <FaSave className="group-hover:rotate-12 transition-transform" /> 
              Saqlash va Chop etish
            </button>
          </div>

        </div>
      </form>

      {/* Footer Info */}
      <div className="flex items-center justify-center gap-2 text-gray-300">
        <FaCat />
        <p className="text-[10px] font-bold uppercase tracking-widest">Web Cat Manager v2.0</p>
      </div>

    </div>
  )
}

export default AddProduct