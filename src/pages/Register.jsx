import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  FaEye,
  FaEyeSlash,
  FaCat,
  FaPaw,
  FaUser,
  FaPhone,
  FaEnvelope,
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
    <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-400 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
        {/* Dekorativ Panja Izi */}
        <FaPaw className="absolute -top-6 -right-6 text-purple-50 text-[150px] rotate-12 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4 shadow-inner rotate-3">
              <FaCat size={35} />
            </div>
            <h2 className="text-3xl font-black text-gray-800 tracking-tight">
              Web Cat
            </h2>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[4px] mt-1">
              Yangi akkaunt ochish
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Ism va Familiya */}
            <div className="relative group">
              <label
                className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1"
                htmlFor="nomi"
              >
                To'liq ism
              </label>
              <input
                className="px-5 py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl transition-all shadow-sm focus:shadow-purple-100"
                type="text"
                id="nomi"
                placeholder="Dilnoza Rashidova"
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Username */}
              <div>
                <label
                  className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="px-5 py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl transition-all shadow-sm"
                  type="text"
                  id="username"
                  placeholder="dilnoza_dev"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Phone */}
              <div>
                <label
                  className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1"
                  htmlFor="phone"
                >
                  Telefon
                </label>
                <input
                  className="px-5 py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl shadow-sm transition-all"
                  type="tel"
                  id="phone"
                  placeholder="+998 90..."
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="px-5 py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl shadow-sm transition-all"
                type="email"
                id="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
                required
              />
            </div>

            {/* Parollar qatori */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label
                  className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1"
                  htmlFor="parol"
                >
                  Parol
                </label>
                <input
                  className="px-5 py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl shadow-sm transition-all"
                  type={showPassword ? "text" : "password"}
                  id="parol"
                  placeholder="••••••••"
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 bottom-3.5 text-gray-300 hover:text-purple-600 cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
              <div className="relative">
                <label
                  className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1"
                  htmlFor="reparol"
                >
                  Tasdiqlash
                </label>
                <input
                  className="px-5 py-3.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl shadow-sm transition-all"
                  type="password"
                  id="reparol"
                  placeholder="••••••••"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Ro'yxatdan o'tish tugmasi (Premium Style) */}
            <button
              disabled={loading}
              className={`
                group relative w-full py-4 mt-6 rounded-2xl font-black text-white 
                shadow-xl transition-all duration-300 active:scale-95 overflow-hidden cursor-pointer
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-purple-500 shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-1"
                }
              `}
              type="submit"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                {loading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
                {!loading && (
                  <FaPaw className="group-hover:rotate-12 transition-transform" />
                )}
              </span>
              <div className="absolute inset-0 bg-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <p className="text-center text-gray-400 font-medium pt-4 text-sm">
              Akkauntingiz bormi?{" "}
              <Link
                className="text-purple-600 font-black hover:text-purple-800 transition-colors ml-1"
                to="/login"
              >
                Kirish
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
