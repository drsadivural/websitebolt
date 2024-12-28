import React, { useState } from 'react';
import { AlertTriangle, Search, Filter } from 'lucide-react';

const EventLog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Event History</h2>
          <button className="p-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600">
            <Filter className="w-5 h-5" />
          </button>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Time</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Event</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Zone</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {[
              { time: '10:45 AM', event: 'Intrusion Detected', zone: 'Zone 1', status: 'Alert' },
              { time: '10:30 AM', event: 'Motion Detected', zone: 'Zone 2', status: 'Warning' },
              { time: '10:15 AM', event: 'System Check', zone: 'All Zones', status: 'Info' }
            ].map((event, index) => (
              <tr key={index} className="hover:bg-gray-700/50">
                <td className="px-4 py-3 text-sm text-gray-300">{event.time}</td>
                <td className="px-4 py-3 text-sm text-gray-300">{event.event}</td>
                <td className="px-4 py-3 text-sm text-gray-300">{event.zone}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    event.status === 'Alert' ? 'bg-red-500/10 text-red-400' :
                    event.status === 'Warning' ? 'bg-yellow-500/10 text-yellow-400' :
                    'bg-blue-500/10 text-blue-400'
                  }`}>
                    {event.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventLog;