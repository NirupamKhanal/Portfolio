import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'thoughts', label: 'Some Thoughts' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <AnimatedSection>
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
          <ul className="flex space-x-6">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 
                           dark:hover:text-gray-100 transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </nav>
  );
}