import React from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { Calendar, Building2, GraduationCap } from 'lucide-react';

const workExperience = [
  {
    title: 'Research Assistant',
    company: 'University Physics Department',
    period: '2023 - Present',
    description: 'Contributing to quantum computing research and numerical simulations.',
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: 'Mathematics Tutor',
    company: 'University Learning Center',
    period: '2022 - 2023',
    description: 'Tutored undergraduate students in advanced mathematics courses.',
    icon: <Building2 className="w-6 h-6" />,
  },
];

export function Work() {
  return (
    <Section id="work">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-normal mb-4">Work Experience</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Professional experiences in academia and research.
        </p>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto">
        {workExperience.map((job, index) => (
          <AnimatedSection
            key={job.title}
            delay={index * 100}
            className="mb-12 last:mb-0"
          >
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 
                          before:top-0 before:bottom-0 before:w-px before:bg-gray-200 
                          dark:before:bg-gray-800">
              <div className="absolute left-0 top-0 -translate-x-1/2 bg-white dark:bg-black p-2">
                {job.icon}
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{job.period}</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{job.company}</p>
              <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}