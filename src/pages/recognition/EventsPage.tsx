import React, { useState, useRef } from 'react';
import { Camera, Calendar, MapPin, Grid, Layout, Grid3X3, Film, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface EventGallery {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  featured?: boolean;
}

const eventGalleries: EventGallery[] = [
  {
    id: "mystic-melodies-night",
    title: "Mystic Melodies Night",
    date: "February 15, 2024",
    location: "Grand Ballroom, Delhi",
    description: "An enchanting evening of soulful Sufi tunes and mesmerizing performances that captivated our audience. The event featured renowned artists and created an atmosphere of musical transcendence.",
    category: "Live Music",
    thumbnail: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Nizami-Brothers-image-768x512-1.png",
    images: [
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Nizami-Brothers-image-768x512-1.png",
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/274A0686-scaled-1-768x512-1.png",
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/RS-Fotography-3D-HD-8K-5683-768x.png",
    ],
    featured: true
  },
  {
    id: "flames-rhythms-showcase",
    title: "Flames & Rhythms Showcase",
    date: "January 20, 2024",
    location: "Outdoor Amphitheater, Mumbai",
    description: "An electrifying night featuring breathtaking fire acts and captivating belly dance performances. Guests were treated to a spectacular display of talent and artistic expression.",
    category: "Performance",
    thumbnail: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/P2300531-scaled-1-683x1024-1.png",
    images: [
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/P2300531-scaled-1-683x1024-1.png",
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/P2300451-scaled-1-683x1024-1.png",
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/P2300408-scaled-1-768x512-1.png"
    ]
  },
  {
    id: "harmonic-vibes-live",
    title: "Harmonic Vibes Live",
    date: "December 10, 2023",
    location: "Ivory Rooftop, Delhi",
    description: "Experience the energy of live bands performing a mix of contemporary hits and classic tunes. The evening was filled with musical brilliance and created memorable moments for all attendees.",
    category: "Concert",
    thumbnail: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/DSF8550-scaled-1-768x512-1.png",
    images: [
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/DSF8550-scaled-1-768x512-1.png",
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/DSF8583-4-768x512-1.png",
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Snapinsta.app_428611889_17948652.png"
    ]
  },
  {
    id: "vintage-groove-nights",
    title: "Vintage Groove Nights",
    date: "November 25, 2023",
    location: "Club Ivory, Mumbai",
    description: "Step back in time with a night of retro beats, classic hits, and an electrifying dance floor. The DJ selection transported guests through decades of musical evolution.",
    category: "DJ Event",
    thumbnail: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Snapinsta.app_428679792_17948652.png",
    images: [
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Snapinsta.app_428679792_17948652.png",
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Snapinsta.app_428608958_17948652.png",
      "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/SPK3020-1536x1024-1.png"
    ],
    featured: true
  },
  {
    id: "ai-hackathon-2023",
    title: "AI Innovation Hackathon 2023",
    date: "October 15, 2023",
    location: "Tech Campus, Bangalore",
    description: "Our flagship AI hackathon brought together brilliant minds from across the country to build innovative AI solutions. The event showcased cutting-edge projects and emerging talent in the field.",
    category: "Tech Event",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ]
  },
  {
    id: "scholarship-awards-2023",
    title: "AI for All Scholarship Awards 2023",
    date: "September 20, 2023",
    location: "Grand Ballroom, Hyderabad",
    description: "Our annual scholarship awards ceremony where we distributed over $85,000 in educational grants to promising AI students. The event celebrated the next generation of AI innovators.",
    category: "Education",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ]
  }
];

