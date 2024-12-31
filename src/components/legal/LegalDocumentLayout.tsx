import React, { useEffect } from 'react';
import { Printer, Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../shared/PageHeader';
import { downloadPDF, configurePrintStyles } from '../../utils/legal/documentUtils';

interface Section {
  title: string;
  content: string;
}

interface LegalDocumentLayoutProps {
  title: string;
  lastUpdated: string;
  version: string;
  sections: Section[];
}

const LegalDocumentLayout: React.FC<LegalDocumentLayoutProps> = ({
  title,
  lastUpdated,
  version,
  sections
}) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    configurePrintStyles();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    downloadPDF({ title, lastUpdated, version, sections });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title={title}
        description="Legal Documentation"
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Navigation and Actions */}
          <div className="flex justify-between items-center mb-8 no-print">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <div className="flex space-x-4">
              <button
                onClick={handlePrint}
                className="flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Printer className="w-5 h-5 mr-2" />
                Print
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Document Content */}
          <div className="bg-white text-black p-8 rounded-lg print:p-0 print:bg-white">
            {/* Document Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
              <div className="flex space-x-4 text-sm text-gray-600">
                <span>Last Updated: {lastUpdated}</span>
                <span>Version: {version}</span>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-100 p-6 rounded-lg print:bg-white">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={"#section-" + (index + 1)}
                      className="text-blue-600 hover:text-blue-800 transition-colors print:text-black"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Document Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <section 
                  key={index} 
                  id={"section-" + (index + 1)} 
                  className="scroll-mt-20"
                >
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <p className="leading-relaxed">{section.content}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDocumentLayout;