import React from 'react';
import PageHeader from '../../../components/shared/PageHeader';
import DetectionMap from '../../../components/video-analytics/intrusion/DetectionMap';
import AlertMonitor from '../../../components/video-analytics/intrusion/AlertMonitor';
import ConfigPanel from '../../../components/video-analytics/intrusion/ConfigPanel';
import EventLog from '../../../components/video-analytics/intrusion/EventLog';

const IntrusionDetection = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Intrusion Detection"
        description="Advanced AI-powered intrusion detection and monitoring"
        image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DetectionMap />
            <EventLog />
          </div>
          <div className="space-y-8">
            <AlertMonitor />
            <ConfigPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntrusionDetection;