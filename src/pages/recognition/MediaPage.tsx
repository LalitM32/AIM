import React, { useState } from 'react';
import { Newspaper, Play, Download, ExternalLink, Award, Code, Sparkles, FileBadge, FileText, Video, Filter, Search } from 'lucide-react';

interface MediaItem {
  type: 'article' | 'video' | 'press-release' | 'research-paper';
  title: string;
  source: string;
  date: string;
  image: string;
  link: string;
  description: string;
  featured?: boolean;
  category?: 'ai-tech' | 'research' | 'impact' | 'education';
}

const mediaItems: MediaItem[] = [
  {
    type: 'article',
    title: "AI Initiative Commits 20% of Profits to Fund AI Education",
    source: "TechCrunch",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    link: "#",
    category: 'impact',
    featured: true,
    description: "The AI Initiative announced a landmark commitment to dedicate 20% of all profits to funding educational programs aimed at democratizing access to AI knowledge and skills..."
  },
  {
    type: 'research-paper',
    title: "Novel Approaches to Explainable AI in Healthcare Decision Systems",
    source: "AI Research Journal",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1576671414121-aa2d60f1e5b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    link: "#",
    category: 'research',
    description: "Groundbreaking research on improving transparency and interpretability in AI systems used for critical healthcare decisions, demonstrating significant improvements in physician trust and adoption..."
  },
  {
    type: 'video',
    title: "Building Ethical AI: An Interview with Our CTO",
    source: "AI Global Summit",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1562860149-691401a306f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    link: "#",
    category: 'ai-tech',
    description: "Our Chief Technology Officer discusses the importance of embedding ethical considerations into AI systems from the ground up, and shares practical approaches to responsible AI development..."
  },
  {
    type: 'article',
    title: "AI Initiative Scholarship Program Transforms Lives of 50 Students",
    source: "Education Today",
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    link: "#",
    category: 'education',
    description: "The first cohort of AI Initiative scholarship recipients has graduated, with 94% securing positions in top tech companies. The program specifically targets underrepresented communities..."
  },
  {
    type: 'press-release',
    title: "AI Initiative Partners with Leading Universities to Develop Open-Source AI Curriculum",
    source: "PR Newswire",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    link: "#",
    category: 'education',
    featured: true,
    description: "A new partnership between the AI Initiative and five major universities aims to create and freely distribute a comprehensive AI curriculum, making quality AI education accessible globally..."
  },
  {
    type: 'article',
    title: "How AI Initiative's Visual Recognition System Reduced Manufacturing Defects by 85%",
    source: "Industry Week",
    date: "October 2023",
    image: "https://images.unsplash.com/photo-1568661391526-facbe6bf22a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    link: "#",
    category: 'ai-tech',
    description: "An in-depth case study of our computer vision implementation at Precision Manufacturing, showcasing how advanced AI systems can transform quality control processes while reducing costs..."
  },
  {
    type: 'video',
    title: "Democratizing AI Access: The Vision Behind the 20% Pledge",
    source: "TEDx Talks",
    date: "September 2023",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    link: "#",
    category: 'impact',
    featured: true,
    description: "Our founder's TEDx talk exploring the mission to make AI education and resources accessible to all, regardless of economic background, and the transformative impact of their 20% profit pledge..."
  },
  {
    type: 'research-paper',
    title: "Breakthrough in Natural Language Understanding Using Multimodal Context Integration",
    source: "AI Research Conference",
    date: "August 2023",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    link: "#",
    category: 'research',
    description: "Published research documenting significant advances in natural language processing by combining textual, visual, and situational context, resulting in a 43% improvement in understanding complex queries..."
  },
  {
    type: 'article',
    title: "AI Initiative Named Among Top 10 Most Innovative AI Companies",
    source: "Forbes",
    date: "July 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    link: "#",
    category: 'ai-tech',
    featured: true,
    description: "Forbes annual list of innovative companies highlights the AI Initiative's unique approach to combining cutting-edge technology with social responsibility, placing them among industry giants..."
  }
];

