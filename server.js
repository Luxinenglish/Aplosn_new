const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'contact@aplosn.fr',
            replyTo: email,
            subject: `[Contact Web] ${subject}`,
            html: `
                <h2>Nouveau message de contact</h2>
                <h3 style="color: red">❗Ne jamais cliquer sur une pièce jointe ou un image ❗</h3>
                <p><strong>Nom:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Sujet:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        res.json({ success: true, message: 'Email envoyé avec succès' });
    } catch (error) {
        console.error('Erreur envoi email:', error);
        res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi' });
    }
});

const PORT = process.env.PORT || 2025;
app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));