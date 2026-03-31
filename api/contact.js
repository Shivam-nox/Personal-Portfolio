const nodemailer = require("nodemailer");

// Vercel Serverless Functions export a single handler function
export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // 2. Extract data from the request body
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;

  // 3. Set up Nodemailer
  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS 
    },
  });

  // 4. Draft the email
  const mail = {
    from: name,
    to: "********@gmail.com", // Make sure to put your real email here!
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // 5. Send the email and return the response
  try {
    await contactEmail.sendMail(mail);
    return res.status(200).json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res.status(500).json({ code: 500, error: error.message });
  }
}