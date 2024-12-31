import { jsPDF } from 'jspdf';

interface DocumentSection {
  title: string;
  content: string;
}

interface DocumentMetadata {
  title: string;
  lastUpdated: string;
  version: string;
  sections: DocumentSection[];
}

export const generatePDF = (documentData: DocumentMetadata): Blob => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.width;
  const margin = 20;
  let y = margin;

  // Add header
  pdf.setFontSize(24);
  pdf.text(documentData.title, margin, y);
  y += 10;

  // Add metadata
  pdf.setFontSize(12);
  pdf.text(`Last Updated: ${documentData.lastUpdated}`, margin, y);
  y += 6;
  pdf.text(`Version: ${documentData.version}`, margin, y);
  y += 15;

  // Add table of contents
  pdf.setFontSize(16);
  pdf.text('Table of Contents', margin, y);
  y += 10;

  pdf.setFontSize(12);
  documentData.sections.forEach((section, index) => {
    pdf.text(section.title, margin + 5, y);
    y += 7;
  });

  y += 10;

  // Add content
  documentData.sections.forEach((section) => {
    // Add section title
    pdf.setFontSize(14);
    pdf.text(section.title, margin, y);
    y += 10;

    // Add section content with word wrap
    pdf.setFontSize(12);
    const splitText = pdf.splitTextToSize(section.content, pageWidth - 2 * margin);
    pdf.text(splitText, margin, y);
    y += splitText.length * 7 + 10;

    // Add new page if needed
    if (y > pdf.internal.pageSize.height - margin) {
      pdf.addPage();
      y = margin;
    }
  });

  return pdf.output('blob');
};

export const downloadPDF = (documentData: DocumentMetadata) => {
  const blob = generatePDF(documentData);
  const url = window.URL.createObjectURL(blob);
  const link = window.document.createElement('a');
  link.href = url;
  link.download = `${documentData.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
  window.document.body.appendChild(link);
  link.click();
  window.document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const configurePrintStyles = () => {
  const style = window.document.createElement('style');
  style.textContent = `
    @media print {
      /* Hide non-printable elements */
      nav, button, .no-print {
        display: none !important;
      }

      /* Reset background colors and text colors for printing */
      body {
        background: white !important;
        color: black !important;
      }

      /* Ensure content is visible */
      .prose * {
        color: black !important;
      }

      /* Add page breaks before sections */
      section {
        page-break-before: always;
      }

      /* Prevent page breaks inside paragraphs */
      p {
        page-break-inside: avoid;
      }

      /* Format headers for printing */
      h1, h2, h3 {
        page-break-after: avoid;
      }
    }
  `;
  window.document.head.appendChild(style);
};