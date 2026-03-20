import React from "react"
import {
  FaPaw,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaInstagram,
  FaTelegram,
  FaPhoneAlt,
} from "react-icons/fa"

const About = () => {
  const features = [
    {
      id: 1,
      icon: <FaPaw className="text-3xl text-purple-600" />,
      title: "Sifatli Mahsulotlar",
      desc: "Barcha ozuqa va buyumlarimiz xalqaro sertifikatlarga ega va jonivorlar uchun xavfsiz.",
    },
    {
      id: 2,
      icon: <FaTruck className="text-3xl text-purple-600" />,
      title: "Tezkor Yetkazib Berish",
      desc: "Shahar bo'ylab buyurtmangizni 24 soat ichida eshigingiz tagigacha yetkazamiz.",
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-3xl text-purple-600" />,
      title: "Ishonchli To'lov",
      desc: "Naqd pul yoki karta orqali xavfsiz to'lov tizimi yo'lga qo'yilgan.",
    },
    {
      id: 4,
      icon: <FaHeadset className="text-3xl text-purple-600" />,
      title: "24/7 Qo'llab-quvvatlash",
      desc: "Mutaxassislarimiz har qanday savolingizga javob berishga tayyor.",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Asosiy Qism */}
      <div className="bg-gradient-to-r from-[#9333EA] to-[#A855F7] rounded-3xl p-8 md:p-12 text-white mb-12 shadow-xl shadow-purple-200">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 italic flex items-center gap-3">
            Web Cat <FaPaw />
          </h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Bizning do'konimiz 2023-yildan buyon uy hayvonlari, ayniqsa
            mushuklar uchun eng sifatli ozuqalar va buyumlarni taqdim etib
            kelmoqda. Bizning maqsadimiz — sizning kichik do'stlaringiz hayotini
            yanada baxtli va sog'lom qilishdir.
          </p>
        </div>
      </div>

      {/* Afzalliklarimiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((f) => (
          <div
            key={f.id}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:translate-y-[-5px] transition-all"
          >
            <div className="bg-purple-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              {f.icon}
            </div>
            <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Kontakt va Manzil */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Biz bilan bog'laning
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-purple-600">
                <FaPhoneAlt />
              </div>
              <span>+998 90 123 45 67</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-purple-600">
                <FaTelegram />
              </div>
              <span>@webcat_admin</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-purple-600">
                <FaInstagram />
              </div>
              <span>@webcat_uz</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 italic">
          {/* Bu yerga Google Maps iframe qo'shish mumkin */}
          Xarita (Google Maps) bu yerda bo'ladi
        </div>
      </div>
    </div>
  )
}

export default About
