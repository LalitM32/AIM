import React from 'react';
import { MapPin, Phone, Clock, Star, Utensils, Camera, ChefHat } from 'lucide-react';

interface Location {
  city: string;
  address: string;
  phone: string;
  hours: string;
  mapLink: string;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  isSignature?: boolean;
}

interface Gallery {
  image: string;
  caption: string;
}

interface Cuisine {
  title: string;
  description: string;
  image: string;
}

interface BrandTemplateProps {
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
  interiorImage: string;
  cuisine: string;
  priceRange: string;
  locations: Location[];
  menu: {
    starters: MenuItem[];
    mains: MenuItem[];
    desserts: MenuItem[];
  };
  features: string[];
  gallery: Gallery[];
  cuisineTypes: Cuisine[];
  restaurantStory: {
    establishment: string;
    philosophy: string;
    ambiance: string;
    specialFeatures: string[];
    images: {
      founder: string;
      kitchen: string;
      dining: string;
    };
  };
}

export default function BrandTemplate({
  name,
  tagline,
  description,
  coverImage,
  interiorImage,
  cuisine,
  priceRange,
  locations,
  menu,
  features,
  gallery,
  cuisineTypes,
  restaurantStory
}: BrandTemplateProps) {
  return (
    <div className="pt-20">
      {/* Hero Section - Made more dramatic */}
      <div className="relative h-[85vh] overflow-hidden">
        <img 
          src={coverImage}
          alt={name}
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-playfair text-6xl md:text-8xl mb-6 tracking-wider">{name}</h1>
          <p className="text-2xl text-cream/90 max-w-2xl mb-8 font-light tracking-wide">{tagline}</p>
          <div className="flex items-center gap-6 text-cream/80 text-lg">
            <span className="font-light">{cuisine}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cream/60" />
            <span className="font-light">{priceRange}</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-4xl mb-6">About {name}</h2>
                <p className="text-cream/80 whitespace-pre-line">{description}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-cream/60" />
                      <span className="text-cream/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={interiorImage}
                  alt={`${name} Interior`}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Story Section - More elegant */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-5xl text-center mb-20">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-cream/90 text-lg leading-relaxed">{restaurantStory.establishment}</p>
                <p className="text-cream/90 text-lg leading-relaxed">{restaurantStory.philosophy}</p>
                <div className="pt-8 grid grid-cols-2 gap-6">
                  {restaurantStory.specialFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-cream/60" />
                      <span className="text-cream/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-6 grid-rows-6 gap-4">
                <div className="col-span-6 row-span-4 overflow-hidden rounded-xl">
                  <img 
                    src={restaurantStory.images.dining} 
                    alt="Dining Area"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="col-span-3 row-span-2 overflow-hidden rounded-xl">
                  <img 
                    src={restaurantStory.images.kitchen} 
                    alt="Kitchen"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="col-span-3 row-span-2 overflow-hidden rounded-xl">
                  <img 
                    src={restaurantStory.images.founder} 
                    alt="Founder"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Types Section - More sophisticated */}
      <section className="py-24 bg-deep-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-5xl text-center mb-20">Our Cuisine</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cuisineTypes.map((cuisine, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl aspect-[4/5]"
                >
                  <img 
                    src={cuisine.image}
                    alt={cuisine.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-playfair text-2xl mb-3">{cuisine.title}</h3>
                    <p className="text-cream/80 transform">{cuisine.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - More dynamic */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 justify-center mb-20">
              <Camera className="w-8 h-8 text-cream/60" />
              <h2 className="font-playfair text-5xl text-center">Gallery</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[300px]">
              {gallery.map((item, index) => (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-xl ${
                    index === 3 ? 'col-span-2 row-span-1' : ''
                  }`}
                >
                  <img 
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-cream/90 text-lg font-light">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-16">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locations.map((location) => (
              <div 
                key={location.city}
                className="bg-deep-black/30 rounded-lg p-6"
              >
                <h3 className="font-playfair text-2xl mb-4">{location.city}</h3>
                <div className="space-y-4 text-cream/80">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <span>{location.hours}</span>
                  </div>
                  <a 
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 border border-cream/20 rounded hover:bg-cream/10 transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 