import React from "react"
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"

const AdminProducts = () => {
  // Bu yerda mahsulotlar datasi (backend yoki local JSON'dan) keladi
  const products = [
    {
      id: 1,
      name: "Premium Ozuqa",
      price: "120,000",
      stock: 15,
      category: "Food",
    },
    {
      id: 2,
      name: "Yumshoq To'shak",
      price: "350,000",
      stock: 5,
      category: "Toys",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-black">Mahsulotlar Boshqaruvi</h1>
        <Link
          to="/admin/add-product"
          className="bg-purple-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-purple-700 shadow-lg shadow-purple-100 transition-all active:scale-95"
        >
          <FaPlus /> Yangi Mahsulot
        </Link>
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">
                Nomi
              </th>
              <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">
                Narxi
              </th>
              <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">
                Soni
              </th>
              <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">
                Amallar
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {products.map((p) => (
              <tr
                key={p.id}
                className="hover:bg-purple-50/30 transition-colors"
              >
                <td className="px-8 py-5 font-bold text-gray-700">{p.name}</td>
                <td className="px-8 py-5 text-gray-500 font-medium">
                  {p.price} so'm
                </td>
                <td className="px-8 py-5 italic text-gray-400">
                  {p.stock} dona
                </td>
                <td className="px-8 py-5 flex items-center gap-3">
                  <button className="p-3 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-100 transition-all cursor-pointer">
                    <FaEdit />
                  </button>
                  <button className="p-3 bg-red-50 text-red-400 rounded-xl hover:bg-red-100 transition-all cursor-pointer">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminProducts
