import React from 'react';

const ScreenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 text-center snap-start relative">
        {children}
    </div>
);

const PhotoFrame: React.FC<{ imageUrl: string; name: string }> = ({ imageUrl, name }) => (
    <div className="flex flex-col items-center">
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-lg bg-gray-200 overflow-hidden">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-semibold text-2xl md:text-3xl text-gray-800 mt-5">{name}</h3>
    </div>
);

const BrideGroomScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
        <PhotoFrame imageUrl="https://picsum.photos/seed/bride/200" name="Unnati Ughe" />
        <div className="text-4xl md:text-5xl text-gray-300 font-light my-2 md:my-0">&</div>
        <PhotoFrame imageUrl="https://picsum.photos/seed/groom/200" name="Kaustubh Wankhade" />
      </div>
    </ScreenWrapper>
  );
};

export default BrideGroomScreen;