import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen py-20 transition-all duration-500 ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}