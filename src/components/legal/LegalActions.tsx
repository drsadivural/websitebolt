import React from 'react';
import { Printer, Download } from 'lucide-react';

interface LegalActionsProps {
  onPrint: () => void;
  onDownload: () => void;
}

const LegalActions: React.FC<LegalActionsProps> = ({ onPrint, onDownload }) => {
  return (
    <div className="flex justify-end space-x-4 mb-8">
      <button
        onClick={onPrint}
        className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <Printer className="w-5 h-5 mr-2" />
        Print
      </button>
      <button
        onClick={onDownload}
        className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <Download className="w-5 h-5 mr-2" />
        Download PDF
      </button>
    </div>
  );
};

export default LegalActions;