import React from "react"
import { FaBoxOpen, FaClock, FaCheckCircle, FaTruck } from "react-icons/fa"

// Test uchun buyurtmalar ma'lumotlari
const ORDERS_DATA = [
  {
    id: "#8842",
    date: "12.03.2024",
    status: "Yetkazildi",
    total: "145,000",
    items: "Premium Mushuk Ovqati (2x), O'yinchoq (1x)",
    statusType: "completed",
  },
  {
    id: "#8951",
    date: "15.03.2024",
    status: "Yo'lda",
    total: "75,000",
    items: "Mushuk Konserva Ovqati (3x)",
    statusType: "shipping",
  },
  {
    id: "#9012",
    date: "20.03.2024",
    status: "Kutilmoqda",
    total: "30,000",
    items: "Mushuk Uyqu To'shagi (1x)",
    statusType: "pending",
  },
]

const Orders = () => {
  // Status ranglarini va iconlarini aniqlash funksiyasi
  const getStatusStyles = (type) => {
    switch (type) {
      case "completed":
        return {
          color: "text-green-600",
          bg: "bg-green-100",
          icon: <FaCheckCircle />,
        }
      case "shipping":
        return { color: "text-blue-600", bg: "bg-blue-100", icon: <FaTruck /> }
      case "pending":
        return {
          color: "text-amber-600",
          bg: "bg-amber-100",
          icon: <FaClock />,
        }
      default:
        return {
          color: "text-gray-600",
          bg: "bg-gray-100",
          icon: <FaBoxOpen />,
        }
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#9333EA] mb-8">Buyurtmalarim</h1>

      <div className="space-y-4">
        {ORDERS_DATA.length > 0 ? (
          ORDERS_DATA.map((order) => {
            const style = getStatusStyles(order.statusType)
            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow"
              >
                {/* Chap tomon: ID va Ma'lumotlar */}
                <div className="flex items-start gap-4">
                  <div
                    className={`p-4 rounded-xl text-2xl ${style.bg} ${style.color}`}
                  >
                    {style.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      Buyurtma {order.id}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">{order.date}</p>
                    <p className="text-sm text-gray-600 italic truncate max-w-[250px] md:max-w-md">
                      {order.items}
                    </p>
                  </div>
                </div>

                {/* O'ng tomon: Status va Narx */}
                <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${style.bg} ${style.color}`}
                  >
                    {order.status}
                  </span>
                  <p className="text-xl font-bold text-gray-900">
                    {order.total} so'm
                  </p>
                </div>
              </div>
            )
          })
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <FaBoxOpen className="text-5xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              Hali buyurtmalar mavjud emas.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders
