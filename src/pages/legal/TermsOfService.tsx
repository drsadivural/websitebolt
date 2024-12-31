import React from 'react';
import LegalDocumentLayout from '../../components/legal/LegalDocumentLayout';

const TermsOfService = () => {
  return (
    <LegalDocumentLayout
      title="Terms of Service"
      lastUpdated="2024-03-20"
      version="1.0"
      sections={[
        {
          title: "1. Acceptance of Terms",
          content: "By accessing and using Ayonix's services, you agree to be bound by these Terms of Service and all applicable laws and regulations."
        },
        {
          title: "2. Use License",
          content: "Permission is granted to temporarily access the materials (information or software) on Ayonix's website for personal, non-commercial transitory viewing only."
        },
        {
          title: "3. Service Modifications",
          content: "Ayonix reserves the right to modify or discontinue, temporarily or permanently, the service with or without notice."
        }
      ]}
    />
  );
};

export default TermsOfService;