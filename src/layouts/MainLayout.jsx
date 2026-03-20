// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom"
import Header from "../components/common/Header"
import Sidebar from "../components/common/Sidebar"

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F8F9FD]">
      {/* --- HEADER --- */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* --- SIDEBAR --- */}
        <Sidebar />

        {/* --- MAIN CONTENT AREA --- */}
        <main className="w-4/5 ml-auto">
          <div className="h-[88vh] m-4 rounded-2xl overflow-y-auto p-8 bg-white shadow-sm border border-gray-100">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout
