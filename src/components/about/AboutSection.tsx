import React from 'react';
import HistorySection from './HistorySection';
import LeadershipSection from './LeadershipSection';

export default function AboutSection() {
  return (
    <section className="bg-deep-black text-cream py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center mb-16">Our Story</h2>
        <HistorySection />
        <LeadershipSection />
      </div>
    </section>
  );
}