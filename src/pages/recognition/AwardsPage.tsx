import React, { useState, useRef, useEffect } from 'react';
import { Users, Star, Building, Briefcase, ShoppingBag, Utensils, Filter, Search, ArrowRight } from 'lucide-react';

interface Client {
  year: string;
  name: string;
  industry: string;
  project: string;
  image: string;
  category: 'corporate' | 'restaurant' | 'retail';
  testimonial?: string;
  contactPerson?: string;
  logo?: string;
}

const clients: Client[] = [
  {
    year: "2024",
    name: "Luxe Hospitality Group",
    industry: "Fine Dining",
    project: "Complete brand redesign and digital transformation for their flagship restaurant chain",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "restaurant",
    testimonial: "Working with your team transformed our digital presence and helped us connect with a new generation of diners. The attention to detail was exceptional.",
    contactPerson: "Emma Richards, Marketing Director",
    logo: "https://images.unsplash.com/photo-1608376126787-ab68e91df55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2OTQxMjM2NTY&ixlib=rb-4.0.3&q=80&w=80"
  },
  {
    year: "2023",
    name: "Evergreen Enterprises",
    industry: "Corporate Services",
    project: "Development of integrated business platform with custom CRM and client portal",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "corporate",
    testimonial: "The platform revolutionized how we interact with clients and manage our internal processes. Efficiency increased by 43% in the first quarter alone.",
    contactPerson: "Michael Chen, CTO",
    logo: "https://images.unsplash.com/photo-1622632169740-85c306c57dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2OTQxMjM3MDY&ixlib=rb-4.0.3&q=80&w=80"
  },
  {
    year: "2023",
    name: "Modern Boutique Collection",
    industry: "Retail",
    project: "E-commerce platform with integrated inventory management and analytics dashboard",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "retail",
    testimonial: "Our online sales increased by 78% after the launch. The inventory management system has saved countless hours of manual work for our team.",
    contactPerson: "Sophia Lee, Founder",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2OTQxMjM3ODA&ixlib=rb-4.0.3&q=80&w=80"
  },
  {
    year: "2022",
    name: "Fusion Restaurant Group",
    industry: "Hospitality",
    project: "Brand identity development and interior design consultation for new restaurant launches",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "restaurant",
    testimonial: "The branding and design concepts perfectly captured our vision while bringing fresh ideas we hadn't considered. Our customers rave about the experience.",
    contactPerson: "James Nguyen, Creative Director",
    logo: "https://images.unsplash.com/photo-1603993097397-89c963e325c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2OTQxMjM4MDA&ixlib=rb-4.0.3&q=80&w=80"
  },
  {
    year: "2022",
    name: "TechSolutions Inc.",
    industry: "Technology",
    project: "Complete corporate website overhaul with focus on UX design and lead generation",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "corporate",
    testimonial: "Our lead generation increased by 156% within three months of launch. The UX improvements have dramatically reduced our bounce rate.",
    contactPerson: "Alexandra Davis, VP of Marketing",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2OTQxMjM4MjA&ixlib=rb-4.0.3&q=80&w=80"
  },
  {
    year: "2021",
    name: "Urban Style Collective",
    industry: "Fashion Retail",
    project: "Mobile application development with AR try-on features and loyalty program integration",
    image: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "retail",
    testimonial: "The AR try-on feature transformed our business model. Customer engagement is up 200% and return rates down 45%. A game-changer.",
    contactPerson: "Ryan Thompson, Digital Innovation Lead",
    logo: "https://images.unsplash.com/photo-1587377838846-9fc1272671f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2OTQxMjM4NDI&ixlib=rb-4.0.3&q=80&w=80"
  },
  {
    year: "2021",
    name: "Heritage Hotels",
    industry: "Luxury Hospitality",
    project: "Complete digital rebrand and booking system implementation across multiple properties",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "restaurant",
    testimonial: "The booking system integration has streamlined our operations and significantly improved the guest experience from the first touchpoint.",
    contactPerson: "Thomas Wilson, Head of Operations",
    logo: "https://images.unsplash.com/photo-1658255558877-514677775183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2OTQxMjM4Njg&ixlib=rb-4.0.3&q=80&w=80"
  }
];

const getCategoryIcon = (category: Client['category']) => {
  switch (category) {
    case 'corporate': return <Briefcase className="w-5 h-5" />;
    case 'retail': return <ShoppingBag className="w-5 h-5" />;
    case 'restaurant': return <Utensils className="w-5 h-5" />;
    default: return <Star className="w-5 h-5" />;
  }
};

