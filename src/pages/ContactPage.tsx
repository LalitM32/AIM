import React, { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, MapPin, Building2, Users, Send, Clock, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Link } from 'react-router-dom';

type FormType = 'general' | 'franchise' | 'careers';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  // Franchise specific
  businessLocation?: string;
  investmentRange?: string;
  experience?: string;
  // Career specific
  position?: string;
  careerExperience?: string;
  resume?: File;
}

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState<FormType>('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      // Show success message
      alert('Thank you for your message. We will get back to you soon!');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const locations = [
    {
      city: 'Haryana',
      address: 'Flat No-20-21C, First Floor Fruit Garden NIT-5, Faridabad, Haryana, India, 121001',
      phone: '+91 88000 95584',
      hours: '10:00 AM - 7:00 PM'
    },
  ];

  const contactOptions = [
    { id: 'general', title: 'General Inquiry', icon: Mail },
    { id: 'franchise', title: 'Franchise Opportunity', icon: Building2 },
    { id: 'careers', title: 'Join Our Team', icon: Users }
  ];

  const handleSwipe = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      const direction = info.offset.x > 0 ? -1 : 1;
      const currentIndex = contactOptions.findIndex(opt => opt.id === activeTab);
      let nextIndex = currentIndex + direction;
      
      if (nextIndex < 0) nextIndex = contactOptions.length - 1;
      if (nextIndex >= contactOptions.length) nextIndex = 0;
      
      setActiveTab(contactOptions[nextIndex].id as FormType);
      setShowSwipeHint(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center"
          style={{ y: scrollY * 0.5 }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/50 to-deep-black" />
        
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
          style={{ y: -scrollY * 0.3 }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="font-playfair text-6xl md:text-7xl mb-6">Get in Touch</h1>
            <p className="text-xl text-cream/80">
              We'd love to hear from you. Let's create something extraordinary together.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Options */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center mb-16 relative">
            {/* Desktop Navigation */}
            <div className="hidden md:inline-flex gap-2 p-1 bg-deep-black/30 backdrop-blur-sm rounded-full border border-cream/10">
              {contactOptions.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => setActiveTab(option.id as FormType)}
                  className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 ${
                    activeTab === option.id 
                      ? 'bg-cream text-deep-black' 
                      : 'text-cream/60 hover:text-cream'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <option.icon className="w-5 h-5" />
                  <span>{option.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden w-full max-w-sm mx-auto relative">
              <motion.div 
                className="overflow-hidden"
                initial={false}
              >
                <motion.div
                  className="flex"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, info) => handleSwipe(e, info)}
                  animate={{
                    x: `-${contactOptions.findIndex(opt => opt.id === activeTab) * 100}%`
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  {contactOptions.map((option) => (
                    <motion.div
                      key={option.id}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <motion.button
                        onClick={() => setActiveTab(option.id as FormType)}
                        className={`w-full px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 ${
                          activeTab === option.id 
                            ? 'bg-cream text-deep-black' 
                            : 'bg-deep-black/30 text-cream/60'
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        <option.icon className="w-5 h-5" />
                        <span>{option.title}</span>
                      </motion.button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Swipe Hint */}
              <AnimatePresence>
                {showSwipeHint && (
                  <motion.div
                    className="absolute -bottom-12 left-0 right-0 flex justify-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-full text-sm text-cream/80 flex items-center gap-2">
                      <motion.div
                        animate={{ 
                          x: [-5, 5, -5],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1.5,
                          ease: "easeInOut"
                        }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                      Swipe to change option
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="absolute -bottom-24 left-0 right-0">
                <div className="flex justify-center gap-2">
                  {contactOptions.map((option) => (
                    <motion.div
                      key={option.id}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        activeTab === option.id ? 'w-8 bg-cream' : 'w-2 bg-cream/20'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Dynamic Form Section */}
            <div className="relative">
              <motion.div 
                className="bg-deep-black/30 rounded-xl p-8 backdrop-blur-sm border border-cream/10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatePresence mode="wait">
                  <motion.form 
                    key={activeTab}
                    className="space-y-6"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    action="https://usebasin.com/f/640ec996c073"
                    method="POST"
                  >
                    {/* Common Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input 
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input 
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input 
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input 
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Conditional Fields */}
                    {activeTab === 'franchise' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Location</label>
                          <input 
                            type="text"
                            name="businessLocation"
                            onChange={handleInputChange}
                            className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Do you have a location?</label>
                          <select 
                            name="hasLocation"
                            onChange={handleInputChange}
                            className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                          >
                            <option value="">Select Option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </>
                    )}

                    {activeTab === 'careers' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2">Position</label>
                          <select 
                            name="position"
                            onChange={handleInputChange}
                            className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                          >
                            <option value="">Select Position</option>
                            <option value="chef">Chef</option>
                            <option value="manager">Restaurant Manager</option>
                            <option value="server">Server</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Resume</label>
                          <input 
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleInputChange}
                            className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea 
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                      />
                    </div>

                    <motion.button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cream text-deep-black font-semibold py-4 rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.form>
                </AnimatePresence>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-cream/10 rounded-tl-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-cream/10 rounded-br-xl" />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="font-playfair text-3xl mb-8">Our Offices</h2>
                
                {/* Office Locations */}
                {locations.map((location, index) => (
                  <div 
                    key={location.city}
                    className="bg-deep-black/30 rounded-xl p-6 backdrop-blur-sm border border-cream/10 hover:border-cream/20 transition-all duration-500"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-cream" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-xl mb-2">{location.city}</h3>
                        <div className="space-y-3 text-cream/60">
                          <p>{location.address}</p>
                          <div className="flex items-center gap-6">
                            <span className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {location.phone}
                            </span>
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {location.hours}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="pt-8 mt-8 border-t border-cream/10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="font-playfair text-2xl mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  {['Instagram'].map((social, index) => (
                    <motion.a 
                      key={social}
                      href="https://www.instagram.com/starshinebrands/"
                      className="px-6 py-3 bg-cream/10 rounded-lg hover:bg-cream/20 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-deep-black/95 backdrop-blur-sm animate-slide-down">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-6">
              {/* Home Link First */}
              <Link
                to="/"
                className="block font-playfair text-lg text-cream/80 hover:text-cream"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* About Us Section */}
              <div className="space-y-4">
                <div className="font-playfair text-lg">About Us</div>
                <div className="grid grid-cols-2 gap-4 pl-4">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-2 text-cream/80 hover:text-cream"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Our Brands Section */}
              <div className="space-y-4">
                <div className="font-playfair text-lg">Our Brands</div>
                <div className="grid grid-cols-1 gap-4 pl-4">
                  {brands.map((brand) => (
                    <Link
                      key={brand.slug}
                      to={`/brands/${brand.slug}`}
                      className="flex items-center gap-3 text-cream/80 hover:text-cream"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <div className="font-medium">{brand.name}</div>
                        <div className="text-sm text-cream/60">{brand.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recognition Hub Section */}
              <div className="space-y-4">
                <div className="font-playfair text-lg">Recognition Hub</div>
                <div className="grid grid-cols-2 gap-4 pl-4">
                  {recognitionItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-2 text-cream/80 hover:text-cream"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Regular Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block font-playfair text-lg text-cream/80 hover:text-cream"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Contact Section */}
              <div className="space-y-4">
                <div className="font-playfair text-lg">Contact Us</div>
                <div className="space-y-4 pl-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 text-cream/80 hover:text-cream"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get in Touch</span>
                  </Link>
                  <Link
                    to="/contact#franchise"
                    className="flex items-center gap-2 text-cream/80 hover:text-cream"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Franchise</span>
                  </Link>
                  <Link
                    to="/contact#careers"
                    className="flex items-center gap-2 text-cream/80 hover:text-cream"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Users className="w-4 h-4" />
                    <span>Careers</span>
                  </Link>
                  <div className="flex items-center gap-2 text-cream/80">
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}