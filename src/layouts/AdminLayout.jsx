// src/layouts/AdminLayout.jsx
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaChartLine, FaBox, FaUsers, FaSignOutAlt, FaHome } from "react-icons/fa";

const AdminLayout = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* --- ADMIN SIDEBAR --- */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-6 text-xl font-bold border-b border-slate-800 flex items-center gap-2">
          <span>⚙️ Admin Panel</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/admin"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              isActive("/admin") ? "bg-purple-600 text-white shadow-lg" : "text-gray-400 hover:bg-slate-800"
            }`}
          >
            <FaChartLine />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/admin/products"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              isActive("/admin/products") ? "bg-purple-600 text-white shadow-lg" : "text-gray-400 hover:bg-slate-800"
            }`}
          >
            <FaBox />
            <span>Mahsulotlar</span>
          </Link>

          <Link
            to="/admin/users"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              isActive("/admin/users") ? "bg-purple-600 text-white shadow-lg" : "text-gray-400 hover:bg-slate-800"
            }`}
          >
            <FaUsers />
            <span>Foydalanuvchilar</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition">
            <FaHome />
            <span>Asosiy Sahifa</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition">
            <FaSignOutAlt />
            <span>Chiqish</span>
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Admin Header */}
        <header className="h-16 bg-white border-b px-8 flex items-center justify-between shrink-0">
          <h2 className="font-semibold text-gray-700">Boshqaruv Paneli</h2>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800">Administrator</p>
              <p className="text-xs text-green-500">Online</p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
              AD
            </div>
          </div>
        </header>

        {/* Sahifa kontenti */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; // Mana shu eksport xatoni to'g'irlaydi