import React from 'react';
import { AlertTriangle, Bell } from 'lucide-react';

const AlertMonitor = () => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">Live Alerts</h2>
        <Bell className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex items-center p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-red-400 mr-3" />
          <div>
            <p className="text-white font-medium">Zone 1 Breach</p>
            <p className="text-sm text-gray-400">2 minutes ago</p>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3" />
          <div>
            <p className="text-white font-medium">Motion Detected</p>
            <p className="text-sm text-gray-400">5 minutes ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertMonitor;