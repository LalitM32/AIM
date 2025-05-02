import React from 'react';
import { Award, Newspaper, Camera, Bookmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: "Awards & Accolades",
    description: "Celebrating excellence in hospitality and culinary innovation",
    icon: Award,
    path: "/recognition/awards",
    image: "https://images.unsplash.com/photo-1557858310-9052820906f7?auto=format&fit=crop&q=80"
  },
  {
    title: "Media Coverage",
    description: "Featured in leading publications and media outlets",
    icon: Newspaper,
    path: "/recognition/media",
    image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80"
  },
  {
    title: "Events Gallery",
    description: "Memorable moments from our exclusive events",
    icon: Camera,
    path: "/recognition/events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
  },
  {
    title: "Lifestyle Hub",
    description: "Stories that inspire and experiences that matter",
    icon: Bookmark,
    path: "/recognition/lifestyle",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80"
  }
];

export default function RecognitionHubPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1515169273894-7e876dcf13da?auto=format&fit=crop&q=80"
          alt="Recognition Hub"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-playfair text-5xl md:text-7xl mb-6 animate-fade-up">
            Recognition Hub
          </h1>
          <p className="text-xl text-cream/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
            Celebrating our journey of excellence and innovation
          </p>
        </div>
      </div>

      {/* Sections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <Link
                  key={section.path}
                  to={section.path}
                  className="group relative overflow-hidden rounded-xl aspect-[16/9]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <img 
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/70 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-4">
                      <section.icon className="w-8 h-8 text-cream/80" />
                      <h2 className="font-playfair text-3xl">{section.title}</h2>
                    </div>
                    <p className="text-cream/80 mb-6">{section.description}</p>
                    <div className="flex items-center gap-2 text-cream/60 group-hover:text-cream transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 