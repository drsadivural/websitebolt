import React from 'react';
import LegalDocumentLayout from '../../components/legal/LegalDocumentLayout';

const Trademarks = () => {
  return (
    <LegalDocumentLayout
      title="Trademark Guidelines"
      lastUpdated="2024-03-20"
      version="1.0"
      sections={[
        {
          title: "1. Trademark Usage",
          content: "The Ayonix name, logo, and product names are trademarks of Ayonix Corporation. Use of these trademarks without express written permission is prohibited."
        },
        {
          title: "2. Permitted Uses",
          content: "Limited use of Ayonix trademarks is permitted for factual reference to our products and services, provided such use does not imply endorsement."
        },
        {
          title: "3. Brand Guidelines",
          content: "When using permitted Ayonix trademarks, follow our brand guidelines to ensure proper representation of our brand identity."
        }
      ]}
    />
  );
};

export default Trademarks;