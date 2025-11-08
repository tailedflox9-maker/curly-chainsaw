
import React from 'react';

export const LotusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z"/>
  </svg>
);

export const DiyaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20C16.4183 20 20 18.2091 20 16C20 13.7909 16.4183 12 12 12C7.58172 12 4 13.7909 4 16C4 18.2091 7.58172 20 12 20Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 12V8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 9C12 9 13.5 6 15 6C16.5 6 17 9 17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5" />
    </svg>
);

export const ShareIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.195.025.39.044.588.05H11.25a2.25 2.25 0 012.25 2.25v.015c0 .324-.11.634-.311.884m-2.25-2.25a2.25 2.25 0 00-2.25 2.25c0 .5.163.95.44 1.323m3-2.923c.386-.195.8-.314 1.25-.349m-3.443 4.256a2.25 2.25 0 012.25-2.25h.015c.324 0 .634.11.884.311m-3.033 1.637a2.25 2.25 0 00-2.25 2.25" />
    </svg>
);

