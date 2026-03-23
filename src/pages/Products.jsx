import { useState } from "react"
import {
  FaBorderAll,
  FaCat,
  FaBone,
  FaShoppingBasket,
  FaSearch,
} from "react-icons/fa"
import ProductCard from "../components/common/ProductCard"

// 1. Kategoriyalar ro'yxati
const CATEGORIES = [
  { id: "all", name: "Hammasi", icon: <FaBorderAll /> },
  { id: "cats", name: "Mushuklar", icon: <FaCat /> },
  { id: "foods", name: "Ozuqalar", icon: <FaBone /> },
  { id: "items", name: "Buyumlar", icon: <FaShoppingBasket /> },
]

// 2. Mahsulotlar bazasi (Narxlar raqam ko'rinishida!)
const ALL_PRODUCTS = [
  {
    id: 1,
    title: "Premium Mushuk Ovqati",
    price: 45000, 
    category: "foods",
    image: "/products/1.png",
  },
  {
    id: 2,
    title: "Mushuk Konserva Ovqati",
    price: 25000,
    category: "foods",
    image: "/products/2.png",
  },
  {
    id: 3,
    title: "Mushuk O'yinchoqlari",
    price: 15000,
    category: "items",
    image: "/products/3.png",
  },
  {
    id: 4,
    title: "Mushuk Uyqu To'shagi",
    price: 30000,
    category: "items",
    image: "/products/4.png",
  },
  {
    id: 5,
    title: "Scottish Fold Mushuk",
    price: 150000,
    category: "cats",
    image: "/products/5.png",
  }
]

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filtrlash mantiqi: Kategoriya + Qidiruv
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-[#9333EA]">Mahsulotlar</h1>

        {/* Qidiruv inputi */}
        <div className="relative w-full md:w-72">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Qidirish..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Dinamik Filtr Tugmalari */}
      <div className="flex gap-4 mb-10 overflow-x-auto pb-4 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl border-2 transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
              activeCategory === cat.id
                ? "bg-[#9333EA] text-white border-[#9333EA] shadow-lg shadow-purple-200"
                : "bg-white text-gray-500 border-gray-100 hover:border-purple-200 hover:text-purple-600"
            }`}
          >
            <span className="text-xl">{cat.icon}</span>
            <span className="font-semibold tracking-wide">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Mahsulotlar Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        
        {/* Agar mahsulot topilmasa */}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg italic">
              Hech narsa topilmadi...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products