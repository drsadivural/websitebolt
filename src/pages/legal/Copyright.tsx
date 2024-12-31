import React from 'react';
import LegalDocumentLayout from '../../components/legal/LegalDocumentLayout';

const Copyright = () => {
  return (
    <LegalDocumentLayout
      title="Copyright Information"
      lastUpdated="2024-03-20"
      version="1.0"
      sections={[
        {
          title: "1. Copyright Protection",
          content: "All content on this website, including text, graphics, logos, and software, is the property of Ayonix and is protected by international copyright laws."
        },
        {
          title: "2. Fair Use",
          content: "Limited use of copyrighted material for personal, non-commercial research or study is permitted in accordance with fair use principles."
        },
        {
          title: "3. Infringement Claims",
          content: "If you believe your copyright has been infringed, please contact our copyright agent with detailed information about the alleged infringement."
        }
      ]}
    />
  );
};

export default Copyright;