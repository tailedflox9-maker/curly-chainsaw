import React from 'react';
import { CalendarIcon, ShareIcon } from './Icons';

const ScreenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 text-center snap-start relative">
        {children}
    </div>
);

const ThankYouScreen: React.FC = () => {
    const handleShare = async () => {
        const shareData = {
            title: "Unnati & Kaustubh's Wedding",
            text: "You're invited to the wedding of Unnati and Kaustubh!",
            url: window.location.href,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                alert("Sharing is not supported on this browser. Please copy the link from the address bar.");
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    const getCalendarLink = () => {
        const startTime = '20251205T064500Z'; 
        const endTime = '20251205T103000Z';   

        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            'SUMMARY:Unnati & Kaustubh\'s Wedding',
            'DTSTART:' + startTime,
            'DTEND:' + endTime,
            'LOCATION:Jalwankar Mangal Karyalay\\, Akola\\, Maharashtra',
            'DESCRIPTION:Join us for the wedding celebration of Unnati and Kaustubh!',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\n');
        
        return 'data:text/calendar;charset=utf-8,' + encodeURIComponent(icsContent);
    };

    return (
        <ScreenWrapper>
            <div className="max-w-lg w-full">
                <h2 className="text-3xl md:text-4xl text-gray-800 font-semibold mb-4">
                     Thank You
                </h2>
                <p className="text-lg md:text-xl my-6 text-gray-500">
                    Your presence will make this day even more special.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                    With Love,
                    <br />
                    The Ugle & Wankhede Families
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                    <button
                        onClick={handleShare}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#A9907E] text-white font-medium rounded-md text-sm hover:bg-[#a18873] transition-colors duration-200"
                    >
                        <ShareIcon className="h-4 w-4" />
                        Share Invitation
                    </button>
                    <a
                        href={getCalendarLink()}
                        download="unnati-kaustubh-wedding.ics"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-gray-300 text-gray-600 font-medium rounded-md text-sm hover:bg-gray-50 transition-colors duration-200"
                    >
                        <CalendarIcon className="h-4 w-4" />
                        Add to Calendar
                    </a>
                </div>
            </div>
        </ScreenWrapper>
    );
};

export default ThankYouScreen;
