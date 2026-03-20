import { FaShoppingCart } from "react-icons/fa"

const Header = () => {
  return (
    <div>
      <header className="h-16 bg-linear-90 from-purple-700 to-blue-600 text-white flex items-center justify-between px-8 shadow-md shadow-purple-500 z-50">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span>🐈‍⬛ Web Cat</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <FaShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#9333EA]">
              1
            </span>
          </div>
          <div className="flex items-center gap-3 backdrop-blur-2xl bg-white/20 px-4 py-2 rounded-full">
            <span className="font-medium text-sm">Dilnoza Rashidova</span>
            <button className="cursor-pointer bg-white text-[#9333EA] px-5 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
              Chiqish
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
