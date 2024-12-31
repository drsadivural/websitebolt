import React from 'react';
import LegalDocumentLayout from '../../components/legal/LegalDocumentLayout';

const SoftwareLicense = () => {
  return (
    <LegalDocumentLayout
      title="Software License Agreement"
      lastUpdated="2024-03-20"
      version="1.0"
      sections={[
        {
          title: "1. License Grant",
          content: "Subject to the terms of this Agreement, Ayonix grants you a limited, non-exclusive, non-transferable license to use the software."
        },
        {
          title: "2. Restrictions",
          content: "You may not modify, adapt, translate, reverse engineer, decompile, disassemble or create derivative works based on the Software."
        },
        {
          title: "3. Updates and Support",
          content: "Ayonix may provide you with updates or upgrades to the Software that will be subject to this Agreement."
        }
      ]}
    />
  );
};

export default SoftwareLicense;