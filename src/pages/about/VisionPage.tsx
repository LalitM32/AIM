import React, { useState, useEffect } from 'react';
import { Target, Star, Heart, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Value {
  title: string;
  description: string;
  icon: React.ElementType;
}

const coreValues: Value[] = [
  {
    title: "Excellence",
    description: "Pursuing perfection in every culinary creation.",
    icon: Star
  },
  {
    title: "Innovation",
    description: "Blending tradition and ingenuity to captivate palates.",
    icon: Target
  },
  {
    title: "Hospitality",
    description: "Delivering exceptional experiences with elegance and warmth.",
    icon: Heart
  },
  {
    title: "Sustainability",
    description: "Committed to ethically sourced, environmentally mindful practices.",
    icon: Globe
  }
];

export default function VisionPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 bg-[url('/images/luxury-pattern.jpg')] bg-cover bg-center"
          style={{ y: scrollY * 0.5 }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Animated Patterns */}
        <div className="absolute inset-0 bg-deep-black/70">
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                <Target className="text-cream/10 w-12 h-12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ y: -scrollY * 0.3 }}
          >
            <motion.div 
              className="flex items-center justify-center gap-6 mb-8"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-0.5 bg-cream/20" />
              <Target className="w-16 h-16 text-cream" />
              <div className="w-24 h-0.5 bg-cream/20" />
            </motion.div>
            
            <h1 className="font-playfair text-6xl md:text-8xl mb-6">Vision & Values</h1>
            <p className="text-xl md:text-2xl text-cream/80 max-w-2xl mx-auto font-light">
              Crafting extraordinary experiences through culinary excellence
            </p>
          </motion.div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-black to-transparent" />
      </section>

      {/* Vision Section with Enhanced Design */}
      <section className="py-32 relative overflow-hidden">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center mb-32 relative">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-transparent via-cream/20 to-cream/40" />
            <h2 className="font-playfair text-5xl mb-8">Our Dream</h2>
            <p className="text-cream/80 text-2xl leading-relaxed font-light">
              Redefining gastronomy with exquisite flavors, impeccable quality, and unmatched sophistication.
            </p>
          </div>

          {/* Core Values Grid with Enhanced Animation */}
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-4xl text-center mb-16">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <motion.div 
                  key={value.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="bg-deep-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-deep-black/50 transition-all duration-500 border border-cream/10 hover:border-cream/20">
                    <div className="flex items-start gap-6">
                      <motion.div 
                        className="p-4 rounded-lg bg-cream/5 group-hover:bg-cream/10 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <value.icon className="w-8 h-8 text-cream" />
                      </motion.div>
                      <div>
                        <h3 className="font-playfair text-2xl mb-3">{value.title}</h3>
                        <p className="text-cream/60 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Goals Section with Enhanced Design */}
      <section className="py-32 relative overflow-hidden bg-deep-black/30">
        <div className="absolute inset-0 bg-[url('/patterns/luxury-pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl text-center mb-16">Our Goals</h2>
            <div className="space-y-8">
              {['Deliver Unmatched Quality', 'Innovate Gastronomic Experiences', 'Champion Sustainability'].map((goal, index) => (
                <motion.div
                  key={goal}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-deep-black/20 backdrop-blur-sm rounded-xl p-8 hover:bg-deep-black/30 transition-all duration-500 border border-cream/10 hover:border-cream/20">
                    <div className="flex items-center justify-between">
                      <h3 className="font-playfair text-2xl">{goal}</h3>
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowRight className="w-6 h-6 text-cream/60" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 