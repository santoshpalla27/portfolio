
import React from 'react';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Background Base - Ensures no flickering on load */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-background-dark transition-colors duration-500"></div>

      {/* Animated Blobs - Muted for better consistency */}
      <div className="absolute -top-[10%] -right-[5%] h-[50vw] w-[50vw] min-h-[500px] min-w-[500px] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-600/5 animate-pulse-slow"></div>
      <div className="absolute top-[20%] -left-[10%] h-[60vw] w-[60vw] min-h-[600px] min-w-[600px] rounded-full bg-purple-600/5 blur-[140px] dark:bg-purple-500/5"></div>
      <div className="absolute -bottom-[10%] right-[15%] h-[40vw] w-[40vw] min-h-[400px] min-w-[400px] rounded-full bg-pink-500/5 blur-[100px] dark:bg-pink-600/5"></div>

      {/* Noise Texture - Using a subtle overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      ></div>

      {/* Grid Pattern - Softened and masked properly for cross-browser support */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:48px_48px]"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 0%, transparent 85%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 0%, transparent 85%)'
        }}
      ></div>

      {/* Subtle Bottom Glow to ground the page */}
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-gray-100/50 dark:from-background-dark/80 to-transparent"></div>
    </div>
  );
};

export default BackgroundDecor;
