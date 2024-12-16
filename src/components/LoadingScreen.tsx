import React, { useState, useEffect } from 'react';

const quotes = [
  // Placeholder quotes - replace with your custom quotes
  "The future belongs to those who believe in the beauty of their dreams.",
  "Innovation distinguishes between a leader and a follower.",
  "Creativity is intelligence having fun."
];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 2000);

    const timer = setTimeout(() => {
      clearInterval(quoteInterval);
      onComplete();
    }, 6000);

    return () => {
      clearInterval(quoteInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white dark:bg-black transition-colors duration-500 flex items-center justify-center z-50">
      <div className="max-w-2xl p-8">
        <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 text-center font-light italic transition-all duration-500 animate-fade-in">
          {quotes[currentQuote]}
        </p>
      </div>
    </div>
  );
}