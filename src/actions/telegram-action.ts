'use server'

import { dataFormWithBucket, DishInBucket } from '@/lib/definitions';
import { OrderFormValues, orderSchema } from '@/lib/schemas';
import axios from 'axios';
import { redirect } from 'next/navigation';



export async function sendOrder(formData: dataFormWithBucket) {

    const validatedData = orderSchema.safeParse({
        name: formData.personalData.name,
        phone: formData.personalData.phone,
        address: formData.personalData.address,
        comment: formData.personalData.comment,
        typeOfDelivery: formData.personalData.typeOfDelivery,
    })

    if (!validatedData.success) {
        return {
            error: true,
            message: 'Некоректные данные',
        };
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.error("Ошибка отсутвуют переменные среды")
        return { error: true, message: "Ошибка сервера" }
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const text = [
        `🛒 Заказ #${new Date()}`,
        ``,
        `👤 Имя: ${formData.personalData.name}`,
        `📞 Телефон: ${formData.personalData.phone}`,
        `🚚 Тип: ${formData.personalData.typeOfDelivery === "dostavka" ? "Доставка" : "Самовывоз"}`,
        formData.personalData.typeOfDelivery === "dostavka"
            ? `📍 Адрес: ${formData.personalData.address}`
            : null,
        `💬 Комментарий: ${formData.personalData.comment || "-"}`,
        ``,
        `📦 Заказ:`,
        ...formData.dishes.map(
            (item, index) =>
                `${index + 1}. ${item.categoryName} ${item.name} × ${item.amount}`
        ),
        ``,
        `💰 Итого: ${formData.totalPrice}`,
    ]
        .filter(Boolean)
        .join("\n");

    try {
        // Send the message via the Telegram Bot API
        const response = await axios.post(telegramUrl, {
            chat_id: chatId,
            text: text,
        });

        if (response.data.ok) {
            return { success: true, message: "Заказ успешно отправлен" }
        } else {
            console.error("Ошибка telegram API", response.data)
            return { error: true, message: "Ошибка при отправки заказа" }
        }
    } catch (error) {
        console.log("Ошибка при отправки заказа", error)
        return { error: true, message: 'Ошибка при отправки заказа' }
    }

}