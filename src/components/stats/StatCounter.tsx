import React from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function StatCounter({ value, label, suffix = '' }: StatCounterProps) {
  return (
    <div className="text-center">
      <div className="font-playfair text-4xl mb-2">
        {value}{suffix}
      </div>
      <div className="text-cream/80">{label}</div>
    </div>
  );
}