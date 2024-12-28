import React from 'react';
import { X } from 'lucide-react';
import FadeInSection from '../../animations/FadeInSection';

interface NewsModalProps {
  news: {
    title: string;
    description: string;
    date: string;
    image: string;
  };
  onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ news, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <FadeInSection className="w-full max-w-3xl bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="relative">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <time className="text-blue-400 text-sm">
              {new Date(news.date).toLocaleDateString()}
            </time>
            <h2 className="text-2xl font-bold text-white mt-2">{news.title}</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p>{news.description}</p>
            {/* Add more content as needed */}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default NewsModal;