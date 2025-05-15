import React, { useEffect, useRef } from 'react';
import heroImage from '../assets/hero.jpg'; // Adjust the path if needed

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollY = window.scrollY;
        textRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Image background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/60 via-pink-800/50 to-pink-700/40 backdrop-blur-sm"></div>
      </div>

      {/* Text Elements */}
      <div 
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10 perspective-1000"
      >
        <div className="transform-style-3d transform rotateX-10 relative animate-float-slow">
          <h2 className="text-pink-200 font-serif tracking-wider font-semibold text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 opacity-90">
            SUMMER COLLECTION 2025
          </h2>
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight leading-none drop-shadow-xl">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Dream</span>
            <span className="inline-block mx-2 md:mx-4 text-pink-300 hover:scale-105 transition-transform duration-300">in</span>
            <span className="inline-block hover:scale-105 transition-transform duration-300">Style</span>
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed font-light px-4">
            Discover our new dreamy collection designed to bring magic to every girl's wardrobe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-white text-pink-700 hover:bg-pink-100 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-subtle">
              Shop Collection
            </button>
            <button className="border-2 border-white/80 text-white hover:bg-white/20 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300">
              Watch Showcase
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements - Only visible on larger screens */}
      <div className="hidden lg:block absolute top-1/4 left-1/6 w-20 h-20 bg-pink-300/30 rounded-full blur-xl animate-float"></div>
      <div className="hidden lg:block absolute bottom-1/3 right-1/6 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-float-slow"></div>
      <div className="hidden lg:block absolute top-1/2 right-1/4 w-16 h-16 bg-yellow-200/30 rounded-full blur-xl animate-float-medium"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm font-light mb-2 animate-pulse">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-1.5 animate-scroll-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
