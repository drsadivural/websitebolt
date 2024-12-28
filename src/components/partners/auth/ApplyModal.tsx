import React, { useState } from 'react';
import { X, Building, Mail, Phone, Globe } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  partnerType: 'reseller' | 'distributor' | 'technology';
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, partnerType }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  if (!isOpen) return null;

  const titles = {
    reseller: 'Reseller',
    distributor: 'Distributor',
    technology: 'Technology Partner'
  };

  const inputClasses = "w-full px-4 py-2 rounded-lg pl-10 bg-gray-700 border-gray-600 text-white";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg p-8 max-w-xl w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-300"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-white">
          Apply as {titles[partnerType]}
        </h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Company Name
            </label>
            <div className="relative">
              <input
                type="text"
                className={inputClasses}
                required
              />
              <Building className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className={inputClasses}
                required
              />
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Phone
            </label>
            <div className="relative">
              <input
                type="tel"
                className={inputClasses}
                required
              />
              <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Website
            </label>
            <div className="relative">
              <input
                type="url"
                className={inputClasses}
              />
              <Globe className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border-gray-600 text-white"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;