import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import { MessageSquare, Code, Sparkles } from 'lucide-react';

const LLMPlatform = () => {
  return (
    <div>
      <PageHeader
        title="LLM Platform"
        description="State-of-the-art language models for enterprise applications"
        image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
      />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-3xl font-semibold mb-4">Advanced Language Processing</h2>
              <p className="text-lg text-gray-600">
                Our LLM platform provides cutting-edge natural language processing capabilities
                for enterprise applications, powered by the latest advancements in AI.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Natural Language Understanding</h3>
                    <p className="text-gray-600">Advanced context understanding and semantic analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Code className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Code Generation</h3>
                    <p className="text-gray-600">AI-powered code generation and analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Content Generation</h3>
                    <p className="text-gray-600">High-quality content creation and optimization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 mt-12 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="LLM Platform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMPlatform;