import React from 'react';
import { Building2, Users, Wallet, TrendingUp, CheckCircle2, MapPin } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const benefits = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Proven Business Model",
    description: "Benefit from our established operations and successful track record."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Comprehensive Training",
    description: "Full support in operations, marketing, and staff training."
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Strong ROI",
    description: "Attractive returns with multiple revenue streams."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth Potential",
    description: "Expand your portfolio with multiple locations and concepts."
  }
];

const requirements = [
  "Minimum investment of ₹50 Lakhs",
  "Space requirement: 1500-2500 sq ft",
  "Prime location in high-traffic areas",
  "Previous business experience preferred",
  "Passion for hospitality industry",
  "Commitment to maintaining brand standards"
];

const locations = [
  { city: "Delhi NCR", count: 5 },
  { city: "Mumbai", count: 3 },
  { city: "Bangalore", count: 2 },
  { city: "Hyderabad", count: 2 },
  { city: "Pune", count: 1 },
];

export default function FranchiseShowPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&q=80" 
          alt="Franchise Opportunities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-playfair text-5xl md:text-7xl mb-6">Franchise Opportunities</h1>
          <p className="text-xl text-cream/80 max-w-2xl">
            Join India's fastest-growing luxury dining brand and be part of our success story
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-16">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="bg-deep-black/50 rounded-lg p-6 text-center"
              >
                <div className="text-cream/60 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-playfair text-xl mb-3">{benefit.title}</h3>
                <p className="text-cream/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-deep-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl text-center mb-16">Franchise Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement) => (
                <div 
                  key={requirement}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-cream/60 flex-shrink-0" />
                  <span className="text-cream/80">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl text-center mb-16">Our Presence</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {locations.map((location) => (
                <div 
                  key={location.city}
                  className="bg-deep-black/50 rounded-lg p-6 text-center"
                >
                  <MapPin className="w-6 h-6 text-cream/60 mx-auto mb-3" />
                  <h3 className="font-playfair text-xl mb-2">{location.city}</h3>
                  <p className="text-cream/80">{location.count} Outlets</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-deep-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-playfair text-4xl text-center mb-6">Start Your Journey</h2>
            <p className="text-center text-cream/80 mb-12">
              Fill out the form below and our franchise development team will get in touch with you.
            </p>
            <div className="bg-deep-black/80 backdrop-blur-sm rounded-lg p-8">
              <ContactForm type="franchise" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 