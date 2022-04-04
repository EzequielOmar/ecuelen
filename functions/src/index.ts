import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ezequiel.omar.vazquez@gmail.com",
    pass: process.env.ACCESS_GMAIL_PASS,
  },
});
export const sendEmail = functions.firestore
    .document("messages/{messageId}")
    .onCreate((snap) => {
      const mailOptions = {
        from: "ezequiel.omar.vazquez@gmail.com",
        to: `ezequiel.omar.vazquez@gmail.com,
        ecuelen@gmail.com,liscioalexis@gmail.com`,
        subject: "Nuevo mensaje desde ecuélen.com",
        // eslint-disable-next-line max-len
        html: `<h3>¡Nuevo Contacto!</h3>
        <div>name: ${snap.data().name} </div>
        <div> email: ${snap.data().email} </div>
        <div> phone: ${snap.data().phone} </div>
        <div> message: ${snap.data().message}</div>`,
      };
      return transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("Sent!");
      });
    });
