import React from 'react';
import { Brain, Shield, Globe } from 'lucide-react';
import FadeInSection from '../animations/FadeInSection';

const CompanyOverview = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">Our Story</h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 text-justify">
                Founded in 2007 in Tokyo by Dr. Sadi Vural, a pioneering AI scientist and former Visiting Associate 
                Professor at Osaka University, Ayonix emerged from a vision to revolutionize AI Face recognition. 
                What began as groundbreaking research in facial recognition has evolved into a comprehensive suite of 
                AI-powered solutions that serve enterprises worldwide.
              </p>
              
              <p className="text-gray-300 text-justify">
                Our mission is to empower organizations with Generative AI technology that enhances 
                security, streamlines operations, and improve profitability. We combine OpenAI, RAG and Multi agent with practical business applications to deliver solutions that helps businesses. 
              </p>

              <p className="text-gray-300 text-justify">
                What sets us apart is our commitment to continuous innovation and our deep understanding 
                of both technology and business needs. Our solutions are built on proprietary and fine-tuned AI models 
                that achieve industry-leading accuracy while maintaining low-cost, functionality, and easy use.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Brain className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Performance First</h3>
                <p className="text-gray-400">Leading the industry with high accurate AI models</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Low Cost</h3>
                <p className="text-gray-400">Cutting off the operational costs while improving the performance is our target</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Global Reach</h3>
                <p className="text-gray-400">Serving clients across 30+ countries with local support</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CompanyOverview;