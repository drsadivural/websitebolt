import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalHeaderProps {
  title: string;
  lastUpdated: string;
}

const LegalHeader: React.FC<LegalHeaderProps> = ({ title, lastUpdated }) => {
  return (
    <div className="bg-gray-900/50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/legal"
          className="inline-flex items-center text-gray-400 hover:text-white mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Legal Hub
        </Link>
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-gray-400">Last updated: {lastUpdated}</p>
      </div>
    </div>
  );
};

export default LegalHeader;