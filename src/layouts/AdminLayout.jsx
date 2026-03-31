import { useState } from "react"
import { Outlet } from "react-router-dom"
import AdminHeader from "../components/admin/AdminHeader"
import AdminSidebar from "../components/admin/AdminSidebar"

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-[#f8fafc]">
      {/* Header yuqorida qat'iy turadi */}
      <AdminHeader />

      <div className="flex flex-1 overflow-hidden relative">
        {/* SIDEBAR: Kompyuterda kengligi 1/5 (20%) yoki 280px bo'ladi */}
        <AdminSidebar />

        {/* --- MAIN CONTENT AREA --- */}
        {/* LG:ML-[20%] - Sidebar kengligi 1/5 bo'lgani uchun chapdan shuncha joy tashlaymiz.
            Agar Sidebaringizda aniq px (masalan 280px) bo'lsa, ml-[280px] qiling.
        */}
        <main className="flex-1 w-full lg:ml-[20%] transition-all duration-300 overflow-y-auto bg-[#f8fafc] pb-24 lg:pb-0">
          
          <div className="m-2 md:m-6 rounded-[30px] md:rounded-[45px] p-4 md:p-10 bg-white shadow-2xl shadow-purple-900/5 border border-gray-100 min-h-[calc(100vh-120px)] relative">
            
            {/* Dekorativ orqa fon elementlari */}
            <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -z-10 opacity-60"></div>
            
            <div className="relative z-10">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout