import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { FaEye, FaEyeSlash } from "react-icons/fa" // Ikonkalarni import qilish
import toast from "react-hot-toast"

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [showPassword, setShowPassword] = useState(false) // Parol ko'rinishini boshqarish
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = login(formData.username, formData.password)

    if (result.success) {
      toast.success("Tizimga muvaffaqiyatli kirdingiz!")
      navigate("/")
    } else {
      toast.error(result.message)
    }
  }

  return (
    <div className="bg-linear-90 from-purple-400 to-pink-300 min-h-screen flex items-center justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white m-5 p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl text-center font-bold mb-1 text-purple-700">
          🐈‍⬛ Web Cat
        </h2>
        <p className="text-center mb-7 text-gray-500 italic">Xush kelibsiz!</p>

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <label
              className="text-sm font-semibold text-gray-600"
              htmlFor="nomi"
            >
              Foydalanuvchi nomi
            </label>
            <input
              className="px-5 py-2 mt-1 border-2 outline-none border-gray-200 focus:border-purple-500 w-full rounded-xl transition-all"
              type="text"
              id="nomi"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </div>

          {/* Password Input (Ko'rish/Yopish bilan) */}
          <div className="mb-6">
            <label
              className="text-sm font-semibold text-gray-600"
              htmlFor="parol"
            >
              Parol
            </label>
            <div className="relative flex items-center mt-1">
              <input
                className="px-5 py-2 border-2 outline-none border-gray-200 focus:border-purple-500 w-full rounded-xl transition-all"
                type={showPassword ? "text" : "password"} // Dinamik tur
                id="parol"
                placeholder="Parol"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              {/* Ko'zcha tugmasi */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-400 hover:text-purple-600 cursor-pointer transition-colors"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 w-full rounded-xl shadow-lg active:scale-95 transition-transform"
            type="submit"
          >
            Tizimga kirish
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Hali ro'yxatdan o'tmaganmisiz?{" "}
          <Link
            className="text-purple-600 font-bold hover:underline"
            to="/register"
          >
            Ro'yxatdan o'tish
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