export default function EventsGalleryPage() {
  const [activeGallery, setActiveGallery] = useState<EventGallery | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const masonryRef = useRef<HTMLDivElement>(null);

  // Open gallery modal
  const openGallery = (gallery: EventGallery, imageIndex: number = 0) => {
    setActiveGallery(gallery);
    setCurrentImageIndex(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  // Close gallery modal
  const closeGallery = () => {
    setActiveGallery(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate through images in the modal
  const navigateImage = (direction: 'next' | 'prev') => {
    if (!activeGallery) return;
    
    if (direction === 'next') {
      setCurrentImageIndex((prev) => 
        prev === activeGallery.images.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === 0 ? activeGallery.images.length - 1 : prev - 1
      );
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeGallery) return;
      
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGallery]);

  // Featured galleries section
  const featuredGalleries = eventGalleries.filter(gallery => gallery.featured);

  return (
    <div className="pt-20 bg-deep-black text-cream">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-deep-black">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <Camera 
                key={i}
                className="absolute text-cream/10 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${Math.random() * 40 + 20}px`,
                  height: `${Math.random() * 40 + 20}px`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <Camera className="w-12 h-12 text-cream/80" />
            <h1 className="font-playfair text-5xl md:text-7xl">Events Gallery</h1>
          </div>
          <p className="text-xl text-cream/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
            Capturing memorable moments from our past events and celebrations
          </p>
        </div>
      </div>

      {/* Featured Gallery Section */}
      {featuredGalleries.length > 0 && (
        <section className="py-20 bg-deep-black/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-playfair text-3xl mb-12">Featured Events</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredGalleries.map((gallery) => (
                  <div 
                    key={gallery.id}
                    className="group relative overflow-hidden rounded-xl h-[400px] cursor-pointer"
                    onClick={() => openGallery(gallery)}
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={gallery.thumbnail}
                        alt={gallery.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h3 className="font-playfair text-3xl mb-2 group-hover:text-cream transition-colors">{gallery.title}</h3>
                      <div className="flex items-center gap-3 mb-4 text-cream/70">
                        <Calendar className="w-5 h-5" />
                        <span>{gallery.date}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-5 h-5" />
                        <span>{gallery.location}</span>
                      </div>
                      <p className="text-cream/80 line-clamp-2">{gallery.description}</p>
                      <div className="flex items-center gap-2 mt-4 text-cream/60 group-hover:text-cream transition-colors">
                        <Film className="w-5 h-5" />
                        <span>View {gallery.images.length} photos</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* View Mode Switcher */}
      <section className="py-8 sticky top-0 z-10 bg-deep-black/90 backdrop-blur-sm border-b border-cream/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="font-playfair text-2xl">All Event Galleries</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-cream/60">View mode:</span>
              <div className="flex border border-cream/20 rounded-lg overflow-hidden">
                <button 
                  className={`p-2 ${viewMode === 'grid' ? 'bg-cream/20 text-cream' : 'bg-transparent text-cream/60 hover:text-cream/80'}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button 
                  className={`p-2 ${viewMode === 'masonry' ? 'bg-cream/20 text-cream' : 'bg-transparent text-cream/60 hover:text-cream/80'}`}
                  onClick={() => setViewMode('masonry')}
                  aria-label="Masonry view"
                >
                  <Layout className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventGalleries.map((gallery) => (
                  <div 
                    key={gallery.id}
                    className="group bg-deep-black/50 rounded-xl overflow-hidden animate-fade-in"
                  >
                    <div 
                      className="h-64 overflow-hidden cursor-pointer"
                      onClick={() => openGallery(gallery)}
                    >
                      <img 
                        src={gallery.thumbnail}
                        alt={gallery.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-xl mb-3 group-hover:text-cream transition-colors">{gallery.title}</h3>
                      <div className="flex items-center gap-2 text-cream/60 text-sm mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{gallery.date}</span>
                        <span className="mx-1">•</span>
                        <MapPin className="w-4 h-4" />
                        <span>{gallery.location}</span>
                      </div>
                      <p className="text-cream/70 mb-4 line-clamp-3">{gallery.description}</p>
                      <button
                        onClick={() => openGallery(gallery)}
                        className="px-4 py-2 border border-cream/20 rounded-lg text-sm text-cream/80 hover:bg-cream/10 transition-colors flex items-center gap-2"
                      >
                        <Film className="w-4 h-4" />
                        View Gallery
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div 
                ref={masonryRef}
                className="masonry-grid"
              >
                {eventGalleries.flatMap(gallery => 
                  gallery.images.map((image, i) => (
                    <div 
                      key={`${gallery.id}-${i}`}
                      className="masonry-item mb-4 overflow-hidden rounded-lg"
                      onClick={() => openGallery(gallery, i)}
                    >
                      <div className="group relative cursor-pointer">
                        <img 
                          src={image}
                          alt={`${gallery.title} - Photo ${i+1}`}
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-deep-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="text-center p-4">
                            <h4 className="font-playfair text-lg">{gallery.title}</h4>
                            <p className="text-sm text-cream/80">{gallery.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {activeGallery && (
        <div className="fixed inset-0 bg-deep-black/95 z-50 flex flex-col animate-fade-in">
          {/* Modal Header */}
          <div className="bg-deep-black/80 backdrop-blur-sm p-4 border-b border-cream/10 flex items-center justify-between">
            <div>
              <h3 className="font-playfair text-xl">{activeGallery.title}</h3>
              <p className="text-sm text-cream/60">{currentImageIndex + 1} of {activeGallery.images.length}</p>
            </div>
            <button 
              onClick={closeGallery}
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Main Image Display */}
          <div className="flex-1 overflow-hidden relative flex items-center justify-center p-4">
            <img 
              src={activeGallery.images[currentImageIndex]}
              alt={`${activeGallery.title} - Photo ${currentImageIndex + 1}`}
              className="max-h-full max-w-full object-contain"
            />
            
            {/* Navigation Buttons */}
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 w-12 h-12 rounded-full bg-deep-black/60 flex items-center justify-center hover:bg-deep-black/80 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 w-12 h-12 rounded-full bg-deep-black/60 flex items-center justify-center hover:bg-deep-black/80 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Image Info and Thumbnails */}
          <div className="bg-deep-black/80 backdrop-blur-sm p-4 border-t border-cream/10">
            <div className="mb-4">
              <div className="flex items-center gap-2 text-cream/70 text-sm mb-1">
                <Calendar className="w-4 h-4" />
                <span>{activeGallery.date}</span>
                <span className="mx-1">•</span>
                <MapPin className="w-4 h-4" />
                <span>{activeGallery.location}</span>
              </div>
              <p className="text-cream/80">{activeGallery.description}</p>
            </div>
            
            {/* Thumbnails for quick navigation */}
            <div className="flex gap-2 overflow-x-auto py-2">
              {activeGallery.images.map((image, index) => (
                <div 
                  key={index}
                  className={`w-20 h-20 flex-shrink-0 rounded-md overflow-hidden cursor-pointer border-2 ${
                    index === currentImageIndex ? 'border-cream' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer with Impact Statement */}
      <section className="py-16 bg-deep-black/30 border-t border-cream/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-2xl mb-6">Supporting the Future of AI</h2>
            <p className="text-cream/70 mb-8">
              We give back 20% of our profits to empower the next generation of AI builders and learners through educational initiatives and scholarships.
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2 bg-cream/10 border border-cream/20 rounded-lg hover:bg-cream/20 transition-colors">
              Learn More About Our Impact
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Masonry Grid Styles */
        .masonry-grid {
          column-count: 1;
          column-gap: 1rem;
        }
        
        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        
        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
          }
        }
        
        @media (min-width: 1280px) {
          .masonry-grid {
            column-count: 4;
          }
        }
        
        .masonry-item {
          display: inline-block;
          width: 100%;
          break-inside: avoid;
        }
      `}</style>
    </div>
  );
}