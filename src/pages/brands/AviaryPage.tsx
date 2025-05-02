import React from 'react';
import BrandTemplate from '../../components/brands/BrandTemplate';

const aviaryData = {
  name: "Aviary",
  tagline: "Where Asian Flavors Take Flight",
  description: `Aviary is a sophisticated fusion restaurant that celebrates the diverse culinary traditions of Asia. Each dish is thoughtfully crafted to present familiar Asian flavors in new and exciting ways, creating an unforgettable dining experience.`,
  coverImage: "https://lh3.googleusercontent.com/p/AF1QipOvdLFa-QVrI063hmT5RHzKfA_EUcqFPuaFtqY6=s680-w680-h510",
  interiorImage: "https://lh3.googleusercontent.com/p/AF1QipPD8u8ub9gLqdUwxTU-WCvkLh35CdX9hL5ltst_=s680-w680-h510",
  cuisine: "Pan-Asian Fusion",
  priceRange: "₹2,000 - ₹3,500 per person",
  features: [
    "Contemporary Asian Fusion",
    "Sake and Wine Pairing",
    "Private Dining Pods",
    "Sushi Bar",
    "Teppanyaki Counter",
    "Outdoor Zen Garden"
  ],
  restaurantStory: {
    establishment: "Established in 2020, Aviary has quickly become a landmark destination for Asian fusion cuisine in India.",
    philosophy: "Our philosophy centers on creating an immersive dining experience that combines traditional Asian flavors with modern culinary techniques.",
    specialFeatures: [
      "Live Cooking Stations",
      "Sake Sommelier",
      "Private Dining Pods",
      "Seasonal Menu Changes"
    ],
    images: {
      dining: "https://lh3.googleusercontent.com/p/AF1QipOo-5-QnoIELAubXz_BDQNRWDq5qPRuohDsXN5d=s680-w680-h510",
      kitchen: "https://lh3.googleusercontent.com/p/AF1QipOqQld4raXEWSsEhQEsongtjyCCqKS91BIMQoPc=s680-w680-h510",
      founder: "https://lh3.googleusercontent.com/p/AF1QipOiH2rEucoq0YIWMIhlf14t9EaEeltaeKbIEzRg=s680-w680-h510"
    }
  },
  cuisineTypes: [
    {
      title: "Japanese",
      description: "Traditional sushi and modern interpretations",
      image: "https://lh3.googleusercontent.com/p/AF1QipP12Wl-R7mxfKgtEYt-xrv4PA0swIGlndMh8uoH=s680-w680-h510"
    },
    {
      title: "Chinese",
      description: "Authentic flavors with contemporary presentation",
      image: "https://lh3.googleusercontent.com/p/AF1QipO9DZhOOXZnqJnN-eY2MqFmA7UU7vEO8yk3QpRo=s680-w680-h510"
    },
    {
      title: "Pan-Asian",
      description: "Fusion of various Asian culinary traditions",
      image: "https://lh3.googleusercontent.com/p/AF1QipPOMqZM4ICyOgH6zxMOynqfs2Cfp1CU6J2W3ZG8=s680-w680-h510"
    }
  ],
  gallery: [
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipMHcU0ZbjLgcWUhXFePgkeNe8EuRIIyCQY4ghTM=s680-w680-h510",
      caption: "Gallery Image 1"
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipN-mAelIs4MrmtqfBQDxNKceUjzeldXpCGJdReI=s680-w680-h510",
      caption: "Gallery Image 2"
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipOQvEnsv8seR8cBoWE0r9DSCbITG2d1KeETXRUd=s680-w680-h510",
      caption: "Gallery Image 3"
    }
  ],
  locations: [
    {
      city: "Bangalore",
      address: "The Luxury Hub, MG Road, Bangalore",
      phone: "+91 80 2345 6789",
      hours: "12:00 PM - 11:00 PM",
      mapLink: "https://maps.google.com"
    },
    {
      city: "Delhi",
      address: "Asian Square, Aerocity, New Delhi",
      phone: "+91 11 2345 6789",
      hours: "12:00 PM - 11:00 PM",
      mapLink: "https://maps.google.com"
    }
  ],
  menu: {
    starters: [
      {
        name: "Dragon's Breath Dimsum",
        description: "Liquid nitrogen-infused dumplings with seafood filling",
        price: "₹800",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80",
        isSignature: true
      },
      // Add more starters...
    ],
    mains: [
      {
        name: "Wagyu Teppanyaki",
        description: "A5 Wagyu beef with seasonal Japanese vegetables",
        price: "₹3,500",
        image: "https://images.unsplash.com/photo-1579247386242-927d0d4d0251?auto=format&fit=crop&q=80",
        isSignature: true
      },
      // Add more mains...
    ],
    desserts: [
      {
        name: "Matcha Forest",
        description: "Green tea tiramisu with chocolate soil and edible flowers",
        price: "₹650",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80",
        isSignature: true
      },
      // Add more desserts...
    ]
  }
};

export default function AviaryPage() {
  return <BrandTemplate {...aviaryData} />;
} 