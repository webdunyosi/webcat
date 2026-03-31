import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  FaEye,
  FaEyeSlash,
  FaCat,
  FaPaw,
} from "react-icons/fa"
import { sendRegisterToTelegram } from "../services/telegramService"
import { toast } from "react-hot-toast"

const Register = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    nomi: "",
    username: "",
    email: "",
    phone: "",
    parol: "",
    reparol: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.parol !== formData.reparol) {
      toast.error("Parollar mos kelmadi! ❌")
      return
    }

    setLoading(true)
    const loadId = toast.loading("Ma'lumotlar yuborilmoqda...")

    try {
      await sendRegisterToTelegram(formData)
      toast.success(`Tabriklaymiz, ${formData.nomi}! 🎉`, { id: loadId })
      setTimeout(() => navigate("/login"), 2000)
    } catch (error) {
      toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.", { id: loadId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-400 min-h-screen flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-xl bg-white p-6 md:p-12 rounded-[30px] md:rounded-[40px] shadow-2xl relative overflow-hidden">
        
        <FaPaw className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-purple-50 text-[100px] md:text-[150px] rotate-12 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-xl md:rounded-2xl flex items-center justify-center text-purple-600 mb-3 shadow-inner rotate-3">
              <FaCat className="text-[28px] md:text-[35px]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight">Web Cat</h2>
            <p className="text-gray-400 font-bold uppercase text-[8px] md:text-[10px] tracking-[3px] md:tracking-[4px] mt-1">Yangi akkaunt ochish</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            {/* To'liq ism */}
            <div className="relative group">
              <label className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1" htmlFor="nomi">To'liq ism</label>
              <input
                className="px-4 py-3 md:px-5 md:py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-xl md:rounded-2xl transition-all shadow-sm text-sm"
                type="text" id="nomi" placeholder="Dilnoza Rashidova" onChange={handleChange} required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1" htmlFor="username">Username</label>
                <input
                  className="px-4 py-3 md:px-5 md:py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-xl md:rounded-2xl shadow-sm text-sm"
                  type="text" id="username" placeholder="dilnoza_dev" onChange={handleChange} required
                />
              </div>
              <div>
                <label className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1" htmlFor="phone">Telefon</label>
                <input
                  className="px-4 py-3 md:px-5 md:py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-xl md:rounded-2xl shadow-sm text-sm"
                  type="tel" id="phone" placeholder="+998 90..." onChange={handleChange} required
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1" htmlFor="email">Email</label>
              <input
                className="px-4 py-3 md:px-5 md:py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-xl md:rounded-2xl shadow-sm text-sm"
                type="email" id="email" placeholder="example@gmail.com" onChange={handleChange} required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="relative">
                <label className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1" htmlFor="parol">Parol</label>
                <input
                  className="px-4 py-3 md:px-5 md:py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-xl md:rounded-2xl shadow-sm text-sm"
                  type={showPassword ? "text" : "password"} id="parol" placeholder="••••••••" onChange={handleChange} required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 bottom-3 md:bottom-3.5 text-gray-300 hover:text-purple-600">
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
              <div className="relative">
                <label className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1" htmlFor="reparol">Tasdiqlash</label>
                <input
                  className="px-4 py-3 md:px-5 md:py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-xl md:rounded-2xl shadow-sm text-sm"
                  type="password" id="reparol" placeholder="••••••••" onChange={handleChange} required
                />
              </div>
            </div>

            <button
              disabled={loading}
              className={`group relative w-full py-3.5 md:py-4 mt-4 rounded-xl md:rounded-2xl font-black text-white shadow-xl transition-all duration-300 active:scale-95 overflow-hidden cursor-pointer ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-purple-500 shadow-purple-200 hover:shadow-purple-300"}`}
              type="submit"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide text-xs md:text-sm uppercase">
                {loading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
                {!loading && <FaPaw className="group-hover:rotate-12 transition-transform" />}
              </span>
              <div className="absolute inset-0 bg-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <p className="text-center text-gray-400 font-medium pt-2 text-xs md:text-sm">
              Akkauntingiz bormi? <Link className="text-purple-600 font-black hover:text-purple-800 ml-1" to="/login">Kirish</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register