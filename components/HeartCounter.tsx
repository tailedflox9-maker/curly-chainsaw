import React from 'react';

interface HeartCounterProps {
  found: number;
  total: number;
}

const HeartCounter: React.FC<HeartCounterProps> = ({ found, total }) => {
  return (
    <div 
      className="fixed top-6 left-6 z-50 flex items-center gap-2 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium text-[#A9907E] shadow-sm"
      aria-live="polite"
      aria-label={`${found} of ${total} hearts found`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-1.344-.688 18.61 18.61 0 0 1-4.4-3.11C4.18 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-1.93 7.11-5.584 9.25a18.603 18.603 0 0 1-4.4 3.11 15.247 15.247 0 0 1-1.344.688l-.022.012-.007.003-.002.001a.752.752 0 0 1-.704 0l-.002-.001Z" />
      </svg>
      <span>{found} / {total}</span>
    </div>
  );
};

export default HeartCounter;