export default function ClientsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Client['category'] | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (category: Client['category'] | 'all') => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsAnimating(false);
    }, 300);
  };

  const filteredClients = clients.filter(client => {
    const matchesCategory = selectedCategory === 'all' || client.category === selectedCategory;
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          client.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          client.project.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
    };
  }, [filteredClients]);

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
  };

  const handleCloseDetails = () => {
    setSelectedClient(null);
  };

  return (
    <div className="pt-20 bg-deep-black text-cream">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-deep-black">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <Building 
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
            <h1 className="font-playfair text-5xl md:text-7xl">Our Clients</h1>
          </div>
          <p className="text-xl text-cream/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
            A timeline of successful partnerships and transformative projects
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <section className="py-8 bg-deep-black/90 sticky top-0 z-10 backdrop-blur-sm border-b border-cream/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-cream/60" />
              <span className="text-sm text-cream/60">Filter by category:</span>
              <div className="flex gap-2">
                <button 
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    selectedCategory === 'all' 
                      ? 'bg-cream text-deep-black font-medium' 
                      : 'bg-cream/10 hover:bg-cream/20'
                  }`}
                  onClick={() => handleCategoryChange('all')}
                >
                  All
                </button>
                <button 
                  className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${
                    selectedCategory === 'corporate' 
                      ? 'bg-cream text-deep-black font-medium' 
                      : 'bg-cream/10 hover:bg-cream/20'
                  }`}
                  onClick={() => handleCategoryChange('corporate')}
                >
                  <Briefcase className="w-3 h-3" />
                  Corporate
                </button>
                <button 
                  className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${
                    selectedCategory === 'restaurant' 
                      ? 'bg-cream text-deep-black font-medium' 
                      : 'bg-cream/10 hover:bg-cream/20'
                  }`}
                  onClick={() => handleCategoryChange('restaurant')}
                >
                  <Utensils className="w-3 h-3" />
                  Hospitality
                </button>
                <button 
                  className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${
                    selectedCategory === 'retail' 
                      ? 'bg-cream text-deep-black font-medium' 
                      : 'bg-cream/10 hover:bg-cream/20'
                  }`}
                  onClick={() => handleCategoryChange('retail')}
                >
                  <ShoppingBag className="w-3 h-3" />
                  Retail
                </button>
              </div>
            </div>
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search clients..."
                className="pl-10 pr-4 py-2 rounded-full bg-cream/5 border border-cream/10 focus:border-cream/30 focus:outline-none w-full md:w-64 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className={`space-y-16 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              ref={timelineRef}
            >
              {filteredClients.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-xl text-cream/60">No clients match your search criteria.</p>
                  <button 
                    className="mt-4 px-6 py-2 bg-cream/10 hover:bg-cream/20 rounded-full transition-colors text-sm"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchTerm('');
                    }}
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                filteredClients.map((client, index) => (
                  <div 
                    key={client.name}
                    className="group timeline-item opacity-0 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center cursor-pointer"
                    onClick={() => handleClientClick(client)}
                  >
                    {/* Connecting Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-cream/10 -ml-8 hidden lg:block" />
                    
                    {/* Year Marker */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-10 hidden lg:block">
                      <div className="w-4 h-4 rounded-full bg-cream/20 group-hover:bg-cream/40 transition-colors" />
                    </div>

                    <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cream/10 text-sm">
                        {client.year}
                        {client.logo && (
                          <img 
                            src={client.logo} 
                            alt={`${client.name} logo`} 
                            className="w-5 h-5 rounded-full ml-2 object-cover"
                          />
                        )}
                      </div>
                      <h2 className="font-playfair text-3xl group-hover:text-cream transition-colors">{client.name}</h2>
                      <div className="flex items-center gap-2 text-cream/60">
                        {getCategoryIcon(client.category)}
                        <span>{client.industry}</span>
                      </div>
                      <p className="text-cream/80 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {client.project}
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm text-cream/60 group-hover:text-cream transition-colors">
                        <span>View details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className={`relative aspect-[4/3] overflow-hidden rounded-xl ${
                      index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      <img 
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Client Details Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-deep-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-deep-black border border-cream/10 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-up">
            <div className="relative h-64 overflow-hidden rounded-t-xl">
              <img 
                src={selectedClient.image} 
                alt={selectedClient.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />
              <button 
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-deep-black/50 hover:bg-deep-black text-cream/80 hover:text-cream"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseDetails();
                }}
              >
                ×
              </button>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-4">
                  {selectedClient.logo && (
                    <img 
                      src={selectedClient.logo} 
                      alt={`${selectedClient.name} logo`} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-cream/20"
                    />
                  )}
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-cream/10 text-xs mb-2">
                      {selectedClient.year}
                    </div>
                    <h2 className="font-playfair text-3xl">{selectedClient.name}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-cream/5 flex items-center gap-2">
                  {getCategoryIcon(selectedClient.category)}
                  <span>{selectedClient.industry}</span>
                </div>
                {selectedClient.contactPerson && (
                  <div className="px-4 py-2 rounded-lg bg-cream/5 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{selectedClient.contactPerson}</span>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Project Overview</h3>
                <p className="text-cream/80 leading-relaxed">{selectedClient.project}</p>
              </div>
              
              {selectedClient.testimonial && (
                <div className="bg-cream/5 p-6 rounded-xl border-l-4 border-cream/20">
                  <blockquote className="text-cream/90 italic leading-relaxed mb-4">
                    "{selectedClient.testimonial}"
                  </blockquote>
                  <footer className="text-cream/60 text-sm">
                    — {selectedClient.contactPerson || 'Client Representative'}
                  </footer>
                </div>
              )}
              
              <div className="pt-4 border-t border-cream/10">
                <button 
                  className="px-6 py-3 rounded-full bg-cream text-deep-black font-medium hover:bg-cream/90 transition-colors"
                  onClick={handleCloseDetails}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add to your CSS (in a style tag or your global CSS) */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-scale-up {
          animation: scaleUp 0.3s ease forwards;
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
} 