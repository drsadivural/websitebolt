import React from 'react';
import LegalDocumentLayout from '../../components/legal/LegalDocumentLayout';

const LegalNotices = () => {
  return (
    <LegalDocumentLayout
      title="Legal Notices"
      lastUpdated="2024-03-20"
      version="1.0"
      sections={[
        {
          title: "1. Disclaimer",
          content: "The information provided on this website is for general informational purposes only. We make no warranties about the accuracy or reliability of this information."
        },
        {
          title: "2. Limitation of Liability",
          content: "Ayonix shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services."
        },
        {
          title: "3. Governing Law",
          content: "These terms shall be governed by and construed in accordance with the laws of Japan, without regard to its conflict of law provisions."
        }
      ]}
    />
  );
};

export default LegalNotices;