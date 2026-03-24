import axios from "axios"

const TOKEN = "8554413508:AAEO0H1mA1aWkKxGpZ-PaLWQqysq0VH4Am0"
const CHAT_ID = "5414733748"
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

export const sendOrderToTelegram = async (
  cartItems,
  totalPrice,
  customerName = "Dilnoza Rashidova",
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
