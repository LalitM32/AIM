import React from 'react';
import { Star, Target, Award, Users, History, Globe2, Leaf, ChefHat } from 'lucide-react';

const leadership = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    description: "With over 20 years of experience in luxury hospitality, Rajesh has transformed Starshine Brands into India's premier dining destination.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Amitabh Bachchan",
    role: "Brand Ambassador",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80",
    description: "Legendary actor and cultural icon, embodying the sophistication and excellence that Starshine Brands represents.",
    social: {
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "Priya Sharma",
    role: "Chief Marketing Officer & Spokesperson",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    description: "A dynamic leader who has been instrumental in building the Starshine brand and communicating our vision to the world.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const missionVision = [
  {
    icon: <Target className="w-12 h-12" />,
    title: "Our Mission",
    description: "To create extraordinary dining experiences that celebrate culinary artistry and cultural heritage while fostering meaningful connections through food."
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: "Our Vision",
    description: "To be India's most respected hospitality group, setting new standards in culinary excellence and guest experience across the nation."
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Our Values",
    points: [
      "Excellence in every detail",
      "Innovation in cuisine",
      "Sustainability in practices",
      "Respect for culture and tradition"
    ]
  }
];

const milestones = [
  {
    year: "2010",
    title: "The Beginning",
    description: "First restaurant opened in Delhi"
  },
  {
    year: "2015",
    title: "Expansion Phase",
    description: "Launched multiple brands across major cities"
  },
  {
    year: "2018",
    title: "International Recognition",
    description: "Received Michelin star for flagship restaurant"
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description: "Launched innovative dining experiences"
  },
  {
    year: "2023",
    title: "Sustainability Focus",
    description: "Implemented eco-friendly practices"
  }
];

const achievements = [
  {
    icon: <ChefHat className="w-8 h-8" />,
    count: "25+",
    label: "Master Chefs"
  },
  {
    icon: <Award className="w-8 h-8" />,
    count: "50+",
    label: "Awards Won"
  },
  {
    icon: <Users className="w-8 h-8" />,
    count: "1M+",
    label: "Happy Customers"
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    count: "12",
    label: "Cities Present"
  }
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80" 
          alt="About Starshine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-playfair text-5xl md:text-7xl mb-6">Our Story</h1>
          <p className="text-xl text-cream/80 max-w-2xl">
            Crafting culinary excellence since 2010
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-4xl mb-6">Our Journey</h2>
                <p className="text-cream/80 mb-4">
                  Founded in 2010, Starshine Brands began with a vision to redefine luxury dining in India. 
                  What started as a single restaurant in Delhi has grown into a culinary empire spanning 
                  multiple cities and concepts.
                </p>
                <p className="text-cream/80">
                  Our journey has been marked by a relentless pursuit of excellence, innovative culinary 
                  techniques, and an unwavering commitment to creating memorable dining experiences.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80" 
                  alt="Restaurant history" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-deep-black/50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-16">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div 
                key={leader.name}
                className="bg-deep-black/50 rounded-lg overflow-hidden group"
              >
                <div className="relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl mb-2">{leader.name}</h3>
                  <p className="text-cream/60 mb-4">{leader.role}</p>
                  <p className="text-cream/80 mb-4">{leader.description}</p>
                  <div className="flex gap-4">
                    {leader.social.linkedin && (
                      <a href={leader.social.linkedin} className="text-cream/60 hover:text-cream">
                        LinkedIn
                      </a>
                    )}
                    {leader.social.twitter && (
                      <a href={leader.social.twitter} className="text-cream/60 hover:text-cream">
                        Twitter
                      </a>
                    )}
                    {leader.social.instagram && (
                      <a href={leader.social.instagram} className="text-cream/60 hover:text-cream">
                        Instagram
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl text-center mb-16">Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionVision.map((item) => (
                <div 
                  key={item.title}
                  className="text-center bg-deep-black/50 p-8 rounded-lg"
                >
                  <div className="text-cream/60 mb-6 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-playfair text-2xl mb-4">{item.title}</h3>
                  {item.description ? (
                    <p className="text-cream/80">{item.description}</p>
                  ) : (
                    <ul className="text-cream/80 space-y-2">
                      {item.points?.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-deep-black/50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-16">Our Milestones</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-none">
                    <div className="w-20 h-20 bg-deep-black rounded-full flex items-center justify-center">
                      <span className="font-playfair text-xl">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-deep-black/30 p-6 rounded-lg">
                    <h3 className="font-playfair text-2xl mb-2">{milestone.title}</h3>
                    <p className="text-cream/80">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl text-center mb-16">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.label}
                  className="text-center"
                >
                  <div className="text-cream/60 mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="font-playfair text-3xl mb-2">{achievement.count}</div>
                  <div className="text-cream/80">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section id="recognition" className="py-20 bg-deep-black/50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-16">Recognition & Awards</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-deep-black/50 p-8 rounded-lg">
              <Award className="w-12 h-12 text-cream/60 mb-6" />
              <h3 className="font-playfair text-2xl mb-4">Best Fine Dining Restaurant Chain</h3>
              <p className="text-cream/80">Times Food & Nightlife Awards 2023</p>
            </div>
            <div className="bg-deep-black/50 p-8 rounded-lg">
              <Award className="w-12 h-12 text-cream/60 mb-6" />
              <h3 className="font-playfair text-2xl mb-4">Restaurant of the Year</h3>
              <p className="text-cream/80">Food Critics' Choice Awards 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <Leaf className="w-12 h-12 text-cream/60" />
              <h2 className="font-playfair text-4xl">Our Commitment to Sustainability</h2>
            </div>
            <p className="text-cream/80 mb-8">
              At Starshine Brands, we believe in responsible luxury. Our commitment to sustainability 
              extends from sourcing ingredients from local farmers to implementing eco-friendly 
              practices across our operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-deep-black/50 p-6 rounded-lg">
                <h3 className="font-playfair text-xl mb-3">Local Sourcing</h3>
                <p className="text-cream/80">Supporting local farmers and reducing carbon footprint</p>
              </div>
              <div className="bg-deep-black/50 p-6 rounded-lg">
                <h3 className="font-playfair text-xl mb-3">Waste Reduction</h3>
                <p className="text-cream/80">Implementing comprehensive recycling programs</p>
              </div>
              <div className="bg-deep-black/50 p-6 rounded-lg">
                <h3 className="font-playfair text-xl mb-3">Energy Efficiency</h3>
                <p className="text-cream/80">Using renewable energy sources where possible</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 