import React from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Quantum Circuit Simulator',
    description: 'A web-based quantum circuit simulator for educational purposes.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    technologies: ['TypeScript', 'React', 'Python'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    title: 'Mathematical Visualization Tool',
    description: 'Interactive 3D visualizations of mathematical concepts.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
    technologies: ['Three.js', 'WebGL', 'React'],
    links: {
      demo: '#',
      github: '#',
    },
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-normal mb-4">Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of academic and personal projects.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 100}>
            <div className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.links.demo}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 
                             hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 
                             hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}