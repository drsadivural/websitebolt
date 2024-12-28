import React from 'react';
import { Upload, Download, Video, MessageSquare } from 'lucide-react';
import DocumentList from '../../components/portal/DocumentList';
import UploadModal from '../../components/portal/UploadModal';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Partner Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
              <button className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Upload className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-medium">Upload Files</h3>
                <p className="text-sm text-gray-500">Share documents and resources</p>
              </button>
              
              <button className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Download className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-lg font-medium">Download Center</h3>
                <p className="text-sm text-gray-500">Access partner materials</p>
              </button>
              
              <button className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Video className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-medium">Training Videos</h3>
                <p className="text-sm text-gray-500">Watch tutorial content</p>
              </button>
              
              <button className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <MessageSquare className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-lg font-medium">Messages</h3>
                <p className="text-sm text-gray-500">View communications</p>
              </button>
            </div>

            {/* Recent Documents */}
            <div className="mt-8">
              <DocumentList />
            </div>
          </div>
        </main>
      </div>
      <UploadModal />
    </div>
  );
};

export default Dashboard;