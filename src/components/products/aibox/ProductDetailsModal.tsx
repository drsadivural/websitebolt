import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Spec {
  label: string;
  value: string;
}

interface Plan {
  name: string;
  price: string;
  features: string[];
}

const specs: Spec[] = [
  { label: 'Processor', value: 'ARM A76' },
  { label: 'Memory', value: '32GB DDR4' },
  { label: 'Storage', value: '1TB NVMe SSD' },
  { label: 'GPU', value: 'Mali-G610' },
  { label: 'Power Supply', value: '15W' },
  { label: 'Operating System', value: 'Ubuntu 24.04' }
];

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$400',
    features: [
      'Basic Edge Processing',
      '8GB RAM',
      '500GB Storage',
      '1 Year Warranty'
    ]
  },
  {
    name: 'Professional',
    price: '$650',
    features: [
      'Advanced Edge Processing',
      '16GB RAM',
      '1TB Storage',
      '3 Year Warranty',
      '24/7 Support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Custom Configuration',
      'High-Performance Computing',
      'Unlimited Storage Options',
      'Extended Warranty',
      'Priority Support',
      'Custom Integration'
    ]
  }
];

interface ProductDetailsModalProps {
  onClose: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#020817] text-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">AIBOX Product Details</h2>

          {/* Technical Specifications */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {specs.map((spec) => (
                <div key={spec.label} className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">{spec.label}</div>
                  <div className="text-lg font-semibold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Plans */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Select Your Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="bg-gray-800 p-6 rounded-lg border-2 border-transparent hover:border-blue-500 transition-colors"
                >
                  <h4 className="text-lg font-semibold mb-2">{plan.name}</h4>
                  <div className="text-3xl font-bold mb-4">{plan.price}</div>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <span className="text-blue-500 mr-2">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Sales Button */}
          <div className="mt-8 text-center">
            <Link
              to="/contact/sales"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;