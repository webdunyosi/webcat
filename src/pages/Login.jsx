import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import toast from "react-hot-toast"

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Login funksiyasini chaqiramiz
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
        <p className="text-center mb-7 text-gray-500 italic">
          Admin paneli orqali kirish
        </p>

        <form onSubmit={handleSubmit}>
          <label className="text-sm font-semibold text-gray-600" htmlFor="nomi">
            Foydalanuvchi nomi
          </label>
          <input
            className="px-5 py-2 mb-4 mt-1 border-2 outline-none border-gray-200 focus:border-purple-500 w-full rounded-xl transition-all"
            type="text"
            placeholder="admin"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />

          <label
            className="text-sm font-semibold text-gray-600"
            htmlFor="parol"
          >
            Parol
          </label>
          <input
            className="px-5 py-2 mb-6 mt-1 border-2 outline-none border-gray-200 focus:border-purple-500 w-full rounded-xl transition-all"
            type="password"
            placeholder="123"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 w-full rounded-xl shadow-lg active:scale-95 transition-transform"
            type="submit"
          >
            Tizimga kirish
          </button>
        </form>

        <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100 text-xs text-purple-400">
          <p>
            Test uchun: login: <b>admin</b>, parol: <b>123</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
