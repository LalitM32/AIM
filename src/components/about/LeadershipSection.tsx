import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <div className="mt-24 mb-20">
      <h3 className="font-playfair text-4xl text-center mb-12">Our Leadership</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-deep-black/50 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative">
            <img 
              src="https://photodrive.starshinebrands.com/wp-content/uploads/2025/03/Ready-to-tackle-the-week-aheadinstagood-instadiaries-selflove-weekend-workhard-saturday-1.png" 
              alt="CEO" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
          </div>
          <div className="p-8">
            <h4 className="font-playfair text-2xl mb-2">Lalit Mukesh</h4>
            <p className="text-cream/60 mb-6">CEO | Founder & Strategy Lead</p>
            <p className="text-cream/80 mb-6 leading-relaxed">
              Lalit built AIM to fix what traditional agencies broke — slow delivery, bloated costs, and copy-paste thinking. With 7+ years in software, AI, and systems design, he leads AIM with one obsession: outcomes over noise. He's not here to impress — he's here to automate, simplify, and scale what works.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-cream/60 hover:text-cream transition-colors" 
                aria-label="Instagram profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-deep-black/50 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative">
            <img 
              src="https://drive.irmm.in/wp-content/uploads/2025/04/IMG_6355-rotated.jpg" 
              alt="COO" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
          </div>
          <div className="p-8">
            <h4 className="font-playfair text-2xl mb-2">Sahil Yadav</h4>
            <p className="text-cream/60 mb-6">COO | Operations & Delivery</p>
            <p className="text-cream/80 mb-6 leading-relaxed">
              Sahil runs the backend of execution. Where most teams drift, he tightens systems. Where projects lag, he builds sprints. He ensures every client experience is lean, fast, and reliable — no delays, no excuses, just momentum.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-cream/60 hover:text-cream transition-colors" 
                aria-label="Instagram profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}