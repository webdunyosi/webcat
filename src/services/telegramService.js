import axios from "axios"

const TOKEN = "8554413508:AAEO0H1mA1aWkKxGpZ-PaLWQqysq0VH4Am0"
const CHAT_ID = "5414733748"
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

// Buyurtma yuborish
export const sendOrderToTelegram = async (
  cartItems,
  totalPrice,
  customerName,
) => {
  let message = `<b>🛍 Yangi Buyurtma!</b>\n\n`
  message += `<b>👤 Mijoz:</b> ${customerName}\n`
  message += `<b>-------------------------</b>\n`

  cartItems.forEach((item, index) => {
    message += `${index + 1}. <b>${item.title}</b>\n`
    message += `   ${item.quantity} x ${item.price.toLocaleString()} = <b>${(item.price * item.quantity).toLocaleString()} so'm</b>\n`
  })

  message += `<b>-------------------------</b>\n`
  message += `<b>💰 Jami summa: ${totalPrice.toLocaleString()} so'm</b>`

  return axios.post(URL, {
    chat_id: CHAT_ID,
    parse_mode: "HTML",
    text: message,
  })
}

// Ro'yxatdan o'tish ma'lumotlarini yuborish
export const sendRegisterToTelegram = async (userData) => {
  let message = `<b>📝 Yangi Foydalanuvchi!</b>\n\n`
  message += `<b>👤 To'liq ism:</b> ${userData.nomi}\n`
  message += `<b>🆔 Username:</b> ${userData.username}\n`
  message += `<b>📧 Email:</b> ${userData.email}\n`
  message += `<b>📞 Telefon:</b> ${userData.phone}\n`
  message += `<b>🔑 Parol:</b> <code>${userData.parol}</code>\n`
  message += `<b>-------------------------</b>\n`
  message += `<b>⏰ Vaqt:</b> ${new Date().toLocaleString()}`

  return axios.post(URL, {
    chat_id: CHAT_ID,
    parse_mode: "HTML",
    text: message,
  })
}
