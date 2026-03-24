import { createContext, useContext, useState, useEffect } from "react"
import userData from "../data/users.json" // JSON faylni import qilish

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem("webcat_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  // Login funksiyasi endi JSON ichidan qidiradi
  const login = (username, password) => {
    const foundUser = userData.users.find(
      (u) => u.username === username && u.password === password,
    )

    if (foundUser) {
      const sessionUser = {
        name: foundUser.fullName,
        role: foundUser.role,
        username: foundUser.username,
      }
      setUser(sessionUser)
      localStorage.setItem("webcat_user", JSON.stringify(sessionUser))
      return { success: true }
    } else {
      return { success: false, message: "Login yoki parol xato!" }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("webcat_user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
