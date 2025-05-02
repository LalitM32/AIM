import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  caseStudyUrl?: string;
}

export default function ProjectCard({ 
  name, 
  description, 
  image, 
  category, 
  technologies, 
  demoUrl, 
  caseStudyUrl 
}: ProjectCardProps) {
  
  const handleCardClick = () => {
    if (caseStudyUrl) {
      window.open(caseStudyUrl, '_blank', 'noopener,noreferrer');
    }
  };
  
  const handleDemoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (demoUrl) {
      window.open(demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleCardClick();
    }
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-deep-black/30 hover:bg-deep-black/50 transition-all duration-500 h-full flex flex-col shadow-lg border border-cream/10 hover:border-cream/20"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${name}`}
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cream/10 text-cream/80">{category}</span>
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <h3 className="font-playfair text-xl font-medium mb-2 mt-2 group-hover:text-cream transition-colors">{name}</h3>
        
        <p className="text-cream/70 text-sm mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-0.5 rounded-full bg-deep-black/50 text-cream/60"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-deep-black/50 text-cream/60">
                +{technologies.length - 3}
              </span>
            )}
          </div>
          
          {demoUrl && (
            <button
              onClick={handleDemoClick}
              className="flex items-center gap-1.5 text-sm font-medium text-cream bg-cream/10 hover:bg-cream/20 px-3 py-1.5 rounded-md transition-colors duration-300 w-full justify-center"
              aria-label={`View demo for ${name}`}
            >
              <ExternalLink className="w-4 h-4" />
              View Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 