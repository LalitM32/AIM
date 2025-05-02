import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Building2, Users, Phone, Mail, History, Target, Award, Star, Utensils, MapPin, Clock, Newspaper, Camera, Bookmark, ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Upcoming Outlets', href: '/upcoming-outlets' },
];

const brands = [
  {
    name: "Smart City Initiative",
    description: "Urban development project focusing on sustainable infrastructure and digital transformation.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    website: "https://www.smartcityproject.in/",
    caseStudy: "/case-studies/smart-city",
    features: ["Smart Infrastructure", "Digital Governance", "Sustainable Development"]
  },
  {
    name: "Green Energy Park",
    description: "Renewable energy project implementing solar and wind power solutions.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    caseStudy: "/case-studies/green-energy",
    features: ["Solar Power", "Wind Energy", "Energy Storage"]
  },
  {
    name: "Digital Education Hub",
    description: "Modern educational facility with advanced digital learning infrastructure.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    website: "https://www.digitaleduhub.in/",
    caseStudy: "/case-studies/digital-education",
    features: ["E-Learning", "Virtual Labs", "Digital Library"]
  },
  {
    name: "Healthcare Innovation Center",
    description: "State-of-the-art medical research and healthcare technology facility.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    caseStudy: "/case-studies/healthcare",
    features: ["Medical Research", "Telemedicine", "Healthcare AI"]
  },
  {
    name: "Sustainable Housing Project",
    description: "Eco-friendly residential development with smart home technology.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    caseStudy: "/case-studies/sustainable-housing",
    features: ["Green Building", "Smart Homes", "Community Spaces"]
  },
  {
    name: "Urban Mobility Solution",
    description: "Integrated transportation system for smart city mobility.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    caseStudy: "/case-studies/urban-mobility",
    features: ["Public Transport", "EV Charging", "Traffic Management"]
  }
];

const recognitionItems = [
  {
    name: "Our Clients",
    description: "A timeline of partnerships",
    icon: Award,
    path: "/recognition/awards"
  },
  {
    name: "Media Coverage",
    description: "Press releases and news features",
    icon: Newspaper,
    path: "/recognition/media"
  },
  {
    name: "Events Gallery",
    description: "Special moments and celebrations",
    icon: Camera,
    path: "/recognition/events"
  },
  {
    name: "Testimonials",
    description: "Success stories from organizations",
    icon: Star,
    path: "/recognition/a-lister"
  }
];

