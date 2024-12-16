import React from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Theme } from '../types/theme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options: { value: Theme; icon: React.ReactNode }[] = [
    { value: 'light', icon: <Sun className="w-4 h-4" /> },
    { value: 'dark', icon: <Moon className="w-4 h-4" /> },
    { value: 'system', icon: <Monitor className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg transition-colors duration-300">
      <div className="flex space-x-1">
        {options.map(({ value, icon }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`p-2 rounded-md transition-all duration-300
              ${theme === value 
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' 
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}