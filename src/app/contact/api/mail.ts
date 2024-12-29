'use server';

import { getContact } from '@/app/about/api/contact';
import NodeMailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function sendEmail(formData: FormData) {
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  if (!email || !subject || !message) {
    throw new Error('Please fill out all fields.');
  }

  const contact = await getContact();
  const transporter = NodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  } as SMTPTransport.Options);

  await transporter.sendMail({
    from: process.env.SMTP_USERNAME,
    to: contact.email,
    subject: `[Portfolio contact form][${email}] ${subject}`,
    replyTo: email,
    text: message,
  } as NodeMailer.SendMailOptions);
}
