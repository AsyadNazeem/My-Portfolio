import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from './DarkModeContext';

export default function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <>
            <button
                onClick={toggleDarkMode}
                className="dark-mode-toggle"
                aria-label="Toggle dark mode"
            >
                {isDarkMode ? <Sun className="icon" /> : <Moon className="icon" />}
            </button>

            <style jsx>{`
        .dark-mode-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
          cursor: pointer;
          transition: all 0.3s ease;
          color: ${isDarkMode ? '#fbbf24' : '#3498db'};
        }

        .dark-mode-toggle:hover {
          transform: scale(1.1) rotate(10deg);
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(52, 152, 219, 0.1)'};
        }

        .icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .dark-mode-toggle:hover .icon {
          transform: rotate(15deg);
        }

        @media (max-width: 968px) {
          .dark-mode-toggle {
            width: 36px;
            height: 36px;
          }
          
          .icon {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
        </>
    );
}
