import { Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"
import { Toaster } from "react-hot-toast"

// Layouts
import MainLayout from "./layouts/MainLayout"
import AdminLayout from "./layouts/AdminLayout"

// Pages
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"
import Cart from "./pages/Cart"

// Admin Pages
import AdminProducts from "./components/admin/AdminProducts"

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Toaster position="top-center" />
        <Routes>
          {/* OMMAVIY SAHIFALAR (USER) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          {/* ADMIN PANELI */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminProducts />} />
            <Route path="products" element={<AdminProducts />} />
            {/* Kelajakda bu yerga admin buyurtmalarini qo'shamiz */}
            <Route path="orders" element={<div>Buyurtmalar boshqaruvi (Tez kunda)</div>} />
          </Route>

          {/* AUTH SAHIFALARI */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App