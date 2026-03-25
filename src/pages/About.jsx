import React from "react"
import { useNavigate } from "react-router-dom" // Navigatsiya uchun
import {
  FaPaw,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaInstagram,
  FaTelegram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"

const About = () => {
  const navigate = useNavigate() // Hookni chaqiramiz

  const handleStart = () => {
    navigate("/") // Asosiy sahifaga yuborish
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
      title: "Ekspress Yetkazib Berish",
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
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 rounded-[40px] p-10 md:p-20 text-white mb-16 shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-black mb-6 leading-tight">
            Web Cat — Mushuklar Olami
          </h1>
          <p className="text-xl opacity-90 font-light mb-8">
            2023-yildan buyon kichik do'stlarimizga sifatli ozuqa va mehr
            ulashamiz.
          </p>

          {/* Tugmaga onClick qo'shildi */}
          <button
            onClick={handleStart}
            className="bg-white text-purple-700 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            Boshlash
          </button>
        </div>
        <FaPaw className="absolute bottom-[-20px] right-[-20px] text-[250px] opacity-10 rotate-12" />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {features.map((f) => (
          <div
            key={f.id}
            className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div
              className={`w-14 h-14 bg-gradient-to-br ${f.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}
            >
              {f.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact & Map */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-[32px] p-8 border border-gray-50 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-700">
            Bog'lanish
          </h2>
          <div className="space-y-4">
            <a
              href="tel:+998901234567"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-all group"
            >
              <FaPhoneAlt className="text-purple-600 group-hover:scale-110 transition-transform" />{" "}
              <span>+998 90 123 45 67</span>
            </a>
            <a
              href="https://t.me/webcat_admin"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all group"
            >
              <FaTelegram className="text-blue-500 group-hover:scale-110 transition-transform" />{" "}
              <span>@webcat_admin</span>
            </a>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <FaMapMarkerAlt className="text-red-500" />{" "}
              <span>Toshkent, Chilonzor</span>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] overflow-hidden min-h-[300px] shadow-lg border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884242663!2d69.20123761184654!3d41.28551420221376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3248cf6f57%3A0xc6c4217117d0959f!2z0KfQuNC70L7QvdC30L7RgCwg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1715421234567!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default About
