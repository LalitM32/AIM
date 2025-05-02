import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Clock, Star, ChevronDown } from 'lucide-react';
import { outlets } from '../data/outlets';

const RestaurantLinkTree = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get unique brands
  const brands = Array.from(new Set(outlets.map(outlet => outlet.brand)));
  
  // Filter outlets by selected brand or show all if no brand is selected
  const filteredOutlets = selectedBrand 
    ? outlets.filter(outlet => outlet.brand === selectedBrand)
    : outlets;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-deep-black text-cream">
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 via-deep-black/60 to-deep-black/90" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div 
            className="text-center max-w-6xl mx-auto space-y-8" 
            style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
          >
            <div className="space-y-6">
              <div className="overflow-hidden">
                <span className="block text-cream/80 text-lg md:text-xl uppercase tracking-[0.2em] font-light mb-4 animate-fade-in">Starshine Restaurants</span>
                <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl mb-4 animate-fade-in leading-none will-change-transform">
                  Culinary <span className="text-cream/80">Excellence</span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="text-xl md:text-2xl text-cream/70 font-light max-w-3xl mx-auto animate-fade-in-delay will-change-transform">
                  Discover our collection of exceptional dining experiences across the country, each offering a unique culinary journey.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-delay-2 pt-8">
              <button
                onClick={() => {
                  const element = document.getElementById('restaurant-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-10 py-5 bg-cream text-deep-black font-semibold rounded-full overflow-hidden hover:bg-cream/90 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  Explore Our Restaurants
                  <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cream/0 via-cream/20 to-cream/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-black to-transparent" />
      </div>
      
      {/* Main Content */}
      <div id="restaurant-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-16 bg-cream/30"></div>
              <h2 className="font-playfair text-3xl md:text-4xl">Our Restaurants</h2>
              <div className="h-[1px] w-16 bg-cream/30"></div>
            </div>
            <p className="text-lg text-cream/70 max-w-3xl mx-auto">
              Each restaurant offers a unique ambiance and culinary experience, crafted with passion and attention to detail.
            </p>
          </div>
          
          {/* Mobile Filter Dropdown */}
          <div className="md:hidden mb-8">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-between px-6 py-3 border-2 border-cream/30 rounded-full text-lg"
            >
              <span>{selectedBrand || 'All Restaurants'}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isFilterOpen && (
              <div className="mt-2 bg-deep-black border border-cream/20 rounded-xl p-2 animate-scale-fade-in">
                <button
                  onClick={() => {
                    setSelectedBrand(null);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedBrand === null ? 'bg-cream/10 text-cream' : 'hover:bg-cream/5'
                  }`}
                >
                  All Restaurants
                </button>
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => {
                      setSelectedBrand(brand);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedBrand === brand ? 'bg-cream/10 text-cream' : 'hover:bg-cream/5'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Desktop Brand Filter */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setSelectedBrand(null)}
              className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                selectedBrand === null 
                  ? 'bg-cream text-deep-black' 
                  : 'bg-transparent border-2 border-cream/30 text-cream/70 hover:border-cream hover:text-cream'
              }`}
            >
              All Restaurants
            </button>
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                  selectedBrand === brand 
                    ? 'bg-cream text-deep-black' 
                    : 'bg-transparent border-2 border-cream/30 text-cream/70 hover:border-cream hover:text-cream'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
          
          {/* Restaurant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOutlets.map((restaurant, index) => (
              <div 
                key={restaurant.id}
                className="bg-deep-black border border-cream/20 rounded-xl overflow-hidden hover:border-cream/50 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-playfair text-2xl">{restaurant.name}</h3>
                    <div className="flex items-center gap-1 bg-cream/10 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-cream/70">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{restaurant.address}, {restaurant.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{restaurant.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{restaurant.hours}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between items-center">
                    <a 
                      href={restaurant.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cream/70 hover:text-cream text-sm flex items-center gap-1 transition-colors"
                    >
                      View on Map
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <Link
                      to={`/booking/${restaurant.id}`}
                      className="px-4 py-2 bg-cream text-deep-black rounded-full text-sm font-medium hover:bg-cream/90 transition-colors flex items-center gap-1"
                    >
                      Book a Table
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredOutlets.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full border-2 border-cream/20">
                <MapPin className="w-10 h-10 text-cream/40" />
              </div>
              <h3 className="text-2xl font-playfair mb-2">No Restaurants Found</h3>
              <p className="text-cream/60 max-w-md mx-auto">
                We couldn't find any restaurants matching your criteria. Please try a different filter.
              </p>
              <button
                onClick={() => setSelectedBrand(null)}
                className="mt-6 px-6 py-3 bg-cream/10 hover:bg-cream/20 text-cream rounded-full transition-colors"
              >
                View All Restaurants
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantLinkTree; 