import axios from "axios";
import nodemailer from 'nodemailer';

import donationTemplate from "@/emailTemplates/donationTemplate";

export default async function POST(req, res) {
    const { fullname, donation, email, comment, company, proyect, card, transaction } = req.body || {};

    console.log({fullname, donation, email, comment, company, proyect, card, transaction});
    if (!fullname || !donation || !email || !proyect) {
        return res.status(400).json({ success: false, message: `"fullname", "donation", "email", "proyect" body fields are required` });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const template = donationTemplate({
        fullname,
        donation,
        email,
        comment,
        company,
        proyect, 
        card,
        transaction,
    });

    const emailOptions = {
        from: process.env.SMTP_TO_EMAIL,
        to: email,
        cc: process.env.SMTP_TO_EMAIL,
        subject: `Confirmación de nueva donación destinada al proyecto ${proyect}`,
        text: `

            Confirmación de nueva donación destinada al proyecto ${proyect}

            Nombre: ${fullname}\n\n
            Correo electrónico: ${email}
            Apoyo a: ${proyect}
            Donación: ${donation}
            ${comment ? `Comentario: ${comment}` : ''}
            ${comment ? `Empresa: ${company}` : ''}
        `,
        html: template,
    }

    try {
        await transporter.sendMail(emailOptions);
        return res.status(200).json({ success: true, data: 'Success' });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed" });
    }
}