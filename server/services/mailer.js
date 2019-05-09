import nodemailer from 'nodemailer';
import config from './config';

export default async (subject, html) => {
  const transporter = nodemailer.createTransport({
    service: 'yandex',
    auth: {
      user: config.notificationMail,
      pass: config.notificationPass,
    },
  });

  const mailOptions = {
    from: config.notificationMail,
    to: config.notificationRecipient,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    }
  });
};
