import React, { useState } from 'react';
import { Calendar, ArrowRight, Grid, List } from 'lucide-react';
import FadeInSection from '../../animations/FadeInSection';
import { news } from '../../../data/sectionData';
import NewsModal from '../modals/NewsModal';

const NewsSection = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null);

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeInSection direction="up">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white">Latest News</h2>
              <p className="text-gray-400 max-w-2xl">
                Stay updated with our latest innovations and achievements
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeInSection>

        <div className={`grid gap-8 ${
          viewMode === 'grid' ? 'md:grid-cols-3' : 'grid-cols-1'
        }`}>
          {news.map((item, index) => (
            <FadeInSection
              key={index}
              direction="up"
              delay={index * 200}
            >
              <div className={`group bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
                viewMode === 'list' ? 'flex' : ''
              }`}>
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center text-blue-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time>{new Date(item.date).toLocaleDateString()}</time>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <button 
                    onClick={() => setSelectedNews(item)}
                    className="text-blue-400 group-hover:text-blue-300 flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {selectedNews && (
        <NewsModal
          news={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </section>
  );
};

export default NewsSection;