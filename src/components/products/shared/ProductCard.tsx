import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/styles';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  className?: string;
  layout?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({
  icon: Icon,
  title,
  description,
  image,
  className,
  layout = 'grid'
}) => {
  if (layout === 'list') {
    return (
      <div className={cn(
        "bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300",
        className
      )}>
        <div className="flex">
          <div className="w-48 h-48 flex-shrink-0 relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex items-center mb-2">
              <Icon className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 hover:transform hover:scale-105",
      className
    )}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Dark overlay that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center space-x-3 text-white">
          <Icon className="h-6 w-6" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        
        <div className="mt-2 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-white text-base font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;