import React from 'react';

interface TableOfContentsProps {
  sections: { id: string; title: string }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  return (
    <nav className="bg-gray-800/50 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;