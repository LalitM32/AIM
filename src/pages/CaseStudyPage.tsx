import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Code, 
  Award, 
  Quote, 
  Share2, 
  ChevronRight, 
  ExternalLink 
} from 'lucide-react';
import { caseStudies } from '../data/case-studies';
import { outlets } from '../data/outlets';
import { CaseStudy, Outlet } from '../types/index';

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [outlet, setOutlet] = useState<Outlet | null>(null);
  const [relatedCases, setRelatedCases] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      const foundCaseStudy = caseStudies.find(study => study.id === id);
      if (foundCaseStudy) {
        setCaseStudy(foundCaseStudy);
        
        // Find the outlet
        const foundOutlet = outlets.find(o => o.id === foundCaseStudy.id);
        setOutlet(foundOutlet || null);
        
        // Find related case studies
        const related = caseStudies
          .filter(study => foundCaseStudy.relatedCaseStudies.includes(study.id))
          .slice(0, 2);
        setRelatedCases(related);
      } else {
        // If case study not found, navigate to 404
        navigate('/not-found', { replace: true });
      }
      setLoading(false);
    }, 800);
    
    // Track scroll for parallax effects
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id, navigate]);

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
  
  if (!caseStudy) return null;

  return (
    <div className="bg-deep-black text-cream min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${caseStudy.images.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: scrollY * 0.5,
            opacity: 1 - (scrollY * 0.001)
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/50 via-deep-black/60 to-deep-black"></div>
        </motion.div>
        
        {/* Back to case studies button */}
        <div className="absolute top-8 left-8 z-10">
          <Link 
            to="/case-studies" 
            className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>All Case Studies</span>
          </Link>
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto text-center"
            >
              <h4 className="text-cream/80 mb-3 uppercase tracking-wider">{caseStudy.industry}</h4>
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl mb-6">{caseStudy.title}</h1>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="px-4 py-1.5 bg-cream/10 backdrop-blur-sm rounded-full text-sm">
                  Client: {caseStudy.client}
                </span>
                <span className="w-1.5 h-1.5 bg-cream/30 rounded-full"></span>
                <span className="px-4 py-1.5 bg-cream/10 backdrop-blur-sm rounded-full text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {caseStudy.timeline}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-cream/60"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8">
            {/* Client Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">About {caseStudy.client}</h2>
              <p className="text-cream/80 text-lg leading-relaxed mb-6">
                {caseStudy.clientDescription}
              </p>
            </motion.div>
            
            {/* Challenge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                  <span className="text-xl font-playfair">1</span>
                </div>
                <h2 className="font-playfair text-3xl">The Challenge</h2>
              </div>
              <p className="text-cream/80 text-lg leading-relaxed">
                {caseStudy.challenge}
              </p>
              <div className="mt-10 relative rounded-xl overflow-hidden">
                <img 
                  src={caseStudy.images.content[0]} 
                  alt="Challenge Visualization" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
              </div>
            </motion.div>
            
            {/* Solution */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                  <span className="text-xl font-playfair">2</span>
                </div>
                <h2 className="font-playfair text-3xl">Our Solution</h2>
              </div>
              <p className="text-cream/80 text-lg leading-relaxed mb-8">
                {caseStudy.solution}
              </p>
              
              {/* Approach Steps */}
              <div className="mt-10 mb-12">
                <h3 className="font-playfair text-2xl mb-6">Our Approach</h3>
                <div className="space-y-6">
                  {caseStudy.approach.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-cream/10 flex-shrink-0 flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div className="bg-cream/5 rounded-lg p-4 flex-grow">
                        <p className="text-cream/90">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.images.content.slice(1).map((image, index) => (
                  <div key={index} className="relative rounded-xl overflow-hidden h-64">
                    <img 
                      src={image} 
                      alt={`Solution Visualization ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Results */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                  <span className="text-xl font-playfair">3</span>
                </div>
                <h2 className="font-playfair text-3xl">The Results</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {caseStudy.results.map((result, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-6"
                  >
                    <h3 className="text-lg text-cream/60 mb-2">{result.metric}</h3>
                    <p className="text-3xl font-playfair">{result.value}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={caseStudy.images.results} 
                  alt="Results Visualization" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
              </div>
            </motion.div>
            
            {/* Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-8 md:p-12 relative">
                <Quote className="absolute top-6 left-6 w-12 h-12 text-cream/10" />
                <div className="ml-6">
                  <p className="text-xl md:text-2xl italic text-cream/90 mb-8">
                    "{caseStudy.quote?.text}"
                  </p>
                  <div>
                    <div className="font-semibold mb-1">{caseStudy.quote?.author}</div>
                    <div className="text-cream/60">{caseStudy.quote?.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              {/* Technologies Used */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-6 mb-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-cream/60" />
                  <h3 className="font-playfair text-xl">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-cream/10 rounded-full text-sm text-cream/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              {/* CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-6 mb-8"
              >
                <h3 className="font-playfair text-xl mb-4">Ready to transform your business?</h3>
                <p className="text-cream/60 mb-6">
                  {caseStudy.ctaText}
                </p>
                <Link
                  to={caseStudy.ctaLink}
                  className="w-full px-6 py-3 bg-cream text-deep-black font-semibold rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              
              {/* Share */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-6 mb-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Share2 className="w-5 h-5 text-cream/60" />
                  <h3 className="font-playfair text-xl">Share This Case Study</h3>
                </div>
                <div className="flex gap-3">
                  <button className="w-full p-3 bg-cream/10 rounded-lg hover:bg-cream/20 transition-colors flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="w-full p-3 bg-cream/10 rounded-lg hover:bg-cream/20 transition-colors flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>
                  <button className="w-full p-3 bg-cream/10 rounded-lg hover:bg-cream/20 transition-colors flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Case Studies */}
      {relatedCases.length > 0 && (
        <div className="bg-cream/5 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-playfair text-3xl md:text-4xl text-center">Explore Related Case Studies</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedCases.map((relatedCase, index) => (
                <motion.div 
                  key={relatedCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-deep-black/30 backdrop-blur-sm border border-cream/10 rounded-xl overflow-hidden group hover:border-cream/20 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedCase.images.hero} 
                      alt={relatedCase.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-cream/10 rounded-full text-sm text-cream/80 mb-4">
                      {relatedCase.industry}
                    </span>
                    <h3 className="font-playfair text-xl mb-3">{relatedCase.title}</h3>
                    <p className="text-cream/60 mb-6 line-clamp-2">
                      {relatedCase.clientDescription.slice(0, 120)}...
                    </p>
                    
                    <Link
                      to={`/case-studies/${relatedCase.id}`}
                      className="flex items-center gap-2 text-cream hover:text-cream/80 transition-colors group/link"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Bottom CTA */}
      <div className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/luxury-pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-playfair text-3xl md:text-5xl mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-cream/60 text-lg mb-10 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge digital solutions? Our team of experts is ready to help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-cream text-deep-black font-semibold rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2 min-w-[200px]"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-cream/20 rounded-lg hover:bg-cream/10 transition-colors flex items-center justify-center gap-2 min-w-[200px]"
              >
                View More Case Studies
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 