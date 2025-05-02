import React, { useState, useEffect } from 'react';
import { outlets } from '../../data/outlets';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Star, Clock, Phone, Calendar, Users, Clock3, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Restaurant } from '../../types';

// Contact Form Modal Component
const ContactFormModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  project: Restaurant | null;
}> = ({ isOpen, onClose, project }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    projectDescription: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the project data to your backend
    console.log('Project inquiry submitted:', { project: project?.name, ...formData });
    alert('Project inquiry submitted successfully! We will get back to you within 24 hours.');
    onClose();
  };
  
  // If modal is not open or no project is selected, don't render
  if (!isOpen || !project) return null;
  
  return (
    <div className="fixed inset-0 bg-deep-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-deep-black border border-cream/20 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header with project info */}
        <div className="relative p-6 border-b border-cream/10">
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 text-cream/60 hover:text-cream transition-colors"
            aria-label="Close contact form"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h3 className="font-playfair text-2xl md:text-3xl mb-2">Start Your Project</h3>
          <div className="flex items-center gap-2 text-cream/80">
            <span className="text-lg">{project.name}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" />
              <span>{project.rating}</span>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Contact Information */}
            <div>
              <label className="block text-cream/80 mb-2 text-sm" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-4 py-3 text-cream focus:border-cream/50 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-cream/80 mb-2 text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-4 py-3 text-cream focus:border-cream/50 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-cream/80 mb-2 text-sm" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-4 py-3 text-cream focus:border-cream/50 focus:outline-none transition-colors"
                placeholder="Your phone number"
              />
            </div>
            
            <div>
              <label className="block text-cream/80 mb-2 text-sm" htmlFor="company">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-4 py-3 text-cream focus:border-cream/50 focus:outline-none transition-colors"
                placeholder="Your company name"
              />
            </div>
            
            <div>
              <label className="block text-cream/80 mb-2 text-sm" htmlFor="projectType">
                Project Type
              </label>
              <div className="relative">
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-4 py-3 text-cream focus:border-cream/50 focus:outline-none transition-colors appearance-none"
                >
                  <option value="">Select project type</option>
                  <option value="website">Website Development</option>
                  <option value="app">App Development</option>
                  <option value="automation">Automation</option>
                  <option value="ai">AI Solution</option>
                  <option value="other">Other/Custom</option>
                </select>
                <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/60 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-cream/80 mb-2 text-sm" htmlFor="budget">
                Estimated Budget
              </label>
              <div className="relative">
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-4 py-3 text-cream focus:border-cream/50 focus:outline-none transition-colors appearance-none"
                >
                  <option value="">Select budget range</option>
                  <option value="under5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/60 pointer-events-none" />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-cream/80 mb-2 text-sm" htmlFor="projectDescription">
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows={4}
              className="w-full bg-deep-black/50 border border-cream/20 rounded-lg px-4 py-3 text-cream focus:border-cream/50 focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project and specific requirements"
            ></textarea>
          </div>
          
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-cream text-deep-black font-semibold rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2"
            >
              Submit Inquiry
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              type="button"
              onClick={onClose}
              className="w-full px-6 py-3 border border-cream/20 rounded-lg hover:bg-cream/10 transition-colors"
            >
              Cancel
            </button>
          </div>
          
          <p className="text-cream/40 text-xs text-center mt-6">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </div>
    </div>
  );
};

