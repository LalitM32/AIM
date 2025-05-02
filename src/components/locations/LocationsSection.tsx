import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Phone, Clock, ArrowRight, Star, Utensils, Navigation, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brands } from '../../data/brands';

export default function LocationsSection() {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allLocations = brands.flatMap(brand => 
    brand.locations.map(location => ({
      ...location,
      brandName: brand.name,
      brandImage: brand.image,
      brandId: brand.id,
      cuisine: brand.cuisine
    }))
  );

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? allLocations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === allLocations.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-[url('/images/restaurant-interior.jpg')] bg-cover bg-center"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-deep-black/80 to-deep-black" />
      
      <div className="container mx-auto px-4 relative">
        <div 
          className="text-center mb-20"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        >
          <h2 className="font-playfair text-6xl mb-6 animate-fade-up">Our Locations</h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
            Experience luxury dining across India's most prestigious destinations
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto px-12">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 backdrop-blur-sm flex items-center justify-center transition-all group"
          >
            <ChevronLeft className="w-6 h-6 text-cream group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 backdrop-blur-sm flex items-center justify-center transition-all group"
          >
            <ChevronRight className="w-6 h-6 text-cream group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel Cards */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 33.333}%)` }}
            >
              {allLocations.map((location, index) => (
                <div 
                  key={`${location.brandName}-${location.city}`}
                  className={`w-1/3 flex-shrink-0 px-4 transition-all duration-500 ${
                    index === activeIndex 
                      ? 'scale-100 opacity-100' 
                      : 'scale-95 opacity-50'
                  }`}
                >
                  <div className="relative h-[600px] bg-deep-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-cream/10 hover:border-cream/20 transition-all duration-500 group p-8">
                    {/* Card Image */}
                    <div className="relative h-72 overflow-hidden">
                      <img 
                        src={location.brandImage} 
                        alt={location.brandName}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-deep-black to-transparent">
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-playfair text-3xl">{location.brandName}</h3>
                            <div className="flex items-center gap-1 text-cream/80">
                              <Star className="w-5 h-5 fill-current" />
                              <span className="text-lg">4.8</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-cream/60 text-lg">
                            <Utensils className="w-5 h-5" />
                            <span>{location.cuisine}</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-6 h-6 text-cream/60 mt-1" />
                            <div>
                              <div className="font-medium text-lg">{location.address}</div>
                              <div className="text-cream/40">{location.city}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-6 text-cream/60">
                            <span className="flex items-center gap-2">
                              <Phone className="w-5 h-5" />
                              {location.phone}
                            </span>
                            <span className="flex items-center gap-2">
                              <Clock className="w-5 h-5" />
                              {location.hours}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                          <Link 
                            to={`/brands/${location.brandId}`}
                            className="flex-1 px-6 py-3 bg-cream text-deep-black font-semibold rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2"
                          >
                            View Details
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                          <a 
                            href={location.mapLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-6 py-3 border border-cream/20 rounded-lg hover:bg-cream/10 transition-colors flex items-center justify-center gap-2"
                          >
                            Get Directions
                            <Navigation className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {allLocations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-cream' 
                    : 'bg-cream/40 hover:bg-cream/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats with Parallax */}
        <div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
        >
          {[
            { label: 'Locations', value: allLocations.length },
            { label: 'Cities', value: [...new Set(allLocations.map(loc => loc.city))].length },
            { label: 'Brands', value: brands.length },
            { label: 'Happy Customers', value: '100K+' }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="font-playfair text-4xl mb-2">{stat.value}</div>
              <div className="text-cream/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 