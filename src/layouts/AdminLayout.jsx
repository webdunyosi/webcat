import { Outlet } from "react-router-dom"
import AdminHeader from "../components/admin/AdminHeader"
import AdminSidebar from "../components/admin/AdminSidebar"

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F4F7FE]"> {/* Professional biroz kulrangroq fon */}
      {/* --- ADMIN HEADER --- */}
      <AdminHeader />

      <div className="flex flex-1 overflow-hidden relative">
        {/* --- ADMIN SIDEBAR --- */}
        <AdminSidebar />

        {/* --- MAIN CONTENT AREA --- */}
        <main className="w-4/5 ml-auto relative">
          {/* Kontent maydoni: 
            - h-[88vh]: Headerdan keyingi balandlik
            - rounded-[40px]: Zamonaviy va yumshoq burchaklar
            - shadow-2xl: Professional chuqurlik berish uchun
          */}
          <div className="h-[88vh] m-5 rounded-[40px] overflow-y-auto p-12 bg-white shadow-2xl shadow-purple-900/5 border border-white/50 relative">
            
            {/* Dekorativ elementlar (ixtiyoriy, dashboardga chiroy beradi) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -z-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>

            {/* Sahifalar (Dashboard, Products va h.k.) shu yerga tushadi */}
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