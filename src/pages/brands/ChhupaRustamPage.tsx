import React from 'react';
import BrandTemplate from '../../components/brands/BrandTemplate';

const chhupaRustamData = {
  name: "Chhupa Rustam",
  tagline: "A Culinary Journey Through North India",
  description: `Experience the rich flavors and vibrant spices of North India. Our dishes are crafted with traditional recipes and modern techniques, bringing you the best of Indian cuisine.`,
  coverImage: "https://lh3.googleusercontent.com/p/AF1QipNDq2qkBKJwLxEN2GHXa4wr_IzLIakMUi-SaI5G=s680-w680-h510",
  interiorImage: "https://lh3.googleusercontent.com/p/AF1QipM2kVG9N9q84QfD9CO5UIU5_DZLeaB_Gw2_l-JV=s680-w680-h510",
  cuisine: "North Indian Cuisine",
  priceRange: "₹2,200 - ₹2,400 per person",
  features: [
    "Tandoor Specialties",
    "Authentic Biryani",
    "Rich Curries",
    "Vegetarian and Non-Vegetarian Options",
    "Cultural Events and Festivals",
    "Family-Friendly Dining"
  ],
  restaurantStory: {
    establishment: `Chhupa Rustam brings the essence of North Indian cuisine to your table, celebrating the rich heritage and diverse flavors of the region.`,
    philosophy: `We believe in preserving traditional cooking methods while innovating to create a unique dining experience. Every dish is a tribute to the culinary art of North India.`,
    specialFeatures: [
      "Live Tandoor Cooking",
      "Seasonal Festivals",
      "Chef's Special Thali",
      "Cultural Dance Performances",
      "Cooking Classes"
    ],
    
    images: {
      founder: "https://lh3.googleusercontent.com/p/AF1QipPpsKsUhmQAj0mpT4Yu_Txuj5MoRF4RcOsA-ws6=s680-w680-h510",
      kitchen: "https://lh3.googleusercontent.com/p/AF1QipPVjs1g-vh8Ss9G2lrMtu3jFKbrr1knf4jW3rZQ=s680-w680-h510",
      dining: "https://lh3.googleusercontent.com/p/AF1QipPGc61vSF575GwN5cQPfqZrs2Tt2x04ck7LVGWs=s680-w680-h510"
    }
  },

  cuisineTypes: [
    {
      title: "Tandoori Classics",
      description: "Sizzling dishes from the tandoor oven",
      image: "https://lh3.googleusercontent.com/p/AF1QipPpsKsUhmQAj0mpT4Yu_Txuj5MoRF4RcOsA-ws6=s680-w680-h510"
    },
    {
      title: "Rich Curries",
      description: "Creamy and flavorful curries that warm the soul",
      image: "https://lh3.googleusercontent.com/p/AF1QipPdCDxHgPRR_j1_6gWHGtdoqkEN8XE92eaBjt71=s680-w680-h510"
    },
    {
      title: "Biryani & Rice",
      description: "Aromatic biryanis and fragrant rice dishes",
      image: "https://lh3.googleusercontent.com/p/AF1QipPHn9nxuD9C_W_CuJAfxE0sxpiX7ts3b1ngT8D2=s680-w680-h510"
    }
  ],

  gallery: [
    {
      image: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Snapinst.app_472976796_602626165589084_4087157995786133269_n_1080.jpg",
      caption: "Main Dining Space"
    },
    {
      image: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Snapinst.app_464380734_531427606490395_2827486788025830533_n_1080.jpg",
      caption: "Live Cooking Station"
    },
    {
      image: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Snapinst.app_464682346_1318947589091688_5306142250166373659_n_1080.jpg",
      caption: "Outdoor Seating"
    },
    {
      image: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-13-at-18.51.24_728dc904.jpg",
      caption: "Weekend Festival"
    },
    {
      image: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Snapinst.app_469719196_906143984976443_4721283416801035553_n_1080.jpg",
      caption: "Craft Bar"
    },
    {
      image: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Snapinst.app_465833648_1253004179366336_7553052146493794596_n_1080.jpg",
      caption: "Signature Dishes"
    }
  ],

  locations: [
    {
      city: "Goa",
      address: "Vagator, Goa 403509",
      phone: "+91 070303 63000",
      hours: "11:00 AM - 11:00 PM",
      mapLink: "https://g.co/kgs/xNePnb9"
    },

  ]
};

export default function ChhupaRustamPage() {
  return <BrandTemplate {...chhupaRustamData} />;
} 