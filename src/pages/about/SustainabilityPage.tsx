import React from 'react';
import { Leaf, Recycle, Heart, BarChart3 } from 'lucide-react';

interface Initiative {
  title: string;
  description: string;
  icon: React.ElementType;
  stats: string;
}

const initiatives: Initiative[] = [
  {
    title: "Empowering the Future",
    description: "We reinvest 20% of our profits directly into students pursuing AI and development, enabling them to build the future of technology in India.",
    icon: Recycle,
    stats: "Fueling tomorrow’s leaders through education and opportunity."
  },
  {
    title: "Ethical Innovation",
    description: "We strive for responsible innovation — blending cutting-edge tech with ethical and eco-conscious practices across all operations.",
    icon: Leaf,
    stats: "Building smarter, greener solutions that respect the planet."
  },
  {
    title: "Local Collaboration",
    description: "We partner with Indian developers, educators, and startups to boost homegrown talent and accelerate India’s digital transformation.",
    icon: Heart,
    stats: "Strengthening communities through local opportunities."
  },
  {
    title: "Eco-Driven Systems",
    description: "We integrate energy-efficient technologies and reduce digital waste to make our operations lean and clean.",
    icon: BarChart3,
    stats: "Driving progress without leaving a footprint."
  }
];

export default function SustainabilityPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-deep-black">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <Leaf 
                key={i}
                className="absolute text-cream/10 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${Math.random() * 40 + 20}px`,
                  height: `${Math.random() * 40 + 20}px`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <Leaf className="w-12 h-12 text-cream/80" />
            <h1 className="font-playfair text-5xl md:text-7xl">Sustainability</h1>
          </div>
          <p className="text-xl text-cream/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
            Our commitment to a better tomorrow
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-playfair text-4xl mb-6">Our Commitment</h2>
            <p className="text-cream/80 text-xl leading-relaxed">
             We believe in purposeful innovation that goes beyond business — one that empowers young minds, nurtures sustainability, and builds a stronger future for India.
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <div 
                  key={initiative.title}
                  className="group bg-deep-black/30 rounded-xl p-8 hover:bg-deep-black/50 transition-colors duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-lg bg-cream/5 group-hover:bg-cream/10 transition-colors">
                      <initiative.icon className="w-8 h-8 text-cream/80" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl mb-3">{initiative.title}</h3>
                      <p className="text-cream/60 leading-relaxed mb-4">
                        {initiative.description}
                      </p>
                      <div className="inline-block px-4 py-2 bg-cream/10 rounded-full text-sm">
                        {initiative.stats}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-deep-black/30">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-playfair text-4xl text-center mb-12">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="space-y-2">
          <div className="font-playfair text-4xl">Education First</div>
          <div className="text-cream/60">Using local ingredients to reduce our footprint.</div>
        </div>
        <div className="space-y-2">
          <div className="font-playfair text-4xl">Sustainable Growth</div>
          <div className="text-cream/60">Developing tech with long-term environmental awareness.</div>
        </div>
        <div className="space-y-2">
          <div className="font-playfair text-4xl">Local Empowerment</div>
          <div className="text-cream/60">Creating jobs, mentorships, and opportunities at the grassroots.</div>
        </div>
        <div className="space-y-2">
          <div className="font-playfair text-4xl">Responsible Tech</div>
          <div className="text-cream/60">Pioneering mindful and minimal-impact digital systems.</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Future Commitments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl text-center mb-12">Future Commitments</h2>
            <div className="space-y-8">
              <div className="bg-deep-black/20 rounded-lg p-8 hover:bg-deep-black/30 transition-colors">
                <h3 className="font-playfair text-2xl mb-4">Expand AI Learning Grants</h3>
                <p className="text-cream/80">
                  Funding 10,000 students by 2027 through our impact programs
                </p>
              </div>
              <div className="bg-deep-black/20 rounded-lg p-8 hover:bg-deep-black/30 transition-colors">
                <h3 className="font-playfair text-2xl mb-4">Carbon-Aware Development</h3>
                <p className="text-cream/80">
                 Integrating carbon accounting and greener cloud services.
                </p>
              </div>
              <div className="bg-deep-black/20 rounded-lg p-8 hover:bg-deep-black/30 transition-colors">
                <h3 className="font-playfair text-2xl mb-4">Digital Skill Upliftment</h3>
                <p className="text-cream/80">
                 Launching nationwide workshops and mentorships for rural youth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 