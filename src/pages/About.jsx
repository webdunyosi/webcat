import React from "react"
import { useNavigate } from "react-router-dom"
import {
  FaPaw,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaTelegram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronRight
} from "react-icons/fa"

const About = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate("/")
  }

  const features = [
    {
      id: 1,
      icon: <FaPaw />,
      title: "Premium Sifat",
      desc: "Saralangan mahsulotlar.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 2,
      icon: <FaTruck />,
      title: "Tezkor Yetkazib Berish",
      desc: "24 soat ichida manzilda.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "Xavfsiz To'lov",
      desc: "100% himoyalangan tizim.",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "Doimiy Aloqa",
      desc: "24/7 mijozlar xizmati.",
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 font-sans">
      
      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#9333EA] to-[#4F46E5] rounded-[35px] md:rounded-[50px] p-8 md:p-20 text-white mb-12 md:mb-16 shadow-2xl shadow-purple-200">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4">
            Biz haqimizda
          </div>
          <h1 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 leading-tight tracking-tighter">
            Web Cat — <br className="hidden md:block" /> Mushuklar Olami 🐾
          </h1>
          <p className="text-sm md:text-xl opacity-90 font-medium mb-8 md:mb-10 max-w-lg leading-relaxed">
            2023-yildan buyon kichik do'stlarimizga sifatli ozuqa, zamonaviy buyumlar va cheksiz mehr ulashamiz.
          </p>

          <button
            onClick={handleStart}
            className="group w-full md:w-auto bg-white text-purple-700 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
          >
            Xaridni boshlash <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Orqa fondagi katta ikonka (Mobilda biroz kichraytirildi) */}
        <FaPaw className="absolute bottom-[-10px] right-[-10px] md:bottom-[-20px] md:right-[-20px] text-[150px] md:text-[300px] opacity-10 rotate-12" />
      </div>

      {/* --- FEATURES GRID (Mobilda 2 ta ustun) --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16 md:mb-24">
        {features.map((f) => (
          <div
            key={f.id}
            className="bg-white p-5 md:p-8 rounded-[28px] md:rounded-[40px] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div
              className={`w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br ${f.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl mb-4 md:mb-6 group-hover:rotate-12 transition-transform`}
            >
              {f.icon}
            </div>
            <h3 className="text-sm md:text-lg font-black text-gray-800 mb-1 md:mb-2">{f.title}</h3>
            <p className="text-gray-400 text-[10px] md:text-sm font-medium leading-tight">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* --- CONTACT & MAP SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
        
        {/* Aloqa ma'lumotlari */}
        <div className="bg-white rounded-[35px] md:rounded-[45px] p-6 md:p-10 border border-gray-50 shadow-xl shadow-gray-100/50 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 text-gray-800 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
            Bog'lanish
          </h2>
          
          <div className="space-y-3 md:space-y-4">
            <a
              href="tel:+998901234567"
              className="flex items-center gap-4 p-4 md:p-5 bg-gray-50 rounded-[20px] md:rounded-[25px] hover:bg-purple-600 hover:text-white transition-all group shadow-sm"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-90 transition-transform">
                <FaPhoneAlt size={16} />
              </div>
              <span className="font-bold text-sm md:text-base">+998 90 123 45 67</span>
            </a>

            <a
              href="https://t.me/webcat_admin"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 md:p-5 bg-gray-50 rounded-[20px] md:rounded-[25px] hover:bg-[#0088cc] hover:text-white transition-all group shadow-sm"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0088cc] group-hover:scale-90 transition-transform">
                <FaTelegram size={18} />
              </div>
              <span className="font-bold text-sm md:text-base">@webcat_admin</span>
            </a>

            <div className="flex items-center gap-4 p-4 md:p-5 bg-gray-50 rounded-[20px] md:rounded-[25px] border border-transparent shadow-sm">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-red-500">
                <FaMapMarkerAlt size={18} />
              </div>
              <span className="font-bold text-sm md:text-base text-gray-700 font-medium">Navoiy shahri, NSU binosi</span>
            </div>
          </div>
        </div>

        {/* Xarita (Map) */}
        <div className="rounded-[35px] md:rounded-[45px] overflow-hidden min-h-[250px] md:min-h-[400px] shadow-2xl border-8 border-white group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49158.406972044824!2d65.3400511!3d40.1011497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3947c324e937d6e5%3A0xc3ec428549641771!2sNavoiy%20Davlat%20Universiteti!5e0!3m2!1suz!2s!4v1711718000000!5m2!1suz!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="NSU Map"
            className="grayscale group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default About