import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, List } from 'lucide-react';
import FadeInSection from '../../animations/FadeInSection';
import { products } from '../../../data/sectionData';

const ProductsSection = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <FadeInSection direction="up">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white">Our Products</h2>
              <p className="text-gray-400 max-w-2xl">
                Comprehensive AI solutions for every business need
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

        <div className={`grid gap-8 transition-all duration-300 ${
          viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'
        }`}>
          {products.map((product, index) => (
            <FadeInSection
              key={index}
              direction="up"
              delay={index * 200}
            >
              <Link
                to={product.link}
                className={`group relative overflow-hidden rounded-lg block transition-all duration-300 ${
                  viewMode === 'list' ? 'flex items-center' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'
                }`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>
                <div className={`${viewMode === 'list' ? 'flex-1 p-6' : 'absolute inset-0 flex flex-col justify-end p-6'}`}>
                  <div className="flex items-center mb-2">
                    <product.icon className="w-6 h-6 text-blue-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  </div>
                  <p className={`text-gray-300 ${
                    viewMode === 'grid' 
                      ? 'transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'
                      : ''
                  }`}>
                    {product.description}
                  </p>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;