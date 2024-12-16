import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export interface EmailData {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        recaptcha_token: data.recaptchaToken,
        to_email_1: 'nirupamkhanal@gmail.com',
        to_email_2: 'nirupam.khanal@usm.edu',
      },
      EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}