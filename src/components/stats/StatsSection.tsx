import React from 'react';
import StatCounter from './StatCounter';

const stats = [
  { value: 40, label: 'Clients Served' },
  { value: 75, label: 'Projects Completed' },
  { value: 5, label: 'Countries Reached', suffix: '+' },
  { value: 100, label: 'Students Supported', suffix: '+' },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-deep-black/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}