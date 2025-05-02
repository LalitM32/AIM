import React from 'react';
import { Users, Linkedin, Mail, Instagram } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sandeep Gupta",
    role: "Founder",
    image: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/sg1.png",
    bio: "",
    linkedin: "#",
    email: "rajesh@starshine.com"
  },
  {
    name: "Akshat Parihar",
    role: "Celebrity Chef",
    image: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/t2.png",
    bio: "",
    linkedin: "https://www.instagram.com/chefakshatofficial/",
    email: "priya@starshine.com"
  },
  {
    name: "Vineet Mittal",
    role: "Co- Founder",
    image: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/t3.png",
    bio: "",
    linkedin: "#",
    email: "priya@starshine.com"
  },
  {
    name: "Sarthak Gupta",
    role: "CEO & Director",
    image: "https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/t1.png",
    bio: "",
    linkedin: "#",
    email: "priya@starshine.com"
  },
];

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-deep-black">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <Users 
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
            <Users className="w-12 h-12 text-cream/80" />
            <h1 className="font-playfair text-5xl md:text-7xl">Our Team</h1>
          </div>
          <p className="text-xl text-cream/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
            Meet the visionaries behind our culinary excellence
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="group relative bg-deep-black/50 rounded-xl overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-playfair text-2xl mb-1">{member.name}</h3>
                    <p className="text-cream/60 mb-4">{member.role}</p>
                    <p className="text-cream/80 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
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