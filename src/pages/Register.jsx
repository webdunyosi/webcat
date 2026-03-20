import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="bg-linear-90 from-purple-400 to-pink-300 min-h-screen flex items-center justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white m-5 p-10 rounded-2xl">
        <h2 className="text-4xl text-center font-bold mb-1">🐈‍⬛ Web Cat</h2>
        <p className="text-center mb-7">Ro'yxatdan o'tish</p>
        <form>
          <label htmlFor="nomi">To'liq ism</label>
          <input
            className="px-5 py-2 mb-3 mt-1 border-2 outline-none border-gray-300 duration-300 focus:border-purple-500 w-full rounded-xl shadow-md shadow-purple-400"
            type="text"
            id="nomi"
            placeholder="Ism Familiya"
          />
          <label htmlFor="username">Foydalanuvchi nomi</label>
          <input
            className="px-5 py-2 mb-3 mt-1 border-2 outline-none border-gray-300 duration-300 focus:border-purple-500 w-full rounded-xl shadow-md shadow-purple-400"
            type="text"
            id="username"
            placeholder="Username"
          />
          <label htmlFor="email">Email</label>
          <input
            className="px-5 py-2 mb-3 mt-1 border-2 outline-none border-gray-300 duration-300 focus:border-purple-500 w-full rounded-xl shadow-md shadow-purple-400"
            type="email"
            id="email"
            placeholder="email@example.com"
          />
          <label htmlFor="phone">Telefon</label>
          <input
            className="px-5 py-2 mb-3 mt-1 border-2 outline-none border-gray-300 duration-300 focus:border-purple-500 w-full rounded-xl shadow-md shadow-purple-400"
            type="tel"
            id="phone"
            placeholder="+998 90 123 45 67"
          />
          <label htmlFor="parol">Parol</label>
          <input
            className="px-5 py-2 mb-3 mt-1 border-2 outline-none border-gray-300 duration-300 focus:border-purple-500 w-full rounded-xl shadow-md shadow-purple-400"
            type="password"
            id="parol"
            placeholder="Parol"
          />
          <label htmlFor="reparol">Parolni tasdiqlash</label>
          <input
            className="px-5 py-2 mb-3 mt-1 border-2 outline-none border-gray-300 duration-300 focus:border-purple-500 w-full rounded-xl shadow-md shadow-purple-400"
            type="password"
            id="reparol"
            placeholder="Parolni qayta kiriting"
          />
          <button
            className="bg-purple-500 text-white px-5 py-2 my-3 w-full rounded-xl shadow-md shadow-purple-400"
            type="submit"
          >
            Ro'yxatdan o'tish
          </button>
          <p className="text-center text-gray-500">
            Akkauntingiz bormi?{" "}
            <Link className="text-purple-500 font-semibold" to="/login">
              Kirish
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
