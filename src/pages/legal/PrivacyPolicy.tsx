import React from 'react';
import PageHeader from '../../components/shared/PageHeader';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Privacy Policy"
        description="How we handle and protect your data"
        image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d"
      />
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-invert mx-auto">
            <h2 className="text-white">Privacy Policy</h2>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h3 className="text-white">1. Information We Collect</h3>
            <p className="text-gray-300">We collect information that you provide directly to us, including:</p>
            <ul className="text-gray-300">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment information</li>
            </ul>

            <div className="space-y-8">
              <div>
                <p className="text-white font-semibold">a. Personal Information</p>
                <p className="text-gray-300">When you register for or use our services, we may collect personal information such as:</p>
                <ul className="text-gray-300">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Payment information</li>
                </ul>
              </div>

              <div>
                <p className="text-white font-semibold">b. Usage Data</p>
                <p className="text-gray-300">We may automatically collect information about how you access and use our services, including:</p>
                <ul className="text-gray-300">
                  <li>IP address</li>
                  <li>Device type and operating system</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and interactions</li>
                  <li>Location data (if enabled)</li>
                </ul>
              </div>

              <div>
                <p className="text-white font-semibold">c. AI Training Data</p>
                <p className="text-gray-300">For AI technology interactions, we may collect:</p>
                <ul className="text-gray-300">
                  <li>Text, voice, or other input provided</li>
                  <li>Response feedback</li>
                  <li>Anonymized training data</li>
                </ul>
              </div>
            </div>

            <h3 className="text-white mt-8">2. How We Use Your Information</h3>
            <ul className="text-gray-300">
              <li>To provide and improve our services</li>
              <li>To process transactions</li>
              <li>To communicate with you</li>
              <li>To personalize your experience</li>
              <li>To improve our AI models</li>
              <li>To analyze usage trends</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h3 className="text-white mt-8">3. Data Sharing and Disclosure</h3>
            <p className="text-gray-300">We implement appropriate measures to protect your data:</p>
            <ul className="text-gray-300">
              <li>We do not sell your personal information</li>
              <li>We share data with trusted service providers</li>
              <li>Data may be transferred in business transactions</li>
              <li>We may disclose data for legal compliance</li>
            </ul>

            <h3 className="text-white mt-8">4. Your Rights</h3>
            <ul className="text-gray-300">
              <li>Access your personal data</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
              <li>Opt-out of marketing</li>
            </ul>

            <h3 className="text-white mt-8">5. Cookies and Tracking</h3>
            <p className="text-gray-300">
              We use cookies and similar technologies to enhance your experience. You can manage cookie 
              preferences through your browser settings.
            </p>

            <h3 className="text-white mt-8">6. Contact Us</h3>
            <p className="text-gray-300">
              Questions about this Privacy Policy? Contact us at{' '}
              <a href="mailto:infojp@ayonix.com" className="text-blue-400 hover:text-blue-300">
                infojp@ayonix.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;