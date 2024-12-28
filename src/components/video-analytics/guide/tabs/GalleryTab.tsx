import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

interface GalleryImage {
  src: string;
  title: string;
  caption: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9',
    title: 'Live Dashboard Interface',
    caption: 'Real-time monitoring dashboard showing multiple camera feeds and detection zones with instant alert notifications.',
    category: 'Interface'
  },
  {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    title: 'Network Topology',
    caption: 'Enterprise-grade network architecture diagram showcasing the integration of IDS components with existing infrastructure.',
    category: 'Architecture'
  },
  {
    src: 'https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad',
    title: 'Alert Management',
    caption: 'Centralized alert management system with priority-based notification handling and response automation.',
    category: 'Monitoring'
  },
  {
    src: 'https://images.unsplash.com/photo-1555421689-491a97ff2040',
    title: 'Deployment Setup',
    caption: 'Physical and virtual deployment architecture showing sensor placement and data flow patterns.',
    category: 'Architecture'
  },
  {
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    title: 'Real-time Analytics',
    caption: 'Advanced analytics dashboard displaying threat patterns, historical data, and predictive insights.',
    category: 'Analytics'
  },
  {
    src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f',
    title: 'Threat Detection',
    caption: 'AI-powered threat detection workflow highlighting pattern recognition and automated response mechanisms.',
    category: 'Security'
  },
  {
    src: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87',
    title: 'Configuration Panel',
    caption: 'Intuitive configuration interface for setting up detection zones, sensitivity levels, and alert parameters.',
    category: 'Interface'
  },
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    title: 'Performance Metrics',
    caption: 'Comprehensive performance monitoring showing system health, detection accuracy, and resource utilization.',
    category: 'Analytics'
  },
  {
    src: 'https://images.unsplash.com/photo-1562813733-b31f71025d54',
    title: 'Integration Diagram',
    caption: 'System integration blueprint demonstrating seamless connectivity with existing security infrastructure.',
    category: 'Architecture'
  }
];

const GalleryTab = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <FadeInSection key={image.src} delay={index * 100}>
            <div
              className="group relative bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.caption}</p>
                  <div className="flex items-center mt-2">
                    <ZoomIn className="w-5 h-5 text-blue-400" />
                    <span className="ml-2 text-sm text-blue-400">Click to zoom</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full rounded-lg"
            />
            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryTab;