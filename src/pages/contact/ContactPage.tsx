import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import ContactForm from '../../components/contact/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Address</h3>
                    <p className="text-gray-300">
                      FPG Links Jinnan 5F<br />
                      1-11-4 Jinnan, Shibuya<br />
                      Tokyo, 150-0041 JAPAN
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Phone</h3>
                    <p className="text-gray-300">03-6686-3026</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Email</h3>
                    <p className="text-gray-300">infojp@ayonix.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;