const aboutItems = [
  {
    name: "Our Story & Vision",
    description: "Journey of culinary excellence",
    icon: History,
    path: "/about/story"
  },
  {
    name: "Our Team",
    description: "Meet the visionaries",
    icon: Users,
    path: "/about/team"
  },
  {
    name: "Sustainability",
    description: "Our commitment to the planet",
    icon: Leaf,
    path: "/about/sustainability"
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isBrandsMenuOpen, setBrandsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle menu clicks
  const handleMenuClick = (menuName: string) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu && !(event.target as Element).closest('.mega-menu-container')) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

  // Add this useEffect to handle body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Add blur overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-deep-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-deep-black/95 py-4 backdrop-blur-sm' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-cream font-playfair text-2xl relative group overflow-hidden"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                AIM
              </span>
              <span className="inline-block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                AIM
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home Link First */}
              <Link 
                to="/"
                className="text-cream hover:text-cream/80 transition-colors"
              >
                Home
              </Link>

              {/* About Us Mega Menu */}
              <div className="relative mega-menu-container">
                <button
                  className={`flex items-center gap-2 text-cream transition-colors ${
                    activeMenu === 'about' ? 'text-cream' : 'hover:text-cream/80'
                  }`}
                  onClick={() => handleMenuClick('about')}
                >
                  About Us
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeMenu === 'about' && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-deep-black/95 rounded-xl shadow-2xl backdrop-blur-sm border border-cream/10">
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-8">
                        {aboutItems.map((item, index) => (
                          <Link 
                            key={item.path}
                            to={item.path}
                            className="group relative overflow-hidden rounded-lg hover:bg-cream/5 transition-all duration-300"
                            onClick={() => setActiveMenu(null)}
                            style={{
                              animationDelay: `${index * 100}ms`,
                            }}
                          >
                            <div className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-cream/5 group-hover:bg-cream/10 transition-colors">
                                  <item.icon className="w-6 h-6 text-cream/80 transform group-hover:rotate-12 transition-transform duration-300" />
                                </div>
                                <div>
                                  <h3 className="font-playfair text-lg mb-2 group-hover:text-cream transition-colors">
                                    {item.name}
                                  </h3>
                                  <p className="text-sm text-cream/60 group-hover:text-cream/80 transition-colors">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cream/0 via-cream/20 to-cream/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Projects Mega Menu */}
              <div className="relative mega-menu-container">
                <button
                  className={`flex items-center gap-2 text-cream transition-colors ${
                    activeMenu === 'brands' ? 'text-cream' : 'hover:text-cream/80'
                  }`}
                  onClick={() => handleMenuClick('brands')}
                >
                  Our Projects
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeMenu === 'brands' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-deep-black/95 rounded-xl shadow-2xl backdrop-blur-sm border border-cream/10">
                    <div className="p-8">
                      <div className="grid grid-cols-3 gap-8">
                        {brands.map((brand, index) => (
                          <Link
                            key={brand.name}
                            to={brand.caseStudy}
                            className="group block"
                            onClick={() => setActiveMenu(null)}
                            style={{
                              animationDelay: `${index * 100}ms`,
                            }}
                          >
                            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                              <img 
                                src={brand.image} 
                                alt={brand.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="px-6 py-2 bg-cream/10 backdrop-blur-sm rounded-full text-sm border border-cream/20 hover:bg-cream/20 transition-all">
                                  View Case Study
                                </span>
                              </div>
                            </div>
                            <h3 className="font-playfair text-lg mb-2 group-hover:text-cream transition-colors">
                              {brand.name}
                            </h3>
                            <p className="text-sm text-cream/60 group-hover:text-cream/80 transition-colors">
                              {brand.description}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {brand.features.map((feature, idx) => (
                                <span 
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-cream/5 rounded-full text-cream/60 group-hover:text-cream/80 transition-colors"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-cream/10 flex justify-between items-center">
                        <Link
                          to="/all-projects"
                          className="group flex items-center gap-2 px-6 py-3 bg-cream/5 hover:bg-cream/10 rounded-lg border border-cream/20 transition-all duration-300"
                          onClick={() => setActiveMenu(null)}
                        >
                          <span className="text-cream group-hover:text-cream transition-colors font-medium">View all projects</span>
                          <ArrowRight className="w-4 h-4 text-cream/80 group-hover:text-cream transform group-hover:translate-x-1 transition-all" />
                        </Link>
                        <Link
                          to="/case-studies"
                          className="text-sm text-cream/60 hover:text-cream transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          Browse all case studies →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Recognition Hub Mega Menu */}
              <div className="relative mega-menu-container">
                <button
                  className={`flex items-center gap-2 text-cream transition-colors ${
                    activeMenu === 'recognition' ? 'text-cream' : 'hover:text-cream/80'
                  }`}
                  onClick={() => handleMenuClick('recognition')}
                >
                  Recognition Hub
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeMenu === 'recognition' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-deep-black/95 rounded-xl shadow-2xl backdrop-blur-sm border border-cream/10">
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-8">
                        {recognitionItems.map((item) => (
                          <Link 
                            key={item.path}
                            to={item.path}
                            className="group relative overflow-hidden rounded-lg hover:bg-cream/5 transition-all duration-300"
                            onClick={() => setActiveMenu(null)}
                          >
                            <div className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-cream/5 group-hover:bg-cream/10 transition-colors">
                                  <item.icon className="w-6 h-6 text-cream/80 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                                </div>
                                <div>
                                  <h3 className="font-playfair text-lg mb-2 group-hover:text-cream transition-colors">
                                    {item.name}
                                  </h3>
                                  <p className="text-sm text-cream/60 group-hover:text-cream/80 transition-colors">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cream/0 via-cream/20 to-cream/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-cream/10">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-cream/40">Latest Recognition</div>
                          <Link 
                            to="/recognition/awards"
                            className="text-sm text-cream/60 hover:text-cream flex items-center gap-2 transition-colors group"
                            onClick={() => setActiveMenu(null)}
                          >
                            View All
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                          <div className="rounded-lg overflow-hidden aspect-[4/3] relative group">
                            <img 
                              src="https://starshinebrands.com/wp-content/uploads/2024/09/Akshat-oarihar-sir-768x960.png" 
                              alt="Recent Award"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent opacity-60" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <div className="text-xs text-cream/60">2024</div>
                              <div className="text-sm font-medium">Best Fine Dining Restaurant</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Upcoming Outlets Link */}
              <Link 
                to="/upcoming-outlets"
                className="text-cream hover:text-cream/80 transition-colors"
              >
                Upcoming Events
              </Link>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="px-6 py-2 bg-cream text-deep-black rounded-lg hover:bg-cream/90 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button with Animation */}
            <button
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-cream transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
              }`} />
              <div className={`w-6 h-0.5 bg-cream absolute transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
              }`} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-deep-black/95 backdrop-blur-sm overflow-y-auto animate-scale-fade-in origin-top">
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-6">
                  {/* Home Link First in Mobile Menu */}
                  <Link
                    to="/"
                    className="block font-playfair text-lg text-cream/80 hover:text-cream animate-fade-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  {/* About Us Section */}
                  <div className="space-y-4 animate-fade-in"
                    style={{ animationDelay: '150ms' }}
                  >
                    <div className="font-playfair text-lg">About Us</div>
                    <div className="grid grid-cols-2 gap-4 pl-4">
                      {aboutItems.map((item, index) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-2 text-cream/80 hover:text-cream animate-fade-in"
                          onClick={() => setIsMobileMenuOpen(false)}
                          style={{
                            animationDelay: `${(index + 2) * 100}ms`,
                          }}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Our Projects Section */}
                  <div className="space-y-4 animate-fade-in"
                    style={{ animationDelay: '300ms' }}
                  >
                    <div className="font-playfair text-lg">Our Projects</div>
                    <div className="grid grid-cols-1 gap-4 pl-4">
                      {brands.slice(0, 3).map((brand, index) => (
                        <Link
                          key={brand.name}
                          to={brand.caseStudy}
                          className="flex items-center gap-3 text-cream/80 hover:text-cream animate-fade-in"
                          onClick={() => setIsMobileMenuOpen(false)}
                          style={{
                            animationDelay: `${(index + 4) * 100}ms`,
                          }}
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
                      <Link
                        to="/case-studies"
                        className="flex items-center gap-2 mt-4 text-cream/80 hover:text-cream border-t border-cream/10 pt-4 animate-fade-in"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span className="font-medium">View all projects</span>
                      </Link>
                    </div>
                  </div>

                  {/* Recognition Hub Section */}
                  <div className="space-y-4 animate-fade-in"
                    style={{ animationDelay: '450ms' }}
                  >
                    <div className="font-playfair text-lg">Recognition Hub</div>
                    <div className="grid grid-cols-2 gap-4 pl-4">
                      {recognitionItems.map((item, index) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-2 text-cream/80 hover:text-cream animate-fade-in"
                          onClick={() => setIsMobileMenuOpen(false)}
                          style={{
                            animationDelay: `${(index + 7) * 100}ms`,
                          }}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Regular Nav Items */}
                  {navItems.map((item, index) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block font-playfair text-lg text-cream/80 hover:text-cream animate-fade-in"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        animationDelay: `${(index + 9) * 100}ms`,
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Contact Section */}
                  <div className="space-y-4 animate-fade-in"
                    style={{ animationDelay: '600ms' }}
                  >
                    <div className="font-playfair text-lg">Contact Us</div>
                    <div className="space-y-4 pl-4">
                      <Link
                        to="/contact"
                        className="flex items-center gap-2 text-cream/80 hover:text-cream animate-fade-in"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Mail className="w-4 h-4" />
                        <span>Get in Touch</span>
                      </Link>
                      <Link
                        to="/contact#franchise"
                        className="flex items-center gap-2 text-cream/80 hover:text-cream animate-fade-in"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Building2 className="w-4 h-4" />
                        <span>Franchise</span>
                      </Link>
                      <Link
                        to="/contact#careers"
                        className="flex items-center gap-2 text-cream/80 hover:text-cream animate-fade-in"
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
      </nav>
    </>
  );
}