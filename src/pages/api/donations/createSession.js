import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método no permitido" });
    }

    const {amount, codeCurrency} = req.body;

    console.log(req.body, amount, codeCurrency)

    try {
        const response = await axios.post(
            "https://lab.cardnet.com.do/sessions",
            {
                TransactionType: "0200",
                CurrencyCode: '214',
                AcquiringInstitutionCode: "349",
                MerchantType: "5440",
                MerchantNumber: "349011300",
                MerchantTerminal: "00567856",
                MerchantTerminal_amex: "00000001",
                ReturnUrl: "http://localhost:3000/proyectos-de-investigacion/success",
                CancelUrl: "http://localhost:3000/proyectos-de-investigacion/error",
                PageLanguaje: "ENG",
                OrdenId: "686",
                TransactionId: "160088",
                Tax: "000000241523",
                MerchantName: "TEST",
                AVS: "33024 1000 ST JOHN PLACE PEMBROKE PINES FLORIDA",
                Amount: `${amount}00`,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Proxy-Connection": "Keep-Alive",
                    "Transfer-Encoding": "chunked"
                }
            }
        );

        // Respuesta del API externo
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(error?.response?.data ?? error);
    }
}
