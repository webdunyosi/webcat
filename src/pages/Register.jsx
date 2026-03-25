import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash, FaCat } from "react-icons/fa"
import { sendRegisterToTelegram } from "../services/telegramService"
import { toast } from "react-hot-toast"

const Register = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  // Ma'lumotlarni saqlash uchun state
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

    // Parollarni solishtirish
    if (formData.parol !== formData.reparol) {
      toast.error("Parollar mos kelmadi!")
      return
    }

    setLoading(true)
    const loadId = toast.loading("Ro'yxatdan o'tilmoqda...")

    try {
      // Botga yuborish
      await sendRegisterToTelegram(formData)
      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz! 🎉", { id: loadId })

      // 2 soniyadan keyin login sahifasiga o'tish
      setTimeout(() => navigate("/login"), 2000)
    } catch (error) {
      console.error(error)
      toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.", { id: loadId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-linear-90 from-purple-400 to-pink-300 min-h-screen flex items-center justify-center p-4">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white m-5 p-8 rounded-[32px] shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <FaCat className="text-5xl text-purple-600 mb-2" />
          <h2 className="text-4xl text-center font-bold mb-1">Web Cat</h2>
          <p className="text-center text-gray-500 italic">Ro'yxatdan o'tish</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* To'liq ism */}
          <div>
            <label
              className="text-sm font-semibold text-gray-600 ml-1"
              htmlFor="nomi"
            >
              To'liq ism
            </label>
            <input
              className="px-5 py-2.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl shadow-sm transition-all"
              type="text"
              id="nomi"
              placeholder="Ism Familiya"
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Username */}
            <div>
              <label
                className="text-sm font-semibold text-gray-600 ml-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="px-5 py-2.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl shadow-sm transition-all"
                type="text"
                id="username"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            {/* Phone */}
            <div>
              <label
                className="text-sm font-semibold text-gray-600 ml-1"
                htmlFor="phone"
              >
                Telefon
              </label>
              <input
                className="px-5 py-2.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl shadow-sm transition-all"
                type="tel"
                id="phone"
                placeholder="+998..."
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              className="text-sm font-semibold text-gray-600 ml-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="px-5 py-2.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl shadow-sm transition-all"
              type="email"
              id="email"
              placeholder="example@mail.com"
              onChange={handleChange}
              required
            />
          </div>

          {/* Parol */}
          <div className="relative">
            <label
              className="text-sm font-semibold text-gray-600 ml-1"
              htmlFor="parol"
            >
              Parol
            </label>
            <input
              className="px-5 py-2.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl shadow-sm transition-all"
              type={showPassword ? "text" : "password"}
              id="parol"
              placeholder="Parol"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 bottom-3 text-gray-400 hover:text-purple-600 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {/* Parolni tasdiqlash */}
          <div>
            <label
              className="text-sm font-semibold text-gray-600 ml-1"
              htmlFor="reparol"
            >
              Tasdiqlash
            </label>
            <input
              className="px-5 py-2.5 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl shadow-sm transition-all"
              type="password"
              id="reparol"
              placeholder="Parolni qayta kiriting"
              onChange={handleChange}
              required
            />
          </div>

          <button
            disabled={loading}
            className={`w-full py-3.5 mt-4 rounded-2xl font-bold text-white shadow-lg transition-all active:scale-95 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600 shadow-purple-200"
            }`}
            type="submit"
          >
            {loading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
          </button>

          <p className="text-center text-gray-500 pt-2">
            Akkauntingiz bormi?{" "}
            <Link
              className="text-purple-600 font-bold hover:underline"
              to="/login"
            >
              Kirish
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
