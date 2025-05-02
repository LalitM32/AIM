import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

// Sample partner logos - replace with actual partners
const partners = [
  {
    name: 'JobLine',
    logo: 'https://drive.irmm.in/wp-content/uploads/2025/03/Shopify.png',
  },
  {
    name: 'RealWave',
    logo: 'https://drive.irmm.in/wp-content/uploads/2025/03/samsung.png',
  },
  {
    name: 'Crosswill',
    logo: 'https://drive.irmm.in/wp-content/uploads/2025/03/WB.png',
  },
  {
    name: 'Pitch',
    logo: 'https://drive.irmm.in/wp-content/uploads/2025/03/openai.png',
  },
  {
    name: 'Loudnick',
    logo: 'https://drive.irmm.in/wp-content/uploads/2025/03/midjourney.png',
  },
  {
    name: 'Partner6',
    logo: 'https://drive.irmm.in/wp-content/uploads/2025/03/instacart.png',
  },
  {
    name: 'Partner7',
    logo: 'https://drive.irmm.in/wp-content/uploads/2025/03/perplexity.png',
  },
  {
    name: 'Partner8',
    logo: 'https://drive.irmm.in/wp-content/uploads/2025/03/replicate.png',
  },
];

export default function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayIntervalRef = useRef<number | null>(null);
  const maxIndex = Math.max(0, partners.length - 5);
  
  const handlePrev = () => {
    if (isAnimating || currentIndex <= 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  const handleKeyDownPrev = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePrev();
    }
  };

  const handleKeyDownNext = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNext();
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleToggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Set up autoplay
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      autoPlayIntervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= maxIndex) {
            return 0; // Loop back to the beginning
          }
          return prev + 1;
        });
      }, 3000);
    }

    return () => {
      if (autoPlayIntervalRef.current !== null) {
        window.clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying, isPaused, maxIndex]);

  return (
    <section className="py-20 bg-deep-black/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair text-cream mb-4">Our Partners</h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional experiences.
          </p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Logo carousel container */}
          <div className="relative overflow-hidden px-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 20}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-1/5 flex-shrink-0 px-4"
                >
                  <div className="aspect-[4/2] bg-slate-100/5 rounded-md flex items-center justify-center p-6">
                    <div className="relative h-16 w-full">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        style={{ filter: 'brightness(0) saturate(100%) invert(92%) sepia(8%) saturate(502%) hue-rotate(35deg) brightness(98%) contrast(89%)' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            onKeyDown={handleKeyDownPrev}
            disabled={currentIndex <= 0 || isAnimating}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 text-white transition-all",
              currentIndex <= 0 ? "opacity-40 cursor-not-allowed" : "opacity-80 hover:opacity-100 hover:bg-slate-700"
            )}
            aria-label="Previous partners"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            onKeyDown={handleKeyDownNext}
            disabled={currentIndex >= maxIndex || isAnimating}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 text-white transition-all",
              currentIndex >= maxIndex ? "opacity-40 cursor-not-allowed" : "opacity-80 hover:opacity-100 hover:bg-slate-700"
            )}
            aria-label="Next partners"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Auto-play toggle button */}
          <button
            onClick={handleToggleAutoPlay}
            className="absolute bottom-0 right-0 mb-4 mr-4 bg-slate-800/80 text-white p-2 rounded-full hover:bg-slate-700"
            aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isAutoPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>

          {/* Indicator dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentIndex === index 
                    ? "w-6 bg-[#E7E5BD]" 
                    : "bg-[#E7E5BD]/40 hover:bg-[#E7E5BD]/70"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 