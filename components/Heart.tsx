import React from 'react';

interface HeartProps {
  id: number;
  isFound: boolean;
  onFind: (id: number) => void;
  className?: string;
}

const Heart: React.FC<HeartProps> = ({ id, isFound, onFind, className }) => {
  const handleClick = () => {
    if (!isFound) {
      onFind(id);
    }
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .animate-pulse-heart {
          animation: pulse 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        @keyframes found-effect {
          0% { transform: scale(1); }
          50% { transform: scale(1.4); }
          100% { transform: scale(1); }
        }
        .animate-found {
          animation: found-effect 0.4s ease-out;
        }
      `}</style>
      <button
        onClick={handleClick}
        disabled={isFound}
        className={`absolute cursor-pointer transition-colors duration-500 ${isFound ? 'text-[#A9907E]' : 'text-gray-300 hover:text-gray-400'} ${!isFound && 'animate-pulse-heart'} ${isFound && 'animate-found'} ${className}`}
        aria-label={`Find heart ${id}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-1.344-.688 18.61 18.61 0 0 1-4.4-3.11C4.18 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-1.93 7.11-5.584 9.25a18.603 18.603 0 0 1-4.4 3.11 15.247 15.247 0 0 1-1.344.688l-.022.012-.007.003-.002.001a.752.752 0 0 1-.704 0l-.002-.001Z" />
        </svg>
      </button>
    </>
  );
};

export default Heart;