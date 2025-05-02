import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/about/AboutSection';
import BrandsSection from '../components/brands/BrandsSection';
import StatsSection from '../components/stats/StatsSection';
import Partners from '../components/partners/Partners';
import FeaturedOutlets from '../components/outlets/FeaturedOutlets';
import ContactSection from '../components/contact/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <BrandsSection />
      <StatsSection />
      <Partners />
      <FeaturedOutlets />
      <ContactSection />
    </>
  );
}