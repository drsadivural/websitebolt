import React from 'react';
import { File, Download, Trash2 } from 'lucide-react';

const DocumentList = () => {
  const documents = [
    { id: 1, name: 'Product Catalog 2024.pdf', type: 'PDF', size: '2.4 MB', date: '2024-01-15' },
    { id: 2, name: 'Technical Specifications.docx', type: 'DOCX', size: '1.8 MB', date: '2024-01-14' },
    { id: 3, name: 'Training Video.mp4', type: 'MP4', size: '45.6 MB', date: '2024-01-13' },
    { id: 4, name: 'Price List Q1 2024.xlsx', type: 'XLSX', size: '956 KB', date: '2024-01-12' },
  ];

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Documents</h3>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {documents.map((doc) => (
            <li key={doc.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <File className="h-5 w-5 text-gray-400" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-500">
                      {doc.type} • {doc.size} • {doc.date}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600">
                    <Download className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocumentList;