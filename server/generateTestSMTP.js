const nodemailer = require("nodemailer");

nodemailer.createTestAccount().then((testAccount) => {
  console.log("SMTP_USER=", testAccount.user);
  console.log("SMTP_PASS=", testAccount.pass);
});

