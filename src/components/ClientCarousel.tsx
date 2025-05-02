import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const clients = [
  {
    name: 'Puma',
    logo: '/clients/puma.svg',
  },
  {
    name: 'UL',
    logo: '/clients/ul.svg',
  },
  {
    name: 'Lexus',
    logo: '/clients/lexus.svg',
  },
  {
    name: 'Rhino',
    logo: '/clients/rhino.svg',
  },
  {
    name: 'Microsoft',
    logo: '/clients/microsoft.svg',
  },
  {
    name: 'Apple',
    logo: '/clients/apple.svg',
  },
  {
    name: 'Google',
    logo: '/clients/google.svg',
  },
  {
    name: 'Tesla',
    logo: '/clients/tesla.svg',
  },
];

export default function ClientCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === clients.length - 4 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-deep-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair text-cream mb-4">Clients</h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Partnering with industry leaders to deliver exceptional digital experiences and innovative solutions.
          </p>
        </div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-deep-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-deep-black to-transparent z-10" />

          {/* Client Logo Carousel */}
          <div className="relative overflow-hidden mx-auto max-w-6xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 25}%)` }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="w-1/4 flex-shrink-0 px-8"
                >
                  <div className="aspect-[3/2] relative group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="w-full h-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: clients.length - 3 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeSlide === index 
                  ? "w-8 bg-cream" 
                  : "bg-cream/40 hover:bg-cream/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 