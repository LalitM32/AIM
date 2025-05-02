import React from 'react';

export default function HistorySection() {
  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="font-playfair text-3xl mb-8">Our History</h3>
          <p className="text-cream/80 mb-6">
            We didn't start AIM to join the noise. We started because we were tired of watching great businesses lose time, money, and momentum to bloated agencies and half-baked solutions. 
          </p>
          <p className="text-cream/80 mb-6">
            We've seen it all — overpriced dev shops delivering outdated designs, automation "experts" that complicate workflows instead of streamlining them, and AI integrations that look fancy but do nothing real.
          </p>
          <p className="text-cream/80 mb-6">
            So we built AIM to be the opposite.
          </p>
          <p className="text-cream/80 mb-6">
            No fluff. No overpromising. Just execution. We help brands automate better, build faster, and stand out in a world full of clones.
          </p>
          <p className="text-cream/80 mb-6">
            From the first cold email we wrote to the last custom GPT we deployed, everything we've done has been about making you more efficient, more premium, and more profitable.
          </p>
          <p className="text-cream/80">
            That's not marketing. That's war. And we fight it with code.
          </p>
        </div>
        <div className="relative">
          <img 
            src="https://starshinebrands.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-02-16-at-12.37.13-PM-768x756.jpeg" 
            alt="Restaurant history" 
            className="rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent rounded-lg" />
        </div>
      </div>
    </div>
  );
}