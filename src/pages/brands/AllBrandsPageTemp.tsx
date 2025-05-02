import React, { useState, useRef, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Navigation,
  Utensils
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { outlets } from '../../data/outlets';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

type Restaurant = {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  mapLink: string;
  rating: number;
  image: string;
  brand: string;
};

const RestaurantCarousel: React.FC<{
  restaurants: Restaurant[];
  brandName: string;
}> = ({ restaurants, brandName }) => {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragStart, setDragStart] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? restaurants.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === restaurants.length - 1 ? 0 : prev + 1));
  };

  const handleDragStart = (event: PointerEvent) => {
    setDragStart(event.clientX);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragDistance = info.offset.x;
    const dragThreshold = 50; // minimum distance to trigger slide change

    if (dragDistance > dragThreshold && activeIndex > 0) {
      handlePrev();
    } else if (dragDistance < -dragThreshold && activeIndex < restaurants.length - 1) {
      handleNext();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.15,
        type: "spring",
        bounce: 0.1,
        stiffness: 150,
        damping: 15
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    })
  };

  const brandVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-12 md:py-24 relative overflow-visible min-h-[600px] md:min-h-[800px]">
      {/* Brand Title with animation */}
      <motion.div 
        className="text-center mb-8 md:mb-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={brandVariants}
      >
        <h2 className="font-playfair text-4xl md:text-5xl mb-4 md:mb-6 text-cream relative inline-block">
          {brandName}
          <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-cream/20"></div>
        </h2>
        <p className="text-cream/60 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8">
          Discover the unique flavors and ambiance of {brandName}
        </p>
      </motion.div>

      <div className="relative max-w-[1800px] mx-auto px-4 md:px-24">
        {/* Navigation Buttons with hover animation */}
        {restaurants.length > 1 && (
          <>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              onClick={handlePrev}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-cream/10 hover:bg-cream/20 backdrop-blur-sm items-center justify-center transition-all group"
              aria-label="Previous restaurant"
            >
              <ChevronLeft className="w-7 h-7 text-cream group-hover:scale-110 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              onClick={handleNext}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-cream/10 hover:bg-cream/20 backdrop-blur-sm items-center justify-center transition-all group"
              aria-label="Next restaurant"
            >
              <ChevronRight className="w-7 h-7 text-cream group-hover:scale-110 transition-transform" />
            </motion.button>
          </>
        )}

        {/* Carousel Container */}
        <motion.div 
          ref={carouselRef} 
          className="overflow-hidden rounded-xl md:rounded-2xl"
          whileHover="hover"
          variants={cardVariants}
        >
          <AnimatePresence initial={false} custom={activeIndex} mode="wait">
            <motion.div
              key={activeIndex}
              custom={activeIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="w-full"
            >
              {/* Restaurant Card */}
              <motion.div 
                className={`w-full flex-shrink-0 px-0 md:px-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <div className="bg-deep-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-cream/10 hover:border-cream/20 transition-all duration-500 group h-auto md:h-[600px]">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Left Column: Restaurant Image */}
                    <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
                      <img
                        src={restaurants[activeIndex].image}
                        alt={restaurants[activeIndex].name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-deep-black/50 to-deep-black" />
                    </div>

                    {/* Right Column: Restaurant Content */}
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-deep-black/30">
                      <div>
                        <div className="flex items-start md:items-center justify-between mb-4 flex-col md:flex-row gap-2 md:gap-0">
                          <h3 className="font-playfair text-2xl md:text-3xl">{restaurants[activeIndex].name}</h3>
                          <div className="flex items-center gap-1 text-cream/80">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="text-lg">{restaurants[activeIndex].rating}</span>
                          </div>
                        </div>

                        <p className="text-cream/80 mb-4 md:mb-6 line-clamp-3 md:line-clamp-4 text-sm md:text-base">
                          {restaurants[activeIndex].description}
                        </p>

                        <div className="flex items-start gap-3 mb-3 md:mb-4">
                          <MapPin className="w-5 md:w-6 h-5 md:h-6 text-cream/60 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-base md:text-lg">{restaurants[activeIndex].address}</div>
                            <div className="text-cream/40 text-sm">{restaurants[activeIndex].city}</div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6 mb-4 md:mb-6 text-cream/60 text-sm md:text-base">
                          <span className="flex items-center gap-2">
                            <Phone className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                            {restaurants[activeIndex].phone}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                            {restaurants[activeIndex].hours}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mt-4 md:mt-auto">
                        <Link
                          to={`/restaurants/${restaurants[activeIndex].id}`}
                          className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-cream text-deep-black font-semibold rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                          View Details
                          <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                        </Link>
                        <a
                          href={restaurants[activeIndex].mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-4 md:px-6 py-2.5 md:py-3 border border-cream/20 rounded-lg hover:bg-cream/10 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                          Get Directions
                          <Navigation className="w-4 md:w-5 h-4 md:h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Carousel Indicators with animation */}
        {restaurants.length > 1 && (
          <motion.div 
            className="flex justify-center gap-3 mt-6 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.15 }}
          >
            {restaurants.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 md:w-12 bg-cream' 
                    : 'w-1.5 md:w-2 bg-cream/40 hover:bg-cream/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default function AllBrandsPage() {
  // Optional: Track scroll position for header parallax effect
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use the real data from outlets
  const allRestaurants = outlets;

  // Group restaurants by brand (ensure keys match the data's brand names in lowercase)
  const restaurantsByBrand = allRestaurants.reduce((acc, restaurant) => {
    const brand = restaurant.brand.toLowerCase();
    if (!acc[brand]) {
      acc[brand] = [];
    }
    acc[brand].push(restaurant);
    return acc;
  }, {} as Record<string, Restaurant[]>);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.25,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.main 
      className="bg-deep-black text-cream min-h-screen"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {/* Enhanced Page Header */}
      <div className="relative py-32 mb-16 overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-[url('/images/header-bg.jpg')] bg-cover bg-center"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 via-deep-black/70 to-deep-black" />
        
        {/* Header Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-playfair text-7xl mb-8 animate-fade-up">
            Our Brands
          </h1>
          <p className="text-cream/80 text-xl max-w-3xl mx-auto mb-12 animate-fade-up [animation-delay:200ms]">
            Experience luxury dining across our distinctive restaurant brands, each offering a unique culinary journey
          </p>
          
          {/* Brand Statistics */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 animate-fade-up [animation-delay:400ms]">
            <div className="text-center">
              <div className="text-5xl font-playfair mb-4">{Object.keys(restaurantsByBrand).length}</div>
              <div className="text-cream/60">Unique Brands</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-playfair mb-4">{allRestaurants.length}</div>
              <div className="text-cream/60">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-playfair mb-4">4.8</div>
              <div className="text-cream/60">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Sections */}
      <div className="container mx-auto px-4">
        {/* Ivoryy Carousel */}
        {restaurantsByBrand['ivoryy'] && (
          <RestaurantCarousel 
            restaurants={restaurantsByBrand['ivoryy']} 
            brandName="Ivoryy"
          />
        )}

        {/* Aviary Carousel */}
        {restaurantsByBrand['aviary'] && (
          <RestaurantCarousel 
            restaurants={restaurantsByBrand['aviary']} 
            brandName="Aaviary"
          />
        )}

        {/* Chhupa Rustam Carousel */}
        {restaurantsByBrand['chhupa rustam'] && (
          <RestaurantCarousel 
            restaurants={restaurantsByBrand['chhupa rustam']} 
            brandName="Chhupa Rustam"
          />
        )}
      </div>
    </motion.main>
  );
}
