import React from 'react';
import { Briefcase } from 'lucide-react';

const openPositions = [
  {
    title: 'Executive Chef',
    location: 'Delhi',
    type: 'Full-time',
    experience: '5+ years',
  },
  {
    title: 'Restaurant Manager',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    title: 'Sous Chef',
    location: 'Kanpur',
    type: 'Full-time',
    experience: '2+ years',
  },
];

export default function CareerSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-center mb-6">Join Our Team</h2>
          <p className="text-center text-cream/80 mb-12">
            We're always looking for talented individuals who share our passion for hospitality 
            and excellence. Explore our current opportunities below.
          </p>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div 
                key={`${position.title}-${position.location}`}
                className="bg-deep-black/80 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-cream/60" />
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-cream/80">
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.experience}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-cream text-deep-black font-semibold rounded hover:bg-opacity-90 transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-cream/80 mb-4">
              Don't see a position that matches your skills?
            </p>
            <button className="px-8 py-3 border-2 border-cream text-cream font-semibold rounded hover:bg-cream hover:text-deep-black transition-all">
              Send Open Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 