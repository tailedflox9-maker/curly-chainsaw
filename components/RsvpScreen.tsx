import React from 'react';

const ScreenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 text-center snap-start relative">
        {children}
    </div>
);


const RsvpScreen: React.FC = () => {
  return (
    <ScreenWrapper>
        <div className="max-w-md w-full">
            <h2 className="text-3xl md:text-4xl text-[#A9907E] font-semibold mb-6">
              Your Presence is a Gift
            </h2>
            <p className="text-lg md:text-xl text-gray-500">
                We are so excited to celebrate this special day with you. 
            </p>
        </div>
    </ScreenWrapper>
  );
};

export default RsvpScreen;