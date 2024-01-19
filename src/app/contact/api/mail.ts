'use server';

import { getContact } from '@/app/about/api/contact';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const contact = await getContact();
  const response = await resend.emails.send({
    from: formData.get('email') as string,
    to: contact.email,
    subject: formData.get('subject') as string,
    text: formData.get('message') as string,
  });
  console.log(response);
}
