import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as admin from "firebase-admin";

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "kaleb.cpu@gmail.com",
    pass: "dgrn rzsd cusf nhfh",
  },
});

export const sendEmail = functions.firestore
  .document("Contact/{ContactId}")
  .onCreate(async (snap) => {
    const contactData = snap.data();
    const { recipientEmail, name, phone, email, message } = contactData;

    const mailOptions = {
      from: "kaleb.cpu@gmail.com",
      to: recipientEmail,
      subject: "New Form Submission",
      text: `A new form submission has been received:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
