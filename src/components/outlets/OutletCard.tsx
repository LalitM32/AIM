import React, { useState } from 'react';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import type { Outlet } from '../../types';
import type { Project } from '../../data/brands';
import { Link } from 'react-router-dom';

interface OutletCardProps {
  outlet: Outlet;
  brand?: Project;
}

const OutletCard: React.FC<OutletCardProps> = ({ outlet, brand }) => {
  return (
    <div className="bg-deep-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-cream/10 hover:border-cream/20 transition-all group h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={outlet.image} 
          alt={outlet.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent"></div>
        
        {/* Optional Brand Badge */}
        {brand && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-cream/10 backdrop-blur-sm rounded-full text-sm text-cream/90">
            {brand.name}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-playfair text-xl mb-2">{outlet.name}</h3>
        <p className="text-cream/60 text-sm mb-4 line-clamp-2">{outlet.description}</p>
        
        <div className="mt-auto space-y-4">
          <div className="flex items-start gap-2 text-cream/70">
            <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
            <span className="text-sm">{outlet.address}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <Link
              to={`/case-studies/${outlet.id}`}
              className="text-cream hover:text-cream/80 transition-colors text-sm flex items-center gap-1"
            >
              View Case Study
              <ArrowRight className="w-3 h-3" />
            </Link>
            
            <div className="flex items-center gap-1 text-sm font-medium">
              <span className="text-cream/70">Project Rating:</span>
              <span className="text-cream">{outlet.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutletCard;