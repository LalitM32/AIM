import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Search, 
  Filter, 
  Clock, 
  ChevronDown, 
  X, 
  Award
} from 'lucide-react';
import { caseStudies } from '../data/case-studies';
import { CaseStudy } from '../types/index';

export default function CaseStudyListPage() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<CaseStudy[]>([]);
  
  // Get unique industries for filter
  const industries = Array.from(new Set(caseStudies.map(study => study.industry)));
  
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => setLoading(false), 1000);
    
    // Apply filters
    const filtered = caseStudies.filter(study => {
      const matchesSearch = searchQuery === '' || 
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.clientDescription.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesIndustry = industryFilter === null || study.industry === industryFilter;
      
      return matchesSearch && matchesIndustry;
    });
    
    setFilteredCaseStudies(filtered);
  }, [searchQuery, industryFilter]);
  
  const handleClearFilters = () => {
    setSearchQuery('');
    setIndustryFilter(null);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          className="w-20 h-20 border-4 border-cream/20 border-t-cream rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }
  
  return (
    <div className="bg-deep-black text-cream min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/luxury-pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-playfair text-4xl md:text-6xl mb-6">Our Case Studies</h1>
            <p className="text-cream/60 text-lg mb-12 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence, automate processes, and drive growth through innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Filter Section */}
      <div className="bg-deep-black/70 backdrop-blur-sm border-y border-cream/10 py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/60" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-deep-black/50 border border-cream/20 rounded-lg pl-12 pr-4 py-3 text-cream focus:border-cream/50 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            {/* Mobile Filter Button */}
            <button 
              className="md:hidden px-4 py-3 border border-cream/20 rounded-lg flex items-center justify-center gap-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="w-5 h-5" />
              <span>Filter</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <select
                  value={industryFilter || ''}
                  onChange={(e) => setIndustryFilter(e.target.value === '' ? null : e.target.value)}
                  className="appearance-none bg-deep-black/50 border border-cream/20 rounded-lg px-4 py-3 pr-10 text-cream focus:border-cream/50 focus:outline-none transition-colors min-w-[180px]"
                >
                  <option value="">All Industries</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
              
              {(searchQuery || industryFilter) && (
                <button 
                  onClick={handleClearFilters}
                  className="px-4 py-3 border border-cream/20 rounded-lg flex items-center justify-center gap-2 hover:bg-cream/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>
          </div>
          
          {/* Mobile Filters */}
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="space-y-4 pt-4 border-t border-cream/10">
                <div>
                  <label className="block text-cream/60 mb-2 text-sm">Industry</label>
                  <div className="relative">
                    <select
                      value={industryFilter || ''}
                      onChange={(e) => setIndustryFilter(e.target.value === '' ? null : e.target.value)}
                      className="w-full appearance-none bg-deep-black/50 border border-cream/20 rounded-lg px-4 py-3 pr-10 text-cream focus:border-cream/50 focus:outline-none transition-colors"
                    >
                      <option value="">All Industries</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
                
                {(searchQuery || industryFilter) && (
                  <button 
                    onClick={handleClearFilters}
                    className="w-full px-4 py-3 border border-cream/20 rounded-lg flex items-center justify-center gap-2 hover:bg-cream/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear Filters</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Case Study Grid */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        {filteredCaseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div 
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-deep-black/30 backdrop-blur-sm border border-cream/10 rounded-xl overflow-hidden group hover:border-cream/20 transition-all h-full flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={caseStudy.images.hero} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cream/10 backdrop-blur-sm rounded-full text-sm text-cream/90">
                    {caseStudy.industry}
                  </div>
                  
                  {caseStudy.results.length > 0 && (
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-cream/10 backdrop-blur-sm rounded-full text-sm text-cream/90 flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {caseStudy.results[0].value}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-playfair text-xl mb-2">{caseStudy.title}</h3>
                  <p className="text-cream/60 text-sm mb-4 line-clamp-2">
                    {caseStudy.clientDescription.slice(0, 100)}...
                  </p>
                  
                  <div className="flex items-center gap-2 text-cream/60 mb-4 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{caseStudy.timeline}</span>
                  </div>
                  
                  <div className="mt-auto">
                    <Link
                      to={`/case-studies/${caseStudy.id}`}
                      className="inline-flex items-center gap-2 text-cream hover:text-cream/80 transition-colors group/link"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full border-2 border-cream/20">
              <Search className="w-10 h-10 text-cream/40" />
            </div>
            <h3 className="text-2xl font-playfair mb-2">No Case Studies Found</h3>
            <p className="text-cream/60 max-w-md mx-auto mb-8">
              We couldn't find any case studies matching your filters. Please try different search terms or clear your filters.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-3 bg-cream/10 hover:bg-cream/20 text-cream rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
      
      {/* CTA Section */}
      <div className="bg-cream/5 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/luxury-pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-playfair text-3xl md:text-5xl mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-cream/60 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help your business leverage technology to achieve your goals and create your own success case study.
            </p>
            
            <Link
              to="/contact"
              className="px-8 py-4 bg-cream text-deep-black font-semibold rounded-lg hover:bg-cream/90 transition-colors inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 