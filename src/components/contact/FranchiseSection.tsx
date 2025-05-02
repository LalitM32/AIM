import React from 'react';
import { Building2, Users, Wallet, TrendingUp } from 'lucide-react';
import ContactForm from './ContactForm';

export default function FranchiseSection() {
  return (
    <section className="py-20 bg-deep-black/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-center mb-6">Franchise Opportunities</h2>
          <p className="text-center text-cream/80 mb-12">
            Join the Starshine family and be part of our growing success story. We're looking for passionate 
            entrepreneurs to expand our presence across India.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4 items-start">
              <Building2 className="w-8 h-8 text-cream/60" />
              <div>
                <h3 className="font-playfair text-xl mb-2">Proven Business Model</h3>
                <p className="text-cream/80">Benefit from our established operations and successful track record.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Users className="w-8 h-8 text-cream/60" />
              <div>
                <h3 className="font-playfair text-xl mb-2">Comprehensive Training</h3>
                <p className="text-cream/80">Full support in operations, marketing, and staff training.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Wallet className="w-8 h-8 text-cream/60" />
              <div>
                <h3 className="font-playfair text-xl mb-2">Strong ROI</h3>
                <p className="text-cream/80">Attractive returns with multiple revenue streams.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <TrendingUp className="w-8 h-8 text-cream/60" />
              <div>
                <h3 className="font-playfair text-xl mb-2">Growth Potential</h3>
                <p className="text-cream/80">Expand your portfolio with multiple locations and concepts.</p>
              </div>
            </div>
          </div>

          {/* Franchise Form */}
          <div className="bg-deep-black/80 backdrop-blur-sm rounded-lg p-8">
            <h3 className="font-playfair text-2xl mb-6 text-center">Request Franchise Information</h3>
            <ContactForm type="franchise" />
          </div>
        </div>
      </div>
    </section>
  );
} 