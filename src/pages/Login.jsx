import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { FaEye, FaEyeSlash, FaCat, FaPaw } from "react-icons/fa"
import toast from "react-hot-toast"

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = login(formData.username, formData.password)

    if (result.success) {
      // Rasmdagi ko'rinishda foydalanuvchi ismi bilan chiqarish
      toast.success(`Xush kelibsiz, ${formData.username}! 🐾`, {
        duration: 4000,
        position: "top-center",
        style: {
          borderRadius: "12px",
          background: "#ffffff",
          color: "#374151",
          padding: "16px",
          fontWeight: "500",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        },
        iconTheme: {
          primary: "#10B981",
          secondary: "#fff",
        },
      })
      navigate("/")
    } else {
      toast.error(result.message)
    }
  }

  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-500 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-10 rounded-[32px] shadow-2xl relative overflow-hidden">
        {/* Dekorativ element */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-50 rounded-full opacity-50"></div>

        <div className="relative z-10">
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center text-purple-600 mb-4 rotate-3 shadow-inner">
              <FaCat size={45} />
            </div>
            <h2 className="text-4xl font-black text-gray-800 tracking-tight">
              Web Cat
            </h2>
            <p className="text-gray-400 font-medium mt-1 uppercase text-[10px] tracking-[3px]">
              Tizimga kirish
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1"
                htmlFor="username"
              >
                Foydalanuvchi nomi
              </label>
              <input
                className="px-5 py-4 mt-1 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl transition-all shadow-sm focus:shadow-purple-100"
                type="text"
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />
            </div>

            <div className="relative">
              <label
                className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1"
                htmlFor="parol"
              >
                Parol
              </label>
              <div className="relative flex items-center mt-1">
                <input
                  className="px-5 py-4 border-2 outline-none border-gray-100 focus:border-purple-500 w-full rounded-2xl transition-all shadow-sm focus:shadow-purple-100"
                  type={showPassword ? "text" : "password"}
                  id="parol"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-300 hover:text-purple-600 cursor-pointer transition-colors p-2"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>
            </div>

            <button
              className="group relative w-full bg-purple-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-purple-200 active:scale-95 transition-all mt-4 overflow-hidden cursor-pointer"
              type="submit"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Tizimga kirish{" "}
                <FaPaw className="group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-gray-400 text-sm">
              Hali akkauntingiz yo'qmi?{" "}
              <Link
                className="text-purple-600 font-extrabold hover:text-purple-800 transition-colors ml-1"
                to="/register"
              >
                Ro'yxatdan o'ting
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
