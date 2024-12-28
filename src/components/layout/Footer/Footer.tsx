import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import Sitemap from './Sitemap';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">About Ayonix</h3>
            <p className="text-sm text-gray-400">
              Leading provider of AI-powered facial recognition and video analytics solutions.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/company/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact/sales" className="hover:text-blue-400">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <SocialLinks />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Preferences</h3>
            <div className="space-y-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        <Sitemap />
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Ayonix Corporation. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-gray-400 hover:text-blue-400">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-blue-400">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;