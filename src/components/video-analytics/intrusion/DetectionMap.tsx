import React, { useState } from 'react';
import { Pencil, Square, Trash2 } from 'lucide-react';
import MapTools from './MapTools';

const DetectionMap = () => {
  const [activeZones, setActiveZones] = useState<string[]>([]);
  const [drawingMode, setDrawingMode] = useState<'polygon' | 'rectangle' | null>(null);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">Detection Zones</h2>
        <MapTools
          onDrawPolygon={() => setDrawingMode('polygon')}
          onDrawRectangle={() => setDrawingMode('rectangle')}
          onClear={() => setActiveZones([])}
          activeMode={drawingMode}
        />
      </div>
      
      <div className="relative aspect-video bg-gray-900">
        {/* Video Feed Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Live Video Feed
        </div>
        
        {/* Drawing Canvas Overlay */}
        <canvas 
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: drawingMode ? 'auto' : 'none' }}
        />
      </div>
    </div>
  );
}

export default DetectionMap;