import axios from "axios";
import nodemailer from 'nodemailer';
import contactTemplate from "../../emailTemplates/contactTemplate";

export default async function POST(req, res) {
    const { full_name, phone_number, email, comment } = req.body || {};
    if (!full_name || !phone_number || !email) {
        return res.status(400).json({ success: false, message: `"full_name", "phone_number", "email" body fields are required` });
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

    const template = contactTemplate({
        full_name,
        phone_number,
        email,
        comment
    });

    const emailOptions = {
        from: email,
        to: process.env.SMTP_TO_EMAIL,
        subject: "Hay un nuevo interesado en hacerse miembro!",
        text: `
            ${full_name} está interesado en hacerse miembro.\n\n
            Nombre: ${full_name}
            Número de teléfono: ${phone_number}
            Correo electrónico: ${email}
            ${comment ? `Comentario: ${comment}` : ''}
        `,
        html: template,
    }

    try {
        await transporter.sendMail(emailOptions);
        return res.status(200).json({ success: true, data: 'Email sent' });
    } catch (error) {
        return res.status(500).json({ success: false, message: "There was an error sending this email" });
    }
}