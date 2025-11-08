import React from 'react';

const ScreenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 text-center snap-start relative">
        {children}
    </div>
);

const TimelineEvent: React.FC<{ time: string; event: string; delay: string }> = ({ time, event, delay }) => (
    <div className="flex items-center w-full max-w-sm opacity-0 animate-fade-in" style={{ animationDelay: delay }}>
        <div className="w-1/3 text-right pr-6 text-base md:text-lg font-medium text-gray-700">{time}</div>
        <div className="w-2 h-2 rounded-full bg-gray-300 mx-4"></div>
        <div className="w-2/3 text-left pl-6 text-base md:text-lg text-gray-500">{event}</div>
    </div>
);

const TimelineScreen: React.FC = () => {
  return (
    <ScreenWrapper>
        <h2 className="text-3xl md:text-4xl text-[#A9907E] font-semibold mb-10">
            Wedding Timeline
        </h2>
        <div className="space-y-6 flex flex-col items-center">
            <TimelineEvent time="11:00 AM" event="Baraat Arrival" delay="0.2s" />
            <TimelineEvent time="11:30 AM" event="Var Puja" delay="0.4s" />
            <TimelineEvent time="12:15 PM" event="Wedding Ceremony" delay="0.6s" />
            <TimelineEvent time="1:30 PM" event="Lunch Reception" delay="0.8s" />
        </div>
        <style>{`
            @keyframes fade-in { 
                0% { opacity: 0; transform: translateY(10px); } 
                100% { opacity: 1; transform: translateY(0); } 
            }
            .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        `}</style>
    </ScreenWrapper>
  );
};

export default TimelineScreen;