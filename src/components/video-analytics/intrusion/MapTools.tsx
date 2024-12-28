import React from 'react';
import { Pencil, Square, Trash2 } from 'lucide-react';

interface MapToolsProps {
  onDrawPolygon: () => void;
  onDrawRectangle: () => void;
  onClear: () => void;
  activeMode: 'polygon' | 'rectangle' | null;
}

const MapTools: React.FC<MapToolsProps> = ({
  onDrawPolygon,
  onDrawRectangle,
  onClear,
  activeMode
}) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onDrawPolygon}
        className={`p-2 rounded-lg transition-colors ${
          activeMode === 'polygon'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
        title="Draw polygon zone"
      >
        <Pencil className="w-5 h-5" />
      </button>
      
      <button
        onClick={onDrawRectangle}
        className={`p-2 rounded-lg transition-colors ${
          activeMode === 'rectangle'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
        title="Draw rectangular zone"
      >
        <Square className="w-5 h-5" />
      </button>
      
      <button
        onClick={onClear}
        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
        title="Clear all zones"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MapTools;