import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import SignInModal from './auth/SignInModal';
import ApplyModal from './auth/ApplyModal';

interface PartnerCTAProps {
  type: 'reseller' | 'distributor' | 'technology';
}

const PartnerCTA: React.FC<PartnerCTAProps> = ({ type }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showApply, setShowApply] = useState(false);

  const titles = {
    reseller: 'Reseller',
    distributor: 'Distributor',
    technology: 'Technology Partner'
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-rose-900/10 to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-rose-100">
            Become a {titles[type]}
          </h2>
          <p className="text-rose-200 mb-8">
            Join our partner network and grow your business with industry-leading AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setShowApply(true)}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 transition-colors"
            >
              Apply Now
            </button>
            <button
              onClick={() => setShowSignIn(true)}
              className="inline-flex items-center justify-center px-6 py-3 border border-rose-800 text-base font-medium rounded-md text-rose-200 bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </button>
          </div>
        </div>
      </div>

      <SignInModal 
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
      />
      
      <ApplyModal
        isOpen={showApply}
        onClose={() => setShowApply(false)}
        partnerType={type}
      />
    </div>
  );
};

export default PartnerCTA;