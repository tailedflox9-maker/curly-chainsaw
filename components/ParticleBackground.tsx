import React, { useMemo } from 'react';

const ParticleBackground: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => {
      const style = {
        '--x-start': `${Math.random() * 100}vw`,
        '--y-start': `${Math.random() * 100}vh`,
        '--x-end': `${Math.random() * 100}vw`,
        '--y-end': `${Math.random() * 100}vh`,
        '--size': `${1 + Math.random() * 2}px`,
        '--duration': `${8 + Math.random() * 12}s`,
        '--delay': `-${Math.random() * 20}s`,
      };
      return <div key={i} className="particle" style={style as React.CSSProperties}></div>;
    });
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translate(var(--x-start), var(--y-start)); opacity: 0; }
          50% { opacity: 0.7; }
          100% { transform: translate(var(--x-end), var(--y-end)); opacity: 0; }
        }
        .particle {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--size);
          height: var(--size);
          background-color: #C3A1A0;
          border-radius: 50%;
          animation: float var(--duration) var(--delay) linear infinite;
          will-change: transform, opacity;
          box-shadow: 0 0 8px #C3A1A0;
        }
      `}</style>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {particles}
      </div>
    </>
  );
};

export default ParticleBackground;