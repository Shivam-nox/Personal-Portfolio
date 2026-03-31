// api/contact.js
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;

  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mail = {
    from: name,
    to: "YOUR_EMAIL@gmail.com", // Your actual email here
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);
    res.status(200).json({ code: 200, status: "Message Sent" });
  } catch (error) {
    res.status(500).json(error);
  }
}