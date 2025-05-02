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
  Utensils,
  X,
  Calendar,
  Users,
  Clock3
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

// Booking form type
type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
};

// BookingFormModal component
const BookingFormModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  restaurant: Restaurant | null;
}> = ({ isOpen, onClose, restaurant }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          specialRequests: ''
        });
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-deep-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div 
        ref={modalRef}
        className="bg-deep-black border border-cream/20 rounded-xl w-full max-w-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        {/* Modal Header */}
        <div className="relative p-6 border-b border-cream/10">
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 text-cream/60 hover:text-cream transition-colors"
            aria-label="Close booking form"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="font-playfair text-2xl text-cream">Book a Table</h3>
          {restaurant && (
            <p className="text-cream/60 mt-1">{restaurant.name}</p>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-cream mb-2">Booking Confirmed!</h4>
              <p className="text-cream/60">Thank you for your reservation. We've sent a confirmation to your email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cream/80 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-3 py-2 text-cream focus:outline-none focus:ring-1 focus:ring-cream/30 focus:border-cream/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cream/80 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-3 py-2 text-cream focus:outline-none focus:ring-1 focus:ring-cream/30 focus:border-cream/30"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-cream/80 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-3 py-2 text-cream focus:outline-none focus:ring-1 focus:ring-cream/30 focus:border-cream/30"
                  placeholder="Your phone number"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-cream/80 mb-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 w-5 h-5 text-cream/40" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-deep-black/50 border border-cream/20 rounded-lg pl-10 pr-3 py-2 text-cream focus:outline-none focus:ring-1 focus:ring-cream/30 focus:border-cream/30"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-cream/80 mb-1">Time</label>
                  <div className="relative">
                    <Clock3 className="absolute left-3 top-2.5 w-5 h-5 text-cream/40" />
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-deep-black/50 border border-cream/20 rounded-lg pl-10 pr-3 py-2 text-cream focus:outline-none focus:ring-1 focus:ring-cream/30 focus:border-cream/30 appearance-none"
                    >
                      <option value="">Select time</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="14:30">2:30 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="15:30">3:30 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="16:30">4:30 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-cream/80 mb-1">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-2.5 w-5 h-5 text-cream/40" />
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-deep-black/50 border border-cream/20 rounded-lg pl-10 pr-3 py-2 text-cream focus:outline-none focus:ring-1 focus:ring-cream/30 focus:border-cream/30 appearance-none"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8 People</option>
                    <option value="9">9 People</option>
                    <option value="10">10+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-cream/80 mb-1">Special Requests (Optional)</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-3 py-2 text-cream focus:outline-none focus:ring-1 focus:ring-cream/30 focus:border-cream/30"
                  placeholder="Any special requests or dietary requirements?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-cream text-deep-black font-semibold rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-deep-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Confirm Reservation
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const RestaurantCarousel: React.FC<{
  restaurants: Restaurant[];
  brandName: string;
}> = ({ restaurants, brandName }) => {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragStart, setDragStart] = useState(0);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Calculate total slides (restaurants + title slide)
  const totalSlides = restaurants.length + 1;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleDragStart = (event: PointerEvent) => {
    setDragStart(event.clientX);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragDistance = info.offset.x;
    const dragThreshold = 50; // minimum distance to trigger slide change

    if (dragDistance > dragThreshold && activeIndex > 0) {
      handlePrev();
    } else if (dragDistance < -dragThreshold && activeIndex < totalSlides - 1) {
      handleNext();
    }
  };

  const handleBookNow = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
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

  // Get a sample image from the restaurants for the title slide background
  const titleSlideImage = restaurants.length > 0 ? restaurants[0].image : '';

  return (
    <section className="py-12 md:py-24 relative overflow-visible min-h-[600px] md:min-h-[800px]">
      {/* We'll keep this for SEO and accessibility, but it won't be visible on mobile */}
      <motion.div 
        className="text-center mb-8 md:mb-16 px-4 md:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={brandVariants}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 md:w-12 bg-cream/30"></div>
            <span className="text-cream/60 uppercase tracking-widest text-xs md:text-sm font-light">Exquisite Dining</span>
            <div className="h-[1px] w-8 md:w-12 bg-cream/30"></div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl mb-4 md:mb-6 text-cream relative inline-block">
            {brandName}
            <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-cream/20"></div>
          </h2>
          
          <p className="text-cream/60 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8">
            Discover the unique flavors and ambiance of {brandName}
          </p>
          
          <Link 
            to="/brands" 
            className="mt-6 md:mt-8 group inline-flex items-center gap-2 text-cream hover:text-cream/80 transition-colors"
          >
            <span className="text-sm md:text-base font-medium border-b border-cream/30 group-hover:border-cream/60 transition-colors pb-0.5">See all brands</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      <div className="relative max-w-[1800px] mx-auto px-4 md:px-24">
        {/* Navigation Buttons with hover animation */}
        {totalSlides > 1 && (
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
              {/* Title Slide or Restaurant Card */}
              <motion.div 
                className={`w-full flex-shrink-0 px-0 md:px-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                {activeIndex === 0 ? (
                  // Title Slide
                  <div className="bg-deep-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-cream/10 hover:border-cream/20 transition-all duration-500 group h-auto md:h-[600px]">
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Left Column: Brand Image */}
                      <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
                        <img
                          src={titleSlideImage}
                          alt={`${brandName} brand`}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-deep-black/70 to-deep-black" />
                      </div>

                      {/* Right Column: Brand Content */}
                      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center items-center text-center bg-deep-black/30">
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <div className="h-[1px] w-8 md:w-12 bg-cream/30"></div>
                          <span className="text-cream/60 uppercase tracking-widest text-xs md:text-sm font-light">Exquisite Dining</span>
                          <div className="h-[1px] w-8 md:w-12 bg-cream/30"></div>
                        </div>
                        
                        <h2 className="font-playfair text-4xl md:text-6xl mb-4 md:mb-6 text-cream relative inline-block">
                          {brandName}
                          <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-cream/20"></div>
                        </h2>
                        
                        <p className="text-cream/80 text-base md:text-xl max-w-2xl mx-auto mt-6 md:mt-8 mb-8 md:mb-12">
                        Savor the unique flavors of {brandName}, then swipe to unveil our complete collection of extraordinary brands.                       </p>
                        
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-md">
                        <div className="w-full" id="brand-title-slide-placeholder"></div>
                      </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Restaurant Card
                  <div className="bg-deep-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-cream/10 hover:border-cream/20 transition-all duration-500 group h-auto md:h-[600px]">
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Left Column: Restaurant Image */}
                      <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
                        <img
                          src={restaurants[activeIndex - 1].image}
                          alt={restaurants[activeIndex - 1].name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-deep-black/50 to-deep-black" />
                      </div>

                      {/* Right Column: Restaurant Content */}
                      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-deep-black/30">
                        <div>
                          <div className="flex items-start md:items-center justify-between mb-4 flex-col md:flex-row gap-2 md:gap-0">
                            <h3 className="font-playfair text-2xl md:text-3xl">{restaurants[activeIndex - 1].name}</h3>
                            <div className="flex items-center gap-1 text-cream/80">
                              <Star className="w-5 h-5 fill-current" />
                              <span className="text-lg">{restaurants[activeIndex - 1].rating}</span>
                            </div>
                          </div>

                          <p className="text-cream/80 mb-4 md:mb-6 line-clamp-3 md:line-clamp-4 text-sm md:text-base">
                            {restaurants[activeIndex - 1].description}
                          </p>

                          <div className="flex items-start gap-3 mb-3 md:mb-4">
                            <MapPin className="w-5 md:w-6 h-5 md:h-6 text-cream/60 mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-base md:text-lg">{restaurants[activeIndex - 1].address}</div>
                              <div className="text-cream/40 text-sm">{restaurants[activeIndex - 1].city}</div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6 mb-4 md:mb-6 text-cream/60 text-sm md:text-base">
                            <span className="flex items-center gap-2">
                              <Phone className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                              {restaurants[activeIndex - 1].phone}
                            </span>
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                              {restaurants[activeIndex - 1].hours}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 mt-4 md:mt-auto">
                          <button
                            onClick={() => handleBookNow(restaurants[activeIndex - 1])}
                            className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-cream text-deep-black font-semibold rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                          >
                            Book Now
                            <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                          </button>
                          <a
                            href={restaurants[activeIndex - 1].mapLink}
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
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Carousel Indicators with animation */}
        {totalSlides > 1 && (
          <motion.div 
            className="flex justify-center gap-3 mt-6 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.15 }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
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

      {/* Booking Form Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <BookingFormModal
            isOpen={isBookingModalOpen}
            onClose={closeBookingModal}
            restaurant={selectedRestaurant}
          />
        )}
      </AnimatePresence>
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
