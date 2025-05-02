import React from 'react';
import BrandTemplate from '../../components/brands/BrandTemplate';

const ivoryData = {
  name: "Ivoryy",
  tagline: "Modern Indian Fine Dining with a Contemporary Twist",
  description: `Chic, classic but feels like home. Ivoryy Cocktail Garden embodies the prestigious and rare ivory elephant tusk as it brings out the natural and majestic aura. 
  
  A minimalistic, niche setting with a touch of nature where there is food flaunting homemade sophistication, drinks that take you back to your stages of drinking, and memories that will last forever. 
  
  Embracing the beams and beauty of the sun’s rays; Ivoryy Delhi provides the feeling of a picnic with an old friend. Gazebos and sofas are placed under trees surrounded by lush greenery and the musical call of birds; Ivorry is the calm in the middle of chaos. `,
  coverImage: "https://lh3.googleusercontent.com/p/AF1QipNviDuchBBPZ5H45TLSCBxHTUWvLCeucZ2PZqA2=s680-w680-h510",
  interiorImage: "https://lh3.googleusercontent.com/p/AF1QipMGxDrsjo5gwDKNxXY8lkjAxrt3Ty29KM6ebk3l=s680-w680-h510",
  cuisine: "Modern Indian",
  priceRange: "₹2,500 - ₹4,000 per person",
  features: [
    "Contemporary Indian Cuisine",
    "Wine Pairing Available",
    "Private Dining Rooms",
    "Live Kitchen Theatre",
    "Valet Parking",
    "Outdoor Seating"
  ],
  locations: [
    {
      city: "Delhi",
      address: "The Grand Plaza, Connaught Place, New Delhi",
      phone: "+91 11 4567 8901",
      hours: "12:00 PM - 11:30 PM",
      mapLink: "https://maps.google.com"
    },
    {
      city: "Mumbai",
      address: "Luxury Mall, Bandra West, Mumbai",
      phone: "+91 22 4567 8901",
      hours: "12:00 PM - 11:30 PM",
      mapLink: "https://maps.google.com"
    }
  ],
  menu: {
    starters: [
      {
        name: "Tandoori Lobster",
        description: "Fresh lobster marinated in Indian spices, cooked in tandoor",
        price: "₹1,800",
        image: "https://lh3.googleusercontent.com/p/AF1QipOmfKmt1A4N_KE1DCM-J0QhlctGVISTXA5a0lGE=s680-w680-h510",
        isSignature: true
      },
      // Add more starters...
    ],
    mains: [
      {
        name: "Truffle Butter Chicken",
        description: "Classic butter chicken elevated with black truffle",
        price: "₹1,200",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80",
        isSignature: true
      },
      // Add more mains...
    ],
    desserts: [
      {
        name: "Saffron Rose Crème Brûlée",
        description: "French classic with Indian flavors",
        price: "₹650",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80",
        isSignature: true
      },
      // Add more desserts...
    ]
  },
  restaurantStory: {
    establishment: `Established in 2010, Ivory represents the pinnacle of modern Indian gastronomy, where tradition meets innovation in a setting of unparalleled luxury.`,
    
    philosophy: `Our philosophy is simple: respect for traditional flavors, innovation in presentation, and an unwavering commitment to excellence. Each dish tells a story of India's rich culinary heritage through a contemporary lens.`,
    
    specialFeatures: [
      "Custom Tandoor Ovens",
      "Temperature-Controlled Wine Cellar",
      "Private Dining Suites",
      "Chef's Table Experience",
      "Seasonal Tasting Menus"
    ],
    
    images: {
      founder: "https://lh3.googleusercontent.com/p/AF1QipNk4rlOaEs7GhSyDSHcHqiuKfgkzC240LiGQpl_=s680-w680-h510",
      kitchen: "https://starshinebrands.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-04-at-3.27.35-PM-e1712556129232.jpeg",
      dining: "https://lh3.googleusercontent.com/p/AF1QipPsFzJeONzEs9mKS_WrP5EN0FpZaC1_GbqI-SBJ=s680-w680-h510"
    }
  },
  cuisineTypes: [
    {
      title: "Modern Indian",
      description: "Contemporary interpretations using molecular gastronomy",
      image: "https://lh3.googleusercontent.com/p/AF1QipMGxDrsjo5gwDKNxXY8lkjAxrt3Ty29KM6ebk3l=s680-w680-h510"
    },
    {
      title: "Regional Specialties",
      description: "Curated dishes from India's diverse regions",
      image: "https://lh3.googleusercontent.com/p/AF1QipPBrEBlWi_3dBXwfN4-syt-t1vtP8_cNEEmcRn1=s680-w680-h510"
    },
    {
      title: "Fusion Creations",
      description: "Where Indian flavors meet global cuisine",
      image: "https://lh3.googleusercontent.com/p/AF1QipPs1ZAztgsIM0txcwPGQUMqfWemLZShrUhJhzUC=s680-w680-h510"
    }
  ],
  gallery: [
    {
      image: "https://starshinebrands.com/wp-content/uploads/2024/04/DSC04232-scaled-1-768x512.jpg",
      caption: "Main Dining Area"
    },
    {
      image: "https://starshinebrands.com/wp-content/uploads/2024/04/DSC04290-scaled-1-768x512.jpg",
      caption: "Live Kitchen Theatre"
    },
    {
      image: "https://starshinebrands.com/wp-content/uploads/2024/04/DJI_0217-Edit-768x512.jpg",
      caption: "Private Dining Room"
    },
    {
      image: "https://starshinebrands.com/wp-content/uploads/2024/04/DSC04307-scaled-1-768x512.jpg",
      caption: "Wine Cellar"
    },
    {
      image: "https://starshinebrands.com/wp-content/uploads/2024/07/ivoryy-2-768x512.png",
      caption: "Outdoor Terrace"
    },
    {
      image: "https://starshinebrands.com/wp-content/uploads/2024/04/DJI_0243-Edit-scaled-1-768x605.jpg",
      caption: "Chef's Table"
    }
  ]
};

export default function IvoryPage() {
  return <BrandTemplate {...ivoryData} />;
} 