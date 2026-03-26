import { Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"
import { Toaster } from "react-hot-toast"

// Layouts
import MainLayout from "./layouts/MainLayout"
import AdminLayout from "./layouts/AdminLayout"

// User Pages
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"
import Cart from "./pages/Cart"

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminProducts from "./pages/admin/AdminProducts"
import AdminOrders from "./pages/admin/AdminOrders"
import AdminUsers from "./pages/admin/AdminUsers" // 14-qadam importi
import AddProduct from "./pages/admin/AddProduct"

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        {/* Global Bildirishnomalar tizimi */}
        <Toaster 
          position="top-center" 
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: '20px',
              background: '#1e1b4b', 
              color: '#fff',
              padding: '16px',
              fontSize: '14px',
              fontWeight: 'bold',
            },
          }}
        />
        
        <Routes>
          {/* --- FOYDALANUVCHI QISMI (USER SIDE) --- */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          {/* --- ADMIN PANELI (MANAGEMENT SIDE) --- */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* Dashboard: Asosiy statistika */}
            <Route index element={<AdminDashboard />} /> 
            
            {/* Mahsulotlar boshqaruvi */}
            <Route path="products" element={<AdminProducts />} />
            
            {/* Yangi Mahsulot qo'shish */}
            <Route path="add-product" element={<AddProduct />} />
            
            {/* Buyurtmalar boshqaruvi */}
            <Route path="orders" element={<AdminOrders />} />
            
            {/* Foydalanuvchilar boshqaruvi (14-qadam) */}
            <Route path="users" element={<AdminUsers />} />
          </Route>

          {/* --- AUTHENTICATION --- */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* --- 404 ERROR PAGE --- */}
          <Route path="*" element={
            <div className="h-screen flex flex-col items-center justify-center bg-white p-10 text-center">
              <h1 className="text-[150px] font-black text-gray-50 leading-none">404</h1>
              <div className="relative -mt-16">
                <p className="text-2xl font-black text-gray-800 uppercase tracking-tighter">Adashib qoldingizmi?</p>
                <p className="text-gray-400 font-bold mt-2">Bu sahifa mushuklar tomonidan yeb qo'yilgan bo'lishi mumkin 🐾</p>
              </div>
              <a 
                href="/" 
                className="mt-10 px-10 py-4 bg-purple-600 text-white rounded-[20px] font-black shadow-2xl shadow-purple-200 hover:bg-purple-700 hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest"
              >
                Uyga qaytish
              </a>
            </div>
          } />
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App