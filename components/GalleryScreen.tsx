import React from 'react';
import Heart from './Heart';

interface ScreenProps {
    foundHearts: Set<number>;
    onHeartFound: (id: number) => void;
}

const ScreenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 text-center snap-start relative">
        {children}
    </div>
);

const GalleryImage: React.FC<{ seed: string, delay: string }> = ({ seed, delay }) => (
    <div className="w-full h-full p-1 border border-gray-200 rounded-md bg-gray-200 opacity-0 animate-fade-in" style={{ animationDelay: delay }}>
        <img 
            src={`https://picsum.photos/seed/${seed}/400/400`} 
            alt="Wedding memory" 
            className="w-full h-full object-cover rounded-sm"
            loading="lazy"
        />
    </div>
);


const GalleryScreen: React.FC<ScreenProps> = ({ foundHearts, onHeartFound }) => {
    const images = ['couple1', 'family1', 'engagement1', 'couple2', 'friends1', 'engagement2'];

    return (
        <ScreenWrapper>
            <h2 className="text-3xl md:text-4xl text-[#A9907E] font-semibold mb-8">
                Sweet Memories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl w-full relative">
                {images.map((seed, i) => (
                    <GalleryImage key={seed} seed={seed} delay={`${i * 0.1 + 0.1}s`} />
                ))}
                <Heart 
                    id={5} 
                    isFound={foundHearts.has(5)} 
                    onFind={onHeartFound}
                    className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
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

export default GalleryScreen;