const pressKits = [
  {
    title: "AI Initiative Brand Guidelines",
    size: "3.2 MB",
    format: "PDF",
    link: "#",
    icon: <FileBadge className="w-5 h-5" />
  },
  {
    title: "Press Photos & Logos",
    size: "18 MB",
    format: "ZIP",
    link: "#",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Company Fact Sheet",
    size: "1.5 MB",
    format: "PDF",
    link: "#",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Impact Report 2023",
    size: "4.8 MB",
    format: "PDF",
    link: "#",
    icon: <Award className="w-5 h-5" />
  },
  {
    title: "Research Paper Collection",
    size: "7.2 MB",
    format: "ZIP",
    link: "#",
    icon: <Code className="w-5 h-5" />
  }
];

export default function MediaPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'article' | 'video' | 'press-release' | 'research-paper'>('all');
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai-tech' | 'research' | 'impact' | 'education'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter media items based on type, category and search query
  const filteredMedia = mediaItems.filter(item => {
    const matchesType = activeFilter === 'all' || item.type === activeFilter;
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesCategory && matchesSearch;
  });
  
  // Get featured items
  const featuredItems = mediaItems.filter(item => item.featured).slice(0, 3);
  
  return (
    <div className="pt-20 bg-deep-black text-cream">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-deep-black">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <Newspaper 
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
            <Newspaper className="w-12 h-12 text-cream/80" />
            <h1 className="font-playfair text-5xl md:text-7xl">Media Center</h1>
          </div>
          <p className="text-xl text-cream/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
            News, articles, and research featuring our AI innovations and impact
          </p>
        </div>
      </div>

      {/* Featured Media Section */}
      {featuredItems.length > 0 && (
        <section className="py-16 bg-deep-black/50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-playfair text-3xl mb-8">Featured Coverage</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredItems.map((item, index) => (
                  <a 
                    key={`featured-${item.title}`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-deep-black/30 rounded-xl overflow-hidden border border-cream/10 hover:border-cream/30 transition-colors"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-cream fill-cream" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-cream/10 backdrop-blur-sm rounded-full text-xs uppercase">
                        {item.type.replace('-', ' ')}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-cream/60 text-sm mb-2">
                        <span>{item.source}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="font-playfair text-xl mb-2 group-hover:text-cream transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-cream/60 text-sm">
                        {item.description.substring(0, 100)}...
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-cream/50 group-hover:text-cream/80 transition-colors text-sm">
                        <span>Read more</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="sticky top-0 z-10 bg-deep-black/80 backdrop-blur-sm py-4 border-b border-cream/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  activeFilter === 'all' 
                    ? 'bg-cream text-deep-black' 
                    : 'bg-cream/10 text-cream hover:bg-cream/20'
                }`}
              >
                All Media
              </button>
              <button
                onClick={() => setActiveFilter('article')}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center gap-1 ${
                  activeFilter === 'article' 
                    ? 'bg-cream text-deep-black' 
                    : 'bg-cream/10 text-cream hover:bg-cream/20'
                }`}
              >
                <Newspaper className="w-3 h-3" />
                Articles
              </button>
              <button
                onClick={() => setActiveFilter('video')}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center gap-1 ${
                  activeFilter === 'video' 
                    ? 'bg-cream text-deep-black' 
                    : 'bg-cream/10 text-cream hover:bg-cream/20'
                }`}
              >
                <Video className="w-3 h-3" />
                Videos
              </button>
              <button
                onClick={() => setActiveFilter('press-release')}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center gap-1 ${
                  activeFilter === 'press-release' 
                    ? 'bg-cream text-deep-black' 
                    : 'bg-cream/10 text-cream hover:bg-cream/20'
                }`}
              >
                <FileText className="w-3 h-3" />
                Press Releases
              </button>
              <button
                onClick={() => setActiveFilter('research-paper')}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center gap-1 ${
                  activeFilter === 'research-paper' 
                    ? 'bg-cream text-deep-black' 
                    : 'bg-cream/10 text-cream hover:bg-cream/20'
                }`}
              >
                <Code className="w-3 h-3" />
                Research Papers
              </button>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cream/40" />
              <input
                type="text"
                placeholder="Search media..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 bg-cream/5 border border-cream/20 rounded-lg pl-10 pr-4 py-2 text-cream placeholder-cream/40 focus:outline-none focus:border-cream/40"
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="mt-4 flex overflow-x-auto gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                activeCategory === 'all' 
                  ? 'bg-cream/30 text-cream' 
                  : 'bg-transparent text-cream/60 hover:text-cream/80'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setActiveCategory('ai-tech')}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                activeCategory === 'ai-tech' 
                  ? 'bg-cream/30 text-cream' 
                  : 'bg-transparent text-cream/60 hover:text-cream/80'
              }`}
            >
              AI Technology
            </button>
            <button
              onClick={() => setActiveCategory('research')}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                activeCategory === 'research' 
                  ? 'bg-cream/30 text-cream' 
                  : 'bg-transparent text-cream/60 hover:text-cream/80'
              }`}
            >
              Research
            </button>
            <button
              onClick={() => setActiveCategory('impact')}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                activeCategory === 'impact' 
                  ? 'bg-cream/30 text-cream' 
                  : 'bg-transparent text-cream/60 hover:text-cream/80'
              }`}
            >
              Social Impact
            </button>
            <button
              onClick={() => setActiveCategory('education')}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                activeCategory === 'education' 
                  ? 'bg-cream/30 text-cream' 
                  : 'bg-transparent text-cream/60 hover:text-cream/80'
              }`}
            >
              Education
            </button>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredMedia.length === 0 ? (
              <div className="text-center py-20">
                <Filter className="w-16 h-16 text-cream/20 mx-auto mb-4" />
                <h3 className="text-2xl font-playfair mb-2">No results found</h3>
                <p className="text-cream/60">
                  Try adjusting your filters or search query
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMedia.map((item, index) => (
                  <a 
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-deep-black/20 rounded-xl overflow-hidden border border-cream/5 hover:border-cream/20 transition-all hover:shadow-lg hover:shadow-cream/5"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-cream/40 transition-colors">
                            <Play className="w-6 h-6 text-cream" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-3 right-3 px-2 py-1 bg-cream/10 backdrop-blur-sm rounded-full text-xs">
                        {item.type.replace('-', ' ')}
                      </div>
                      {item.category && (
                        <div className="absolute bottom-3 left-3 px-2 py-1 bg-deep-black/60 backdrop-blur-sm rounded-full text-xs">
                          {item.category.replace('-', ' ')}
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-cream/60 text-xs mb-2">
                        <span>{item.source}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="font-playfair text-lg mb-2 group-hover:text-cream transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-cream/60 text-sm line-clamp-3">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-cream/40 group-hover:text-cream/70 transition-colors text-sm">
                        <span>Read more</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-16 bg-cream/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl mb-4">Press Kit & Resources</h2>
              <p className="text-cream/70 max-w-2xl mx-auto">
                Download official brand assets, media materials, and information about our organization and AI initiatives
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressKits.map((kit, index) => (
                <a 
                  key={kit.title}
                  href={kit.link}
                  className="group flex flex-col bg-deep-black/30 border border-cream/10 rounded-xl p-6 hover:border-cream/30 transition-colors"
                >
                  <div className="mb-4 w-12 h-12 bg-cream/10 rounded-lg flex items-center justify-center group-hover:bg-cream/20 transition-colors">
                    {kit.icon}
                  </div>
                  <h3 className="font-playfair text-lg mb-2">{kit.title}</h3>
                  <div className="mt-auto pt-4 flex items-center justify-between text-sm">
                    <span className="text-cream/60">{kit.size} • {kit.format}</span>
                    <span className="flex items-center gap-1 text-cream/50 group-hover:text-cream transition-colors">
                      <Download className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-deep-black/30 border-t border-cream/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-2xl mb-6">Media Inquiries</h2>
            <p className="text-cream/70 mb-8">
              For press inquiries, interview requests, or additional information about our AI initiatives, please contact our media relations team.
            </p>
            <a 
              href="mailto:press@aiinitiative.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-cream text-deep-black rounded-lg hover:bg-cream/90 transition-colors"
            >
              Contact Media Relations
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Animation styles */}
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