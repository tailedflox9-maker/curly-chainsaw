import React from 'react';
import { MapPinIcon } from './Icons';

const ScreenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 text-center snap-start relative">
        {children}
    </div>
);


const CeremonyScreen: React.FC = () => {
  const venueUrl = "https://www.google.com/maps/search/?api=1&query=Jalwankar+Mangal+Karyalay,Akola,Maharashtra";
  return (
    <ScreenWrapper>
      <div className="max-w-md w-full relative">
        <h2 className="text-3xl md:text-4xl text-[#A9907E] font-semibold mb-8">
          Wedding Ceremony
        </h2>
        <div className="space-y-6 text-base md:text-lg">
          <div>
            <p className="font-medium text-gray-800">Date</p>
            <p className="text-gray-500">5th December 2025</p>
          </div>
          <div>
            <p className="font-medium text-gray-800">Time</p>
            <p className="text-gray-500">12:15 PM (Shubh Muhurat)</p>
          </div>
          <div>
            <p className="font-medium text-gray-800">Venue</p>
            <p className="text-gray-500">Jalwankar Mangal Karyalay</p>
            <p className="text-gray-500">Akola, Maharashtra</p>
          </div>
        </div>
        <a 
          href={venueUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-[#A9907E] text-white font-medium rounded-md text-sm hover:bg-[#a18873] transition-colors duration-200"
        >
          <MapPinIcon className="h-4 w-4" />
          View Location
        </a>
      </div>
    </ScreenWrapper>
  );
};

export default CeremonyScreen;