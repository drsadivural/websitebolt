import React from 'react';
import LegalDocumentLayout from '../../components/legal/LegalDocumentLayout';

const SalesRefund = () => {
  return (
    <LegalDocumentLayout
      title="Sales & Refund Policy"
      lastUpdated="2024-03-20"
      version="1.0"
      sections={[
        {
          title: "1. Payment Terms",
          content: "We accept major credit cards and bank transfers. All payments must be made in full before service activation."
        },
        {
          title: "2. Refund Policy",
          content: "Customers may request a refund within 30 days of purchase. Software licenses are non-refundable once activated."
        },
        {
          title: "3. Cancellation",
          content: "Subscription services may be cancelled at any time. Refunds are prorated based on unused service period."
        }
      ]}
    />
  );
};

export default SalesRefund;