// src/pages/Cart.jsx
const Cart = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#9333EA] mb-6">Savat</h1>
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <p className="text-gray-500 text-center py-10">Savatingiz hozircha bo'sh 🐈</p>
        <div className="flex justify-end border-t pt-6">
          <button className="bg-[#9333EA] text-white px-8 py-3 rounded-2xl font-bold">
            Buyurtma berish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;