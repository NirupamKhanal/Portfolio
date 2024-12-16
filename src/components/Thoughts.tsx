import React from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { Camera, PenTool } from 'lucide-react';

const writings = [
  {
    title: 'The Philosophy of Mathematics',
    excerpt: 'Exploring the foundations of mathematical thought and its implications...',
    date: '2024-03-15',
  },
  {
    title: 'Physics and Consciousness',
    excerpt: 'Investigating the intersection of quantum mechanics and consciousness...',
    date: '2024-02-28',
  },
];

const photographs = [
  {
    title: 'Urban Geometry',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800',
    location: 'New York City',
  },
  {
    title: 'Natural Patterns',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=800',
    location: 'Yellowstone National Park',
  },
];

export function Thoughts() {
  return (
    <Section id="thoughts">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-normal mb-4">Some Thoughts</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of writings and photographs exploring various themes.
        </p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <AnimatedSection className="flex items-center space-x-2 mb-6">
            <PenTool className="w-6 h-6" />
            <h3 className="text-2xl font-normal">Writings</h3>
          </AnimatedSection>
          
          <div className="space-y-8">
            {writings.map((post, index) => (
              <AnimatedSection key={post.title} delay={index * 100}>
                <article className="prose dark:prose-invert max-w-none">
                  <h4 className="text-xl mb-2">{post.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                  <time className="text-sm text-gray-500">{post.date}</time>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div>
          <AnimatedSection className="flex items-center space-x-2 mb-6">
            <Camera className="w-6 h-6" />
            <h3 className="text-2xl font-normal">Photography</h3>
          </AnimatedSection>

          <div className="grid gap-6">
            {photographs.map((photo, index) => (
              <AnimatedSection key={photo.title} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl mb-1">{photo.title}</h4>
                      <p className="text-sm">{photo.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}