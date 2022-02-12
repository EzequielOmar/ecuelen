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
    pass: functions.config().access_gmail.pass,
  },
});

export const sendEmail = functions.firestore
    .document("messages/{messageId}")
    .onCreate((snap) => {
      return;
      /*  settear mail cuando este el formulario montado
      const mailOptions = {
        from: "ezequiel.omar.vazquez@gmail.com",
        to: "ezequiel.omar.vazquez@gmail.com",
        subject: snap.data().name,
        // eslint-disable-next-line max-len
        html: `email: ${snap.data().email} \n phone:
         ${snap.data().phone} \n message: ${snap.data().message}`,
      };
      return transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("Sent!");
      });*/
    });
