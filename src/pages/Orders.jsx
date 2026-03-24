import React, { useState } from "react"
import { useCart } from "../context/CartContext"
import {
  FaBoxOpen, FaClock, FaCheckCircle,
  FaTruck, FaChevronDown, FaChevronUp, FaShoppingBag,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const getStatusStyles = (type) => {
  switch (type) {
    case "completed":
      return { color: "text-green-600", bg: "bg-green-100", dot: "bg-green-500", icon: <FaCheckCircle /> }
    case "shipping":
      return { color: "text-blue-600",  bg: "bg-blue-100",  dot: "bg-blue-500",  icon: <FaTruck /> }
    case "pending":
      return { color: "text-amber-600", bg: "bg-amber-100", dot: "bg-amber-400", icon: <FaClock /> }
    default:
      return { color: "text-gray-600",  bg: "bg-gray-100",  dot: "bg-gray-400",  icon: <FaBoxOpen /> }
  }
}

const OrderCard = ({ order }) => {
  const [expanded, setExpanded] = useState(false)
  const style = getStatusStyles(order.statusType)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">

      {/* Asosiy qator */}
      <div
        className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl text-xl ${style.bg} ${style.color}`}>
            {style.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-gray-800 text-base">
                Buyurtma {order.id}
              </h3>
              <span className={`w-2 h-2 rounded-full ${style.dot}`} />
            </div>
            <p className="text-xs text-gray-400 mt-0.5">{order.date}</p>
            <p className="text-sm text-gray-500 mt-1 truncate max-w-[240px] md:max-w-sm">
              {order.items}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">{order.total} so'm</p>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${style.bg} ${style.color}`}>
              {order.status}
            </span>
          </div>
          <span className="text-gray-400 text-sm">
            {expanded ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
      </div>

      {/* Kengaytirilgan mahsulotlar */}
      {expanded && order.products && (
        <div className="border-t border-gray-100 bg-gray-50 px-5 py-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Mahsulotlar
          </p>
          <div className="space-y-2">
            {order.products.map((product) => (
              <div key={product.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-10 h-10 rounded-lg object-cover border border-gray-200"
                    />
                  )}
                  <div>
                    <p className="font-medium text-gray-700">{product.title}</p>
                    <p className="text-xs text-gray-400">
                      {product.quantity} x {Number(product.price).toLocaleString()} so'm
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">
                  {(product.price * product.quantity).toLocaleString()} so'm
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200 flex justify-end">
            <p className="text-sm font-bold text-[#9333EA]">Jami: {order.total} so'm</p>
          </div>
        </div>
      )}
    </div>
  )
}

const Orders = () => {
  const { orders } = useCart()
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#9333EA]">Buyurtmalarim</h1>
          <p className="text-gray-400 text-sm mt-1">
            {orders.length > 0 ? `${orders.length} ta buyurtma` : "Hali buyurtma yo'q"}
          </p>
        </div>
        {orders.length > 0 && (
          <div className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-600">
            {orders.length} ta
          </div>
        )}
      </div>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <FaBoxOpen className="text-6xl text-gray-200 mx-auto mb-5" />
          <h2 className="text-xl font-bold text-gray-400 mb-2">Buyurtmalar yo'q</h2>
          <p className="text-gray-400 text-sm mb-6">
            Mahsulot sotib oling va buyurtmangiz shu yerda ko'rinadi
          </p>
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 bg-[#9333EA] text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            <FaShoppingBag /> Xarid qilish
          </button>
        </div>
      )}
    </div>
  )
}

export default Orders