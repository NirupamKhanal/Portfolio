import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { ContactForm } from './ContactForm';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+1 (234) 567-8900',
      href: 'tel:+12345678900',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Hattiesburg, Mississippi',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, academic discussions, or just to say hello.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.label} delay={index * 100}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 
                                 dark:hover:text-gray-100 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}