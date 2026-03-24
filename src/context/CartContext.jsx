import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [orders, setOrders] = useState([])       // YANGI

  const addToCart = (product) => {
    setCartItems((prev) => {
      const isExist = prev.find((item) => item.id === product.id)
      if (isExist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    )
  }

  const clearCart = () => setCartItems([])

  // ── YANGI FUNKSIYA ──────────────────────────────
  const addOrder = (customerName) => {
    if (cartItems.length === 0) return

    const newOrder = {
      id: `#${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString("uz-UZ", {
        day: "2-digit", month: "2-digit", year: "numeric",
      }),
      status: "Kutilmoqda",
      statusType: "pending",
      total: totalPrice.toLocaleString(),
      totalRaw: totalPrice,
      customerName,
      items: cartItems
        .map((item) => `${item.title} (${item.quantity}x)`)
        .join(", "),
      products: [...cartItems],
    }

    setOrders((prev) => [newOrder, ...prev])
    clearCart()
  }
  // ────────────────────────────────────────────────

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price) || 0
    return acc + price * item.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addOrder,     // YANGI
        orders,       // YANGI
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)