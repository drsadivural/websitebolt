import React, { useState } from 'react';
import { Settings, Bell, Clock, Sliders } from 'lucide-react';

const ConfigPanel = () => {
  const [sensitivity, setSensitivity] = useState(75);
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">Configuration</h2>
        <Settings className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="p-4 space-y-6">
        {/* Sensitivity Slider */}
        <div>
          <label className="flex items-center text-white mb-2">
            <Sliders className="w-4 h-4 mr-2" />
            Detection Sensitivity
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={sensitivity}
            onChange={(e) => setSensitivity(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-400">
            <span>Low</span>
            <span>{sensitivity}%</span>
            <span>High</span>
          </div>
        </div>

        {/* Notification Settings */}
        <div>
          <label className="flex items-center text-white mb-2">
            <Bell className="w-4 h-4 mr-2" />
            Alert Methods
          </label>
          <div className="space-y-2">
            {['Email', 'SMS', 'Push Notifications'].map((method) => (
              <label key={method} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-300">{method}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Schedule Settings */}
        <div>
          <label className="flex items-center text-white mb-2">
            <Clock className="w-4 h-4 mr-2" />
            Active Hours
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">Start Time</label>
              <input
                type="time"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">End Time</label>
              <input
                type="time"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;