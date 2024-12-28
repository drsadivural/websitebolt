import React, { useState } from 'react';
import { FileText, Download, Star, Users, Clock } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

interface Resource {
  id: string;
  title: string;
  description: string;
  fileType: string;
  size: string;
  downloads: number;
  rating: number;
  lastUpdated: string;
}

const resources: Resource[] = [
  {
    id: 'guide',
    title: 'IDS Implementation Guide',
    description: 'Comprehensive guide covering installation, configuration, and best practices for implementing intrusion detection systems in enterprise environments.',
    fileType: 'PDF',
    size: '15 MB',
    downloads: 1234,
    rating: 4.8,
    lastUpdated: '2024-03-15'
  },
  {
    id: 'standards',
    title: 'Industry Standards & Compliance',
    description: 'Detailed documentation on security standards, compliance requirements, and certification guidelines for IDS implementations.',
    fileType: 'PDF',
    size: '8 MB',
    downloads: 856,
    rating: 4.6,
    lastUpdated: '2024-03-10'
  },
  {
    id: 'templates',
    title: 'Configuration Templates',
    description: 'Ready-to-use configuration templates for different deployment scenarios and security requirements.',
    fileType: 'ZIP',
    size: '5 MB',
    downloads: 2341,
    rating: 4.9,
    lastUpdated: '2024-03-12'
  },
  {
    id: 'troubleshooting',
    title: 'Advanced Troubleshooting Guide',
    description: 'In-depth troubleshooting procedures, common issues, and resolution strategies for system administrators.',
    fileType: 'PDF',
    size: '12 MB',
    downloads: 967,
    rating: 4.7,
    lastUpdated: '2024-03-08'
  },
  {
    id: 'quickstart',
    title: 'Quick Start Guide',
    description: 'Step-by-step guide for rapid deployment and basic configuration of intrusion detection systems.',
    fileType: 'PDF',
    size: '3 MB',
    downloads: 3456,
    rating: 4.5,
    lastUpdated: '2024-03-14'
  }
];

const ResourcesTab = () => {
  const [downloadProgress, setDownloadProgress] = useState<Record<string, number>>({});

  const simulateDownload = (id: string) => {
    setDownloadProgress(prev => ({ ...prev, [id]: 0 }));
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const newProgress = (prev[id] || 0) + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return { ...prev, [id]: newProgress };
      });
    }, 300);
  };

  return (
    <div className="space-y-8">
      <FadeInSection>
        <div className="grid gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-[1.01]"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <FileText className="w-5 h-5 text-blue-400 mr-2" />
                      <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Updated {resource.lastUpdated}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {resource.downloads.toLocaleString()} downloads
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        {resource.rating} / 5.0
                      </div>
                      <span className="px-2 py-1 bg-gray-700 rounded text-gray-300">
                        {resource.fileType} • {resource.size}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => simulateDownload(resource.id)}
                    disabled={downloadProgress[resource.id] !== undefined}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>

                {downloadProgress[resource.id] !== undefined && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Downloading...</span>
                      <span>{downloadProgress[resource.id]}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                        style={{ width: `${downloadProgress[resource.id]}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default ResourcesTab;