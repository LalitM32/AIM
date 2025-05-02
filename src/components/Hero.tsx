import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const carouselData = [
  {
    video: "https://starshinebrands.com/wp-content/uploads/2025/04/aim-h3.png",
    title: "Design. Code. Automate. Repeat.",
    subtitle: "Launch faster, look better, and work smarter — with a dev team that gets it.",
    type: "video"
  },
  {
    image: "https://starshinebrands.com/wp-content/uploads/2025/04/aim-h2.png",
    title: "Your Product, Powered by AI & Precision.",
    subtitle: "From MVPs to full-scale systems — we help founders launch, grow, and dominate.",
    type: "image"
  },
  {
    image: "https://starshinebrands.com/wp-content/uploads/2025/04/AIM-WEBSITE-BACKGROUND.png",
    title: "Not Another Team.",
    subtitle: "Websites, software, and custom AI agents for founders who care about results.",
    type: "image"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Carousel */}
      <div className="relative h-screen">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            {slide.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/50 to-deep-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div 
          className="text-center max-w-6xl mx-auto space-y-12" 
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        >
          <div className="space-y-6" key={currentSlide}>
            <div className="overflow-hidden">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl mb-4 animate-fade-in leading-none will-change-transform">
                {carouselData[currentSlide].title}
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="text-xl md:text-2xl text-cream/80 font-light max-w-3xl mx-auto animate-fade-in-delay will-change-transform font-playfair">
                {carouselData[currentSlide].subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-delay-2 pt-8">
            <Link
              to="/contact"
              className="group relative px-10 py-5 bg-cream text-deep-black font-semibold rounded-full overflow-hidden hover:bg-cream/90 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                 Get in Touch
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cream/0 via-cream/20 to-cream/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
            <Link
              to="/restaurants"
              className="group relative px-10 py-5 border-2 border-cream text-cream font-semibold rounded-full overflow-hidden hover:bg-cream hover:text-deep-black transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
              Our Portfolio
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8">
          <button
            onClick={handlePrevSlide}
            className="p-2 text-cream/60 hover:text-cream transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-3">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-cream' : 'bg-cream/40'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNextSlide}
            className="p-2 text-cream/60 hover:text-cream transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}