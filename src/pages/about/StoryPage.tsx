import React, { useState, useEffect } from 'react';
import { History, Target, Star, Heart, Globe, ArrowRight } from 'lucide-react';

interface Value {
  title: string;
  description: string;
  icon: React.ElementType;
}

const coreValues: Value[] = [
  {
    title: "Speed Over Everything",
    description: "Momentum compounds. We move fast, ship daily, and never sit still.",
    icon: Star
  },
  {
    title: "Outcomes Over Optics",
    description: "We don’t chase vanity. We chase what works — and scale it.",
    icon: Target
  },
  {
    title: "Brutal Clarity",
    description: "No jargon, no fluff. Clear thinking wins.",
    icon: Heart
  },
  {
    title: "Build Like Owners",
    description: "Every project is personal. Because your win is our win.",
    icon: Globe
  }
];

export default function AboutAndVisionPage() {
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
        <div className="absolute inset-0 bg-deep-black">
          <div className="absolute inset-0 opacity-20">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                {i % 2 === 0 ? (
                  <History 
                    className="text-cream/10 animate-float"
                    style={{
                      width: `${Math.random() * 40 + 20}px`,
                      height: `${Math.random() * 40 + 20}px`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ) : (
                  <Target 
                    className="text-cream/10 animate-float"
                    style={{
                      width: `${Math.random() * 40 + 20}px`,
                      height: `${Math.random() * 40 + 20}px`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-0.5 bg-cream/20" />
              <History className="w-16 h-16 text-cream" />
              <div className="w-24 h-0.5 bg-cream/20" />
            </div>
          </div>
          <h1 className="font-playfair text-6xl md:text-7xl mb-6">Our Story & Vision</h1>
          <p className="text-xl md:text-2xl text-cream/80 max-w-2xl mx-auto">
            A journey of passion, innovation, and culinary excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-8">
              <h2 className="font-playfair text-3xl">The Beginning</h2>
              <p className="text-cream/80 text-lg leading-relaxed">
               Our vision isn’t to be another agency. We’re building the fastest execution layer for ambitious businesses — powered by AI, built by operators, and designed for outcomes.From AI agents to conversion-first websites, we don’t sell hours. We deliver wins.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="font-playfair text-3xl">Evolution</h2>
              <p className="text-cream/80 text-lg leading-relaxed">
               Our vision isn’t to be another agency. We’re building the fastest execution layer for ambitious businesses — powered by AI, built by operators, and designed for outcomes. From AI agents to conversion-first websites, we don’t sell hours. We deliver wins.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 relative overflow-hidden bg-deep-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-transparent via-cream/20 to-cream/40" />
            <h2 className="font-playfair text-5xl mb-8">Our Dream</h2>
            <p className="text-cream/80 text-2xl leading-relaxed font-light">
            To become the go-to execution partner for founders, CMOs, and operators who don’t have time to waste.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-4xl text-center mb-16">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={value.title}
                  className="group relative"
                >
                  <div className="bg-deep-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-deep-black/50 transition-all duration-500 border border-cream/10 hover:border-cream/20">
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-lg bg-cream/5 group-hover:bg-cream/10 transition-colors">
                        <value.icon className="w-8 h-8 text-cream" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-2xl mb-3">{value.title}</h3>
                        <p className="text-cream/60 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-32 relative overflow-hidden bg-deep-black/30">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-4xl text-center mb-16">Our Goals</h2>
            <div className="space-y-8">
              {['Build AIM as the most trusted AI-driven execution team for fast-growing businesses.', 'Deliver consistent ROI for every client — with measurable impact, not fluff.', 'Grow a high-performance team of builders, strategists, and creatives who thrive on speed and ownership.'].map((goal) => (
                <div
                  key={goal}
                  className="group"
                >
                  <div className="bg-deep-black/20 backdrop-blur-sm rounded-xl p-8 hover:bg-deep-black/30 transition-all duration-500 border border-cream/10 hover:border-cream/20">
                    <div className="flex items-center justify-between">
                      <h3 className="font-playfair text-2xl">{goal}</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-6 h-6 text-cream/60" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}