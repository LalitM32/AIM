import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Github, Linkedin, Twitter, Heart, Code, Book, Award, ChevronRight, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-black/90 pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="font-playfair text-2xl mb-6">AI Initiative</h4>
            <p className="text-cream/80 mb-6">
              Developing innovative AI solutions while dedicating 20% of our profits to making AI education accessible for all.
            </p>
            <div className="bg-cream/10 border border-cream/10 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-cream" />
                <span className="text-cream font-medium">Our 20% Pledge</span>
              </div>
              <p className="text-cream/70 text-sm">
                We're committed to using 20% of our profits to fund AI education and scholarships for underrepresented communities.
              </p>
              <Link to="/about/impact" className="mt-3 inline-flex items-center gap-1 text-cream text-sm hover:underline">
                Learn more
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/ai-initiative" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-cream transition-colors">
                <Github />
              </a>
              <a href="https://linkedin.com/company/ai-initiative" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-cream transition-colors">
                <Linkedin />
              </a>
              <a href="https://twitter.com/aiinitiative" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-cream transition-colors">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-playfair text-xl mb-6">Our Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/computer-vision" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link to="/solutions/nlp" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Natural Language Processing
                </Link>
              </li>
              <li>
                <Link to="/solutions/predictive-analytics" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Predictive Analytics
                </Link>
              </li>
              <li>
                <Link to="/solutions/ethical-ai" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Ethical AI Framework
                </Link>
              </li>
              <li>
                <Link to="/solutions/custom" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Custom AI Solutions
                </Link>
              </li>
            </ul>

            <h4 className="font-playfair text-xl mt-8 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/resources/case-studies" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources/research" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Research Papers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-playfair text-xl mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about/story" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/team" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/about/values" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Our Values
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Contact
                </Link>
              </li>
            </ul>

            <h4 className="font-playfair text-xl mt-8 mb-4">Recognition</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/recognition/awards" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Awards & Honors
                </Link>
              </li>
              <li>
                <Link to="/recognition/media" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Media Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Education & Contact */}
          <div>
            <h4 className="font-playfair text-xl mb-6">Education Initiatives</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/education/scholarships" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Scholarship Programs
                </Link>
              </li>
              <li>
                <Link to="/education/courses" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Free AI Courses
                </Link>
              </li>
              <li>
                <Link to="/education/workshops" className="text-cream/80 hover:text-cream flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Workshops & Events
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/ai-initiative/open-curriculum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cream/80 hover:text-cream flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 group-hover:bg-cream transition-colors"></span>
                  Open-Source Curriculum
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>

            <h4 className="font-playfair text-xl mt-8 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-cream/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 AI Boulevard, Innovation District, Bangalore 560001</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>contact@aiinitiative.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Bar */}
        <div className="border-t border-cream/10 py-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center">
                <Code className="w-5 h-5 text-cream" />
              </div>
              <div>
                <div className="text-cream font-medium">50+</div>
                <div className="text-cream/60 text-sm">AI Solutions Deployed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center">
                <Book className="w-5 h-5 text-cream" />
              </div>
              <div>
                <div className="text-cream font-medium">200+</div>
                <div className="text-cream/60 text-sm">Scholarship Recipients</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-cream" />
              </div>
              <div>
                <div className="text-cream font-medium">15+</div>
                <div className="text-cream/60 text-sm">Industry Awards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60">
            © {new Date().getFullYear()} AI Initiative. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-cream/60">
            <Link to="/privacy" className="hover:text-cream">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cream">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-cream">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
