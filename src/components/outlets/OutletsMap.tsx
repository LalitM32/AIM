import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import type { Outlet } from '../../data/outlets';

interface OutletsMapProps {
  outlets: Outlet[];
  onSelectOutlet: (outlet: Outlet) => void;
}

export default function OutletsMap({ outlets, onSelectOutlet }: OutletsMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[16/9] bg-deep-black/30 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-cream/60">Interactive map will be displayed here</p>
      </div>
      
      {/* Map Markers */}
      {outlets.map((outlet) => (
        <button
          key={outlet.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all
            ${hoveredId === outlet.id ? 'scale-125' : 'scale-100'}`}
          style={{
            left: `${((outlet.coordinates[1] + 180) * 100) / 360}%`,
            top: `${((90 - outlet.coordinates[0]) * 100) / 180}%`
          }}
          onMouseEnter={() => setHoveredId(outlet.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => onSelectOutlet(outlet)}
        >
          <MapPin className="w-6 h-6 text-cream hover:text-cream/80" />
        </button>
      ))}
    </div>
  );
}