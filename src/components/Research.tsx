import React from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { Brain, Atom, Code } from 'lucide-react';

const researchItems = [
  {
    title: 'Quantum Information Theory',
    description: 'Research on quantum entanglement and its applications in quantum computing.',
    skills: ['Quantum Mechanics', 'Linear Algebra', 'Python'],
    icon: <Atom className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Differential Geometry',
    description: 'Studying manifolds and their applications in theoretical physics.',
    skills: ['Topology', 'Analysis', 'Mathematical Modeling'],
    icon: <Brain className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Computational Physics',
    description: 'Numerical methods for solving complex physical systems.',
    skills: ['C++', 'MATLAB', 'Numerical Analysis'],
    icon: <Code className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1511174944925-7f5a5e802a14?auto=format&fit=crop&q=80&w=800',
  },
];

export function Research() {
  return (
    <Section id="research">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-normal mb-4">Research Experience</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Exploring the intersection of mathematics, physics, and computation.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchItems.map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 100}>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <div className="text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    {item.icon}
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-white/20 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}