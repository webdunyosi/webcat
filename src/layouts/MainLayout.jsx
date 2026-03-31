import { Outlet } from "react-router-dom"
import Header from "../components/common/Header"
import Sidebar from "../components/common/Sidebar"

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F8F9FD]">
      {/* --- HEADER --- */}
      <Header />

      <div className="flex flex-1 overflow-hidden relative">
        {/* --- SIDEBAR --- */}
        {/* Kompyuterda sidebar o'z joyida, mobilda pastda bo'ladi */}
        <Sidebar />

        {/* --- MAIN CONTENT AREA --- */}
        {/* ml-auto faqat lg ekranlarda sidebar kengligi (1/5) uchun joy tashlaydi */}
        <main className="w-full lg:w-4/5 lg:ml-auto transition-all duration-300">
          <div className="h-[calc(100vh-64px)] lg:h-[88vh] m-0 lg:m-4 lg:rounded-2xl overflow-y-auto p-4 md:p-8 bg-white shadow-sm border-t lg:border border-gray-100">
            <div className="pb-20 lg:pb-0"> {/* Mobilda kontent bottom-nav ostida qolmasligi uchun */}
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout