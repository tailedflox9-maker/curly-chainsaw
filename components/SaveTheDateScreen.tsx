import React from 'react';

interface SaveTheDateScreenProps {
  onOpen: () => void;
}

const SaveTheDateScreen: React.FC<SaveTheDateScreenProps> = ({ onOpen }) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center p-8 z-10 relative animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#A9907E] mb-4 tracking-wide">
        Save the Date
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">
        5th December 2025
      </p>
      <div className="font-semibold text-4xl md:text-5xl text-[#333333] mb-12 space-x-4">
        <span className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>Unnati</span>
        <span className="text-[#A9907E] opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>&</span>
        <span className="opacity-0 animate-fade-in" style={{ animationDelay: '1.0s' }}>Kaustubh</span>
      </div>
      <button
        onClick={onOpen}
        className="mt-8 px-8 py-3 border border-gray-300 text-gray-600 font-medium rounded-md text-base hover:bg-gray-50 transition-colors duration-200"
      >
        Open Invitation
      </button>
      <style>{`
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default SaveTheDateScreen;