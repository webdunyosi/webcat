import { Outlet } from "react-router-dom"
import AdminHeader from "../components/admin/AdminHeader"
import AdminSidebar from "../components/admin/AdminSidebar"

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F8F9FD]">
      {/* --- ADMIN HEADER --- */}
      <AdminHeader />

      <div className="flex flex-1 overflow-hidden">
        {/* --- ADMIN SIDEBAR --- */}
        <AdminSidebar />

        {/* --- MAIN CONTENT AREA --- */}
        <main className="w-4/5 ml-auto">
          {/* MainLayout kabi oq fonli, chekkalari yumaloq va soya berilgan qism */}
          <div className="h-[88vh] m-4 rounded-3xl overflow-y-auto p-10 bg-white shadow-sm border border-gray-100">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout