import React, { useState } from 'react';
import { Star, Calendar, MapPin, Quote, User, ThumbsUp, MessageSquare, Heart, X, Send, Code, Lightbulb, Award } from 'lucide-react';

interface Testimonial {
  name: string;
  image?: string;
  avatar?: string;
  date: string;
  location: string;
  quote: string;
  rating: number;
  isVerified?: boolean;
  organization?: string;
  gallery?: string[];
  category: 'ai-solutions' | 'education' | 'consulting' | 'research';
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    date: "February 2024",
    location: "Delhi",
    quote: "The custom AI solution developed for our supply chain has revolutionized our operations. We've seen a 35% increase in efficiency and significant cost reductions within just three months of implementation. The team's expertise and support throughout the process was exceptional.",
    rating: 5,
    isVerified: true,
    organization: "TechForward Solutions",
    category: 'ai-solutions',
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ]
  },
  {
    name: "Arjun Kapoor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    date: "January 2024",
    location: "Mumbai",
    quote: "The AI workshop series completely transformed how our development team approaches machine learning problems. The hands-on training and real-world examples made complex concepts accessible to everyone, regardless of their previous AI experience. Our team is now implementing what they learned with impressive results.",
    rating: 5,
    isVerified: true,
    organization: "InnovateTech Enterprises",
    category: 'education',
    gallery: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ]
  },
  {
    name: "Ritu and Vikram Mehta",
    avatar: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    date: "December 2023",
    location: "Goa",
    quote: "As part of a nonprofit focusing on educational access, the scholarship program has been life-changing for our students. Not only did they receive financial support, but the mentorship and guidance provided gave them confidence to pursue careers in AI. The impact of this initiative will resonate for generations.",
    rating: 5,
    isVerified: true,
    organization: "Bright Futures Foundation",
    category: 'education',
    gallery: [
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ]
  },
  {
    name: "Sanjay Malhotra",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    date: "November 2023",
    location: "Delhi",
    quote: "The AI ethics consultation provided invaluable insights as we developed our automated decision systems. The team's expertise in both technical implementation and ethical considerations helped us build a solution that is not only powerful but also fair and transparent. Their guidance has become a cornerstone of our AI governance framework.",
    rating: 5,
    isVerified: true,
    category: 'consulting'
  },
  {
    name: "Ananya Desai",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    date: "October 2023",
    location: "Bangalore",
    quote: "The computer vision system implemented in our manufacturing line has decreased defect rates by 63% and increased production throughput. The team took the time to understand our specific challenges and developed a solution tailored to our exact needs. Their ongoing support has been outstanding.",
    rating: 5,
    isVerified: true,
    organization: "Precision Manufacturing Ltd",
    category: 'ai-solutions'
  },
  {
    name: "Raj Singh",
    avatar: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    date: "September 2023",
    location: "Mumbai",
    quote: "Our collaboration on a research project exploring explainable AI has led to two published papers and a breakthrough in model interpretation. The research team's expertise and innovative approaches pushed our understanding far beyond what we initially thought possible. This partnership has been transformative for our R&D division.",
    rating: 5,
    isVerified: true,
    organization: "FutureTech Research Institute",
    category: 'research',
    gallery: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ]
  },
  {
    name: "Neha Patel",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    date: "August 2023",
    location: "Hyderabad",
    quote: "The AI strategy consulting completely transformed our approach to digital transformation. Rather than piecemeal implementation, we now have a comprehensive roadmap that aligns our AI initiatives with business objectives. The ROI analysis and implementation framework provided clear direction for our executive team.",
    rating: 5,
    isVerified: true,
    organization: "Global Finance Solutions",
    category: 'consulting'
  },
  {
    name: "Karan Mathur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    date: "July 2023",
    location: "Delhi",
    quote: "As a researcher in natural language processing, the collaborative project we undertook pushed the boundaries of what's possible with generative AI systems. The novel approaches and rigorous methodology led to significant advances that have been recognized by our peers. I couldn't ask for better research partners.",
    rating: 5,
    isVerified: true,
    category: 'research'
  },
];

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai-solutions' | 'education' | 'consulting' | 'research'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    category: 'ai-solutions',
    rating: 5,
    testimonial: '',
  });
  
  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);
    
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitted testimonial:', formData);
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      category: 'ai-solutions',
      rating: 5,
      testimonial: '',
    });
    // Show success message (in a real app)
  };
    
  return (
    <div className="pt-20 bg-deep-black text-cream">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-deep-black">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <Quote 
                key={i}
                className="absolute text-cream/10 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${Math.random() * 40 + 20}px`,
                  height: `${Math.random() * 40 + 20}px`,
                  transform: `rotate(${Math.random() * 40 - 20}deg)`
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <Star className="w-12 h-12 text-cream/80" />
            <h1 className="font-playfair text-5xl md:text-7xl">Client Testimonials</h1>
            <Star className="w-12 h-12 text-cream/80" />
          </div>
          <p className="text-xl text-cream/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
            Success stories from organizations and individuals using our AI solutions
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-10 bg-deep-black/80 backdrop-blur-sm border-b border-cream/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-2 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategory === 'all' 
                  ? 'bg-cream text-deep-black' 
                  : 'bg-cream/10 text-cream hover:bg-cream/20'
              }`}
            >
              All Experiences
            </button>
            <button
              onClick={() => setSelectedCategory('ai-solutions')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                selectedCategory === 'ai-solutions' 
                  ? 'bg-cream text-deep-black' 
                  : 'bg-cream/10 text-cream hover:bg-cream/20'
              }`}
            >
              <Code className="w-3 h-3" />
              AI Solutions
            </button>
            <button
              onClick={() => setSelectedCategory('education')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                selectedCategory === 'education' 
                  ? 'bg-cream text-deep-black' 
                  : 'bg-cream/10 text-cream hover:bg-cream/20'
              }`}
            >
              <Lightbulb className="w-3 h-3" />
              Education
            </button>
            <button
              onClick={() => setSelectedCategory('consulting')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                selectedCategory === 'consulting' 
                  ? 'bg-cream text-deep-black' 
                  : 'bg-cream/10 text-cream hover:bg-cream/20'
              }`}
            >
              <MessageSquare className="w-3 h-3" />
              Consulting
            </button>
            <button
              onClick={() => setSelectedCategory('research')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                selectedCategory === 'research' 
                  ? 'bg-cream text-deep-black' 
                  : 'bg-cream/10 text-cream hover:bg-cream/20'
              }`}
            >
              <Award className="w-3 h-3" />
              Research
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredTestimonials.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-cream/60">No testimonials found in this category.</p>
              </div>
            ) : (
              filteredTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className="mb-24 last:mb-0 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image}
                            alt={`${testimonial.name}'s experience`}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-cream/5 flex items-center justify-center">
                            <Quote className="w-20 h-20 text-cream/20" />
                          </div>
                        )}
                        {testimonial.organization && (
                          <div className="absolute top-4 left-4 px-3 py-1 bg-cream/10 backdrop-blur-sm rounded-full text-xs">
                            {testimonial.organization}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-4">
                        {testimonial.avatar ? (
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-cream/20"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-cream/10 flex items-center justify-center">
                            <User className="w-8 h-8 text-cream/60" />
                          </div>
                        )}
                        <div>
                          <h2 className="font-playfair text-2xl flex items-center gap-2">
                            {testimonial.name}
                            {testimonial.isVerified && (
                              <span className="w-5 h-5 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-xs" title="Verified Client">✓</span>
                            )}
                          </h2>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400' : 'text-cream/20'}`} 
                                fill={i < testimonial.rating ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-8 text-cream/60 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{testimonial.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>

                      <blockquote className="text-xl text-cream/80 italic border-l-2 border-cream/20 pl-6">
                        "{testimonial.quote}"
                      </blockquote>

                      {testimonial.gallery && testimonial.gallery.length > 0 && (
                        <div className="grid grid-cols-3 gap-4 pt-4">
                          {testimonial.gallery.map((image, i) => (
                            <div 
                              key={i}
                              className="relative aspect-square overflow-hidden rounded-lg"
                            >
                              <img 
                                src={image}
                                alt={`${testimonial.name}'s project - photo ${i + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cream/5 border-t border-cream/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl mb-4">Share Your AI Success Story</h2>
          <p className="text-cream/70 max-w-2xl mx-auto mb-8">
            We'd love to hear about your experience with our AI solutions and services. Your feedback helps us continue to innovate and better serve our clients.
          </p>
          <button 
            className="px-8 py-3 bg-cream text-deep-black font-medium rounded-lg hover:bg-cream/90 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            Leave a Testimonial
          </button>
        </div>
      </section>

      {/* Testimonial Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-deep-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-deep-black border border-cream/20 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-cream/10 flex items-center justify-between">
              <h3 className="font-playfair text-2xl">Share Your Experience</h3>
              <button 
                className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-cream/80 mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-cream/5 border border-cream/20 rounded-lg px-4 py-2 text-cream focus:outline-none focus:ring-2 focus:ring-cream/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-cream/80 mb-2 text-sm">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-cream/5 border border-cream/20 rounded-lg px-4 py-2 text-cream focus:outline-none focus:ring-2 focus:ring-cream/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-cream/80 mb-2 text-sm">Organization (Optional)</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full bg-cream/5 border border-cream/20 rounded-lg px-4 py-2 text-cream focus:outline-none focus:ring-2 focus:ring-cream/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-cream/80 mb-2 text-sm">Service Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-cream/5 border border-cream/20 rounded-lg px-4 py-2 text-cream focus:outline-none focus:ring-2 focus:ring-cream/30"
                  >
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="education">Education</option>
                    <option value="consulting">Consulting</option>
                    <option value="research">Research</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-cream/80 mb-2 text-sm">Your Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`w-6 h-6 ${star <= formData.rating ? 'text-amber-400' : 'text-cream/20'}`}
                          fill={star <= formData.rating ? 'currentColor' : 'none'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="testimonial" className="block text-cream/80 mb-2 text-sm">Your Testimonial</label>
                  <textarea
                    id="testimonial"
                    name="testimonial"
                    value={formData.testimonial}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-cream/5 border border-cream/20 rounded-lg px-4 py-2 text-cream focus:outline-none focus:ring-2 focus:ring-cream/30 resize-none"
                    placeholder="Share your experience with our AI services..."
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 bg-transparent border border-cream/20 rounded-lg text-cream/80 hover:bg-cream/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-cream text-deep-black rounded-lg font-medium hover:bg-cream/90 transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
} 