import React from 'react';
import { Play } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const DemoTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Live Demo</h2>
          <p className="text-xl text-gray-300">
            Experience our video analytics capabilities in action with our interactive demo
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Play className="w-6 h-6" />
                <span>Start Demo</span>
              </button>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Interactive Demo Features</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                Object Detection
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                Motion Tracking
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                People Counting
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                Zone Monitoring
              </li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default DemoTab;