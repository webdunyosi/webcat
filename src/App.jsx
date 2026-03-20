// src/App.jsx
import { Routes, Route } from "react-router-dom"

// Layoutlar
import MainLayout from "./layouts/MainLayout"

// Sahifalar (Pages)
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"

function App() {
  return (
    <Routes>
      {/* 1. FOYDALANUVCHI QISMI */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* 2. ADMIN QISMI */}

      {/* 3. LAYOUTSIZ SAHIFALAR (To'liq ekran - Login/Register) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
