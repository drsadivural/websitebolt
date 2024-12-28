import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer/Footer';
import ChatBot from './components/chat/ChatBot';

// Pages
import HomePage from './pages/HomePage';
import AboutUs from './pages/company/AboutUs';
import Leadership from './pages/company/Leadership';
import Location from './pages/company/Location';
import References from './pages/company/References';
import ContactPage from './pages/contact/ContactPage';
import Login from './pages/auth/Login';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

// Product Pages
import AISolutions from './pages/products/AISolutions';
import VideoAnalytics from './pages/products/VideoAnalytics';
import FaceRecognition from './pages/products/FaceRecognition';
import AIBOX from './pages/products/AIBOX';
import IntrusionDetection from './pages/products/video-analytics/IntrusionDetection';

// Solution Pages
import EnterpriseAI from './pages/solutions/EnterpriseAI';
import SmartSecurity from './pages/solutions/SmartSecurity';
import GenerativeAI from './pages/solutions/GenerativeAI';
import CustomAIModels from './pages/solutions/CustomAIModels';

// Partner Pages
import Resellers from './pages/partners/Resellers';
import Distributors from './pages/partners/Distributors';
import TechnologyPartners from './pages/partners/TechnologyPartners';

// Search
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
              <Navbar />
              <main className="flex-grow pt-16">
                <Routes>
                  {/* Home */}
                  <Route path="/" element={<HomePage />} />

                  {/* Products */}
                  <Route path="/products/ai-solutions" element={<AISolutions />} />
                  <Route path="/products/video-analytics" element={<VideoAnalytics />} />
                  <Route path="/products/video-analytics/intrusion-detection" element={<IntrusionDetection />} />
                  <Route path="/products/face-recognition" element={<FaceRecognition />} />
                  <Route path="/products/aibox" element={<AIBOX />} />

                  {/* Solutions */}
                  <Route path="/solutions/enterprise-ai" element={<EnterpriseAI />} />
                  <Route path="/solutions/smart-security" element={<SmartSecurity />} />
                  <Route path="/solutions/generative-ai" element={<GenerativeAI />} />
                  <Route path="/solutions/custom-ai-models" element={<CustomAIModels />} />

                  {/* Partners */}
                  <Route path="/partners/resellers" element={<Resellers />} />
                  <Route path="/partners/distributors" element={<Distributors />} />
                  <Route path="/partners/technology-partners" element={<TechnologyPartners />} />

                  {/* Company */}
                  <Route path="/company/about" element={<AboutUs />} />
                  <Route path="/company/leadership" element={<Leadership />} />
                  <Route path="/company/location" element={<Location />} />
                  <Route path="/company/references" element={<References />} />

                  {/* Contact */}
                  <Route path="/contact/sales" element={<ContactPage />} />
                  <Route path="/contact/support" element={<ContactPage />} />
                  <Route path="/contact/offices" element={<Location />} />

                  {/* Auth */}
                  <Route path="/auth/login" element={<Login />} />

                  {/* Legal */}
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                  {/* Search */}
                  <Route path="/search" element={<SearchResults />} />

                  {/* Fallback */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
              <ChatBot />
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;