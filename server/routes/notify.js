const express = require("express");
const router = express.Router();
const sendMail = require("../services/mailer");
const getTemplate = require("../services/templates");

router.post("/send", async (req, res) => {
  const { type, to, data } = req.body;

  const template = getTemplate(type, data);

  if (!template) {
    return res.status(400).json({ error: "Invalid notification type." });
  }

  try {
    await sendMail({
      to,
      subject: template.subject,
      html: template.html,
    });

    res.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Email sending failed." });
  }
});

module.exports = router;
