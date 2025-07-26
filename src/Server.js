const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
	  host: "smtp.office365.com",
	  port: 587,
	  secure: false,
	  auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	  },
	});

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email failed:", err);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));