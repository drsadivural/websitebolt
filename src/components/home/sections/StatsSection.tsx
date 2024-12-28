import React from 'react';

const stats = [
  { number: '98%', label: 'Customer Satisfaction' },
  { number: '500+', label: 'Global Clients' },
  { number: '24/7', label: 'Support Available' },
  { number: '10+', label: 'Years Experience' }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;