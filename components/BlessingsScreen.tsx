import React from 'react';

const ScreenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 text-center snap-start relative">
        {children}
    </div>
);

const BlessingsScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl text-[#A9907E] font-semibold mb-4">
            With the Blessings of
          </h2>
          <p className="text-xl md:text-2xl mb-2 text-gray-800">
            Shri Ugale Dashrath & Smt. Minakshi Ugale
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto">
            cordially invite you to the wedding celebration of their beloved daughter
          </p>
      </div>
    </ScreenWrapper>
  );
};

export default BlessingsScreen;