export default function FeaturedOutlets() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Restaurant | null>(null);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 1500);

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? outlets.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === outlets.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = outlets.length - 1;
      if (nextIndex >= outlets.length) nextIndex = 0;
      return nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const handleStartProject = (project: Restaurant) => {
    setSelectedProject(project);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          className="w-24 h-24 border-4 border-cream/20 border-t-cream rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Luxury Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/patterns/luxury-pattern.svg')]" 
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl mb-4 md:mb-6">Our Transformative Builds</h2>
          <p className="text-cream/60 text-base md:text-lg max-w-2xl mx-auto">
          Explore breakthrough projects powered by AIM — crafted to automate, scale, and win.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-[1400px] mx-auto">
          {/* Navigation Buttons - Hidden on mobile */}
          <div className="hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-cream/10 hover:bg-cream/20 backdrop-blur-sm flex items-center justify-center transition-all group"
            >
              <ChevronLeft className="w-8 h-8 text-cream group-hover:scale-110 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-cream/10 hover:bg-cream/20 backdrop-blur-sm flex items-center justify-center transition-all group"
            >
              <ChevronRight className="w-8 h-8 text-cream group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>

          {/* Carousel */}
          <motion.div 
            className="overflow-hidden touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <motion.div
              className="flex flex-nowrap"
              animate={{
                x: `-${activeIndex * 100}%`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {outlets.map((outlet, index) => (
                <motion.div
                  key={outlet.id}
                  className="w-full flex-shrink-0"
                  style={{ touchAction: 'pan-y pinch-zoom' }}
                >
                  {/* Mobile Design (Card Layout) */}
                  <div className="block md:hidden">
                    <motion.div 
                      className="relative bg-deep-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-cream/10 hover:border-cream/20 transition-all duration-500 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Card Content */}
                      <div className="p-6 md:p-8">
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="space-y-6"
                        >
                          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                            <img 
                              src={outlet.image} 
                              alt={outlet.name}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="font-playfair text-2xl md:text-3xl">{outlet.name}</h3>
                              <div className="flex items-center gap-1">
                                <Star className="w-5 h-5 text-cream fill-current" />
                                <span>{outlet.rating}</span>
                              </div>
                            </div>

                            <p className="text-cream/60 text-sm md:text-base line-clamp-2">
                              {outlet.description}
                            </p>

                            <div className="space-y-3 text-cream/80">
                              <div className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 mt-1" />
                                <div>
                                  <div className="font-medium">{outlet.address}</div>
                                  <div className="text-cream/60">{outlet.city}</div>
                                </div>
                              </div>

                              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <span className="flex items-center gap-2">
                                  <Clock className="w-5 h-5" />
                                  {outlet.hours}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                              <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
                                <button 
                                  onClick={() => handleStartProject(outlet)}
                                  className="w-full px-6 py-3 bg-cream text-deep-black font-semibold rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2"
                                >
                                  Start Your Build
                                  <ArrowRight className="w-5 h-5" />
                                </button>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
                                <Link 
                                  to={`/case-studies/${outlet.id}`}
                                  className="w-full px-6 py-3 border border-cream/20 rounded-lg hover:bg-cream/10 transition-colors flex items-center justify-center gap-2"
                                >
                                  View Full Case Study
                                  <ArrowRight className="w-5 h-5" />
                                </Link>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Desktop Design (Split Layout) */}
                  <div className="hidden md:grid grid-cols-2 gap-8 h-[600px]">
                    {/* Left Side - Image */}
                    <div className="relative rounded-xl overflow-hidden group">
                      <img 
                        src={outlet.image} 
                        alt={outlet.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/50 to-transparent" />
                      
                      {/* Floating Rating */}
                      <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-full">
                        <Star className="w-5 h-5 text-cream fill-current" />
                        <span className="text-lg font-semibold">{outlet.rating}</span>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="relative flex flex-col justify-center p-8 bg-deep-black/30 rounded-xl backdrop-blur-sm border border-cream/10">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                      >
                        <div>
                          <h3 className="font-playfair text-4xl mb-4">{outlet.name}</h3>
                          <p className="text-cream/60 text-lg leading-relaxed">
                            {outlet.description}
                          </p>
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-cream/60 mt-1" />
                            <div>
                              <div className="font-medium text-lg">{outlet.address}</div>
                              <div className="text-cream/40">{outlet.city}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-8 text-cream/60">
                            <span className="flex items-center gap-2">
                              <Clock className="w-5 h-5" />
                              {outlet.hours}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
                            <button 
                              onClick={() => handleStartProject(outlet)}
                              className="w-full px-8 py-4 bg-cream text-deep-black font-semibold rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2 text-lg"
                            >
                              Start Your Build
                              <ArrowRight className="w-6 h-6" />
                            </button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
                            <Link 
                              to={`/case-studies/${outlet.id}`}
                              className="w-full px-8 py-4 border border-cream/20 rounded-lg hover:bg-cream/10 transition-colors flex items-center justify-center gap-2 text-lg"
                            >
                              View Full Case Study
                              <ArrowRight className="w-6 h-6" />
                            </Link>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Decorative Elements */}
                      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cream/10 rounded-tl-xl -translate-x-4 -translate-y-4" />
                      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cream/10 rounded-br-xl translate-x-4 translate-y-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Swipe Indicator - Only shows on first load */}
          <AnimatePresence>
            {activeIndex === 0 && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="md:hidden absolute inset-0 pointer-events-none"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-6 py-3 bg-cream/10 backdrop-blur-sm rounded-full text-sm text-cream/80 flex items-center gap-2">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.div>
                    Swipe to explore
                    <motion.div
                      animate={{ x: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress Bar - Mobile Only */}
          <div className="md:hidden mt-6">
            <div className="h-1 bg-cream/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-cream"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeIndex + 1) / outlets.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="mt-2 text-center text-sm text-cream/60">
              {activeIndex + 1} / {outlets.length}
            </div>
          </div>

          {/* Desktop Indicators remain same */}
          <div className="hidden md:flex justify-center gap-3 mt-12">
            {outlets.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-12 h-1 bg-cream' 
                    : 'w-3 h-1 bg-cream/40 hover:bg-cream/60'
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        project={selectedProject}
      />
    </section>
  );
}