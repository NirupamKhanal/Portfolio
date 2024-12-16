import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { sendEmail } from '../utils/email';
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY'; // Replace with your actual site key

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      toast.error('Please complete the reCAPTCHA verification');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail({ ...formData, recaptchaToken: recaptchaValue });
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      recaptchaRef.current?.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatedSection className="max-w-2xl mx-auto">
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 
                     outline-none transition-all duration-300"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 
                     outline-none transition-all duration-300"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 
                     outline-none transition-all duration-300 resize-none"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg bg-gray-900 dark:bg-gray-100 
                   text-white dark:text-gray-900 font-medium
                   transition-all duration-300 
                   flex items-center justify-center space-x-2
                   ${isSubmitting 
                     ? 'opacity-50 cursor-not-allowed' 
                     : 'hover:bg-gray-800 dark:hover:bg-gray-200'
                   }`}
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </AnimatedSection>
  );
}