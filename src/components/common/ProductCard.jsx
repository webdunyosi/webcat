import { useCart } from "../../context/CartContext"

const ProductCard = ({ id, title, price, category, image }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    // Narxni raqamga aylantirish (nuqta, vergul va bo'shliqlarni olib tashlaydi)
    const cleanPrice =
      typeof price === "string"
        ? Number(price.replace(/[^0-9.-]+/g, ""))
        : Number(price)

    addToCart({ id, title, price: cleanPrice, image })
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-4 shadow-sm hover:shadow-xl transition-all group">
      <div className="relative h-48 mb-4 overflow-hidden rounded-2xl bg-gray-50">
        <span className="absolute top-2 left-2 bg-purple-100 text-[#9333EA] text-[10px] px-3 py-1 rounded-full font-bold z-10">
          {category}
        </span>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-bold text-gray-800 line-clamp-1">{title}</h3>
        <p className="text-gray-500 text-xs line-clamp-2">
          Yuqori sifatli va mushuklar uchun juda foydali mahsulot.
        </p>

        <div className="flex items-center justify-between pt-4">
          <span className="text-[#9333EA] font-bold text-lg">
            {Number(price).toLocaleString()} so'm
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-[#9333EA] text-white p-2 rounded-xl hover:bg-[#7e22ce] transition-all flex items-center gap-1 px-4 text-sm font-semibold cursor-pointer active:scale-95"
          >
            <span className="text-lg">+</span> Savatga
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
