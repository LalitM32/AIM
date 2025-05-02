import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Tag, ExternalLink, Star, Video, BookOpen, Bookmark, Users, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UpcomingEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  location: string;
  isOnline: boolean;
  type: 'Workshop' | 'Bootcamp' | 'Webinar' | 'Hackathon' | 'Scholarship' | 'AMA';
  tags: string[];
  image: string;
  isFeatured: boolean;
  registrationLink: string;
}

const eventTypes = {
  Workshop: { icon: BookOpen, color: 'bg-blue-400/20 text-blue-400' },
  Bootcamp: { icon: Users, color: 'bg-green-400/20 text-green-400' },
  Webinar: { icon: Video, color: 'bg-purple-400/20 text-purple-400' },
  Hackathon: { icon: Cpu, color: 'bg-orange-400/20 text-orange-400' },
  Scholarship: { icon: Bookmark, color: 'bg-yellow-400/20 text-yellow-400' },
  AMA: { icon: Star, color: 'bg-pink-400/20 text-pink-400' },
};

const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'ai-workshop-1',
    name: "Introduction to AI Development",
    date: "2023-07-15",
    time: "10:00 AM - 2:00 PM",
    description: "Dive into the fundamentals of AI model development and learn how to create your first machine learning model.",
    location: "AIM Innovation Hub, Delhi",
    isOnline: false,
    type: "Workshop",
    tags: ["Beginner AI", "ML Models"],
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFeatured: true,
    registrationLink: "#register"
  },
  {
    id: 'llm-bootcamp',
    name: "LLM Engineering Bootcamp",
    date: "2023-07-22",
    time: "9:00 AM - 5:00 PM",
    description: "An intensive 2-day bootcamp on large language models, fine-tuning, and responsible AI development.",
    location: "Online",
    isOnline: true,
    type: "Bootcamp",
    tags: ["LLM", "Advanced"],
    image: "https://images.unsplash.com/photo-1591808216268-ce0b98c42960?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFeatured: true,
    registrationLink: "#register"
  },
  {
    id: 'ai-ethics',
    name: "AI Ethics Roundtable",
    date: "2023-07-28",
    time: "5:00 PM - 7:00 PM",
    description: "Join us for a discussion on ethical considerations in AI development and deployment.",
    location: "Online",
    isOnline: true,
    type: "Webinar",
    tags: ["Ethics", "Responsible AI"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFeatured: false,
    registrationLink: "#register"
  },
  {
    id: 'build-ai-agent',
    name: "Build Your First AI Agent",
    date: "2023-08-05",
    time: "11:00 AM - 3:00 PM",
    description: "Learn how to build and deploy your own AI assistant using LangChain and OpenAI.",
    location: "AIM Innovation Hub, Bangalore",
    isOnline: false,
    type: "Workshop",
    tags: ["Agents", "Intermediate"],
    image: "https://images.unsplash.com/photo-1550432163-9cb326104944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFeatured: false,
    registrationLink: "#register"
  },
  {
    id: 'cv-hackathon',
    name: "Computer Vision Hackathon",
    date: "2023-08-12",
    time: "10:00 AM - 8:00 PM",
    description: "Put your computer vision skills to the test in this day-long hackathon with exciting prizes.",
    location: "AIM Innovation Hub, Mumbai",
    isOnline: false,
    type: "Hackathon",
    tags: ["Computer Vision", "Competition"],
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFeatured: false,
    registrationLink: "#register"
  },
  {
    id: 'ai-scholarships',
    name: "AI for All Scholarship Awards",
    date: "2023-08-18",
    time: "6:00 PM - 8:00 PM",
    description: "Join us as we award scholarships to promising students embarking on AI education journeys.",
    location: "Grand Ballroom, Hyderabad",
    isOnline: false,
    type: "Scholarship",
    tags: ["Scholarship", "Awards"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFeatured: false,
    registrationLink: "#register"
  },
  {
    id: 'ama-industry',
    name: "AMA with Industry Leaders",
    date: "2023-08-25",
    time: "7:00 PM - 9:00 PM",
    description: "Ask Me Anything session with top AI researchers and industry professionals.",
    location: "Online",
    isOnline: true,
    type: "AMA",
    tags: ["Career", "Industry Insights"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFeatured: false,
    registrationLink: "#register"
  }
];

// Helper function to calculate days remaining
const getDaysRemaining = (dateString: string) => {
  const eventDate = new Date(dateString);
  const today = new Date();
  const diffTime = eventDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default function UpcomingEventsPage() {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    university: ''
  });
  const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEvents = selectedType === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedType);

  const featuredEvents = upcomingEvents.filter(event => event.isFeatured);
  const nextFeaturedEvent = featuredEvents.length > 0 ? featuredEvents[0] : null;

  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
  };

  const handleOpenModal = (event: UpcomingEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', { event: selectedEvent?.name, ...formData });
    // Here you would typically send the data to a server
    alert('Registration successful! Check your email for confirmation.');
    handleCloseModal();
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-deep-black" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-playfair text-5xl md:text-7xl mb-6 animate-fade-up">
            Upcoming Events
          </h1>
          <p className="text-xl text-cream/80 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            We give back 20% of our profits to empower the next generation of AI builders and learners
          </p>
          <div className="w-24 h-0.5 bg-cream/20 animate-scale-in" style={{ animationDelay: '400ms' }} />
        </div>
      </div>

      {/* Featured Event Spotlight */}
      {nextFeaturedEvent && (
        <section className="py-16 bg-deep-black/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-playfair text-3xl mb-8">Featured Event</h2>
              <div className="relative overflow-hidden rounded-xl h-[500px] group">
                <div className="absolute inset-0">
                  <img 
                    src={nextFeaturedEvent.image}
                    alt={nextFeaturedEvent.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/70 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-cream/10 backdrop-blur-sm border border-cream/20">
                      Featured
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${eventTypes[nextFeaturedEvent.type].color} backdrop-blur-sm`}>
                      {nextFeaturedEvent.type}
                    </span>
                  </div>
                  <h3 className="font-playfair text-4xl md:text-5xl mb-4">{nextFeaturedEvent.name}</h3>
                  <p className="text-cream/70 text-lg mb-6 max-w-3xl">{nextFeaturedEvent.description}</p>
                  <div className="flex flex-wrap gap-6 mb-8 text-cream/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{formatDate(nextFeaturedEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{nextFeaturedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{nextFeaturedEvent.location}</span>
                    </div>
                  </div>
                  
                  {/* Countdown Timer */}
                  <div className="mb-8">
                    <div className="inline-block px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-lg border border-cream/20">
                      <div className="text-sm text-cream/70 mb-1">Starting in</div>
                      <div className="font-playfair text-3xl">
                        {getDaysRemaining(nextFeaturedEvent.date)} days
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleOpenModal(nextFeaturedEvent)}
                    className="w-full sm:w-auto px-8 py-3 bg-cream text-deep-black font-medium rounded-lg hover:bg-cream/90 transition-colors focus:outline-none focus:ring-2 focus:ring-cream/50 focus:ring-offset-2 focus:ring-offset-deep-black"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Event Type Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-4">
              <button
                onClick={() => handleTypeFilter('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === 'All' 
                    ? 'bg-cream text-deep-black' 
                    : 'bg-cream/10 text-cream hover:bg-cream/20'
                }`}
              >
                All Events
              </button>
              {Object.keys(eventTypes).map(type => (
                <button
                  key={type}
                  onClick={() => handleTypeFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                    selectedType === type 
                      ? 'bg-cream text-deep-black' 
                      : 'bg-cream/10 text-cream hover:bg-cream/20'
                  }`}
                >
                  {React.createElement((eventTypes as any)[type].icon, { className: 'w-4 h-4' })}
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className="group relative overflow-hidden bg-deep-black/50 rounded-lg hover:bg-deep-black/70 transition-all duration-500 animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${eventTypes[event.type].color} backdrop-blur-sm`}>
                        {event.type}
                      </span>
                      {event.isOnline && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-400/20 text-blue-400 backdrop-blur-sm">
                          Online
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-playfair text-xl mb-2 group-hover:text-cream transition-colors line-clamp-2">
                          {event.name}
                        </h3>
                        <div className="flex items-center gap-2 text-cream/60 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-cream/60">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate max-w-[200px]">{event.location}</span>
                        </div>
                      </div>
                      <div className="bg-cream/10 rounded-full h-12 w-12 flex items-center justify-center group-hover:bg-cream/20 transition-colors">
                        <Calendar className="w-6 h-6 text-cream" />
                      </div>
                    </div>
                    <p className="text-cream/60 mb-6 line-clamp-3">{event.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-cream/5 text-cream/70 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => handleOpenModal(event)}
                      className="w-full py-2 bg-cream/10 text-cream border border-cream/20 rounded-lg hover:bg-cream/20 transition-colors group-hover:bg-cream group-hover:text-deep-black"
                    >
                      Register Now
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-cream/20 group-hover:bg-cream/40 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Highlights Section */}
      <section className="py-20 bg-deep-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl mb-2">Past Highlights</h2>
            <p className="text-cream/60 mb-12">Memorable moments from our previous events</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-lg aspect-square relative group">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="AI Hackathon Winners"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-sm text-cream">AI Hackathon 2023 Winners</p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg aspect-square relative group">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Student Workshop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-sm text-cream">LLM Workshop for Students</p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg aspect-square relative group">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Scholarship Ceremony"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-sm text-cream">Spring 2023 Scholarship Awards</p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg aspect-square relative group">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Guest Lecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-sm text-cream">Industry Leader AMA Session</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-cream/70 italic mb-4">"The scholarship from AIM completely changed my career trajectory. I'm now working as an AI engineer at a top tech company."</p>
              <p className="text-cream/60">— Priya S., AIM Scholarship Recipient 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do This Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl mb-6">Why We Give Back 20%</h2>
            <div className="w-20 h-0.5 bg-cream/20 mx-auto mb-8" />
            <p className="text-xl text-cream/80 mb-8">
              At AIM, we believe in building the future of AI through education and opportunity. That's why we commit 20% of our profits to support students and early-career professionals through workshops, scholarships, and hands-on learning experiences.
            </p>
            <div className="bg-cream/5 rounded-lg p-8 border border-cream/10">
              <p className="text-2xl font-playfair mb-4">$185,000+</p>
              <p className="text-cream/70">Total amount reinvested in AI education initiatives in 2023</p>
            </div>
            <div className="mt-8">
              <Link to="/impact" className="inline-flex items-center gap-2 px-6 py-3 bg-cream text-deep-black font-medium rounded-lg hover:bg-cream/90 transition-colors">
                See Our Impact
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-deep-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-deep-black/95 border border-cream/20 rounded-xl max-w-md w-full p-6 animate-scale-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-playfair text-xl">Register for Event</h3>
              <button onClick={handleCloseModal} className="text-cream/60 hover:text-cream">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <h4 className="font-medium mb-1">{selectedEvent.name}</h4>
              <div className="flex items-center gap-2 text-cream/60 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(selectedEvent.date)}</span>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-cream/70 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-deep-black border border-cream/20 rounded-lg focus:border-cream/50 focus:outline-none text-cream"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-cream/70 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-deep-black border border-cream/20 rounded-lg focus:border-cream/50 focus:outline-none text-cream"
                  />
                </div>
                <div>
                  <label htmlFor="linkedin" className="block text-sm text-cream/70 mb-1">LinkedIn (optional)</label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-deep-black border border-cream/20 rounded-lg focus:border-cream/50 focus:outline-none text-cream"
                  />
                </div>
                <div>
                  <label htmlFor="university" className="block text-sm text-cream/70 mb-1">University/Company</label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-deep-black border border-cream/20 rounded-lg focus:border-cream/50 focus:outline-none text-cream"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-cream text-deep-black font-medium rounded-lg hover:bg-cream/90 transition-colors"
              >
                Register & Send Calendar Invite
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 