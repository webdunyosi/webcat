import { Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { Toaster } from "react-hot-toast" // 1. Toaster import qilindi
import MainLayout from "./layouts/MainLayout"
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <CartProvider>
      {/* 2. Bildirishnomalar ekranda chiqishi uchun Toaster qo'shildi */}
      <Toaster 
        position="top-center" 
        reverseOrder={false} 
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '16px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
      
      <Routes>
        {/* Layout bilan chiquvchi sahifalar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* Layoutsiz (To'liq ekran) sahifalar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </CartProvider>
  )
}

export default App