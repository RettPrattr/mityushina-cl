import axios from "axios";

// createPayment().then(payment_link => {console.log(payment_link)})

export default async function createPayment (value, uniq_key, customerName, customerPhone, tariff, customerEmail) {
    try {
        const response = await axios.post('/api/uPayment', {
            value: value,
            uid_key: uniq_key,
            customerName: customerName,
            customerPhone: customerPhone,
            customerEmail: customerEmail,
            tariff: tariff
        })
        const data = response.data
        return data.confirmation_token
    } catch (error) {
        console.error(error)
    }
}