import React from 'react';

export const Breadcrumb = ({ items }) => (
  <nav className="flex" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1">
      {items.map((item, index) => (
        <li key={index} className="inline-flex items-center">
          {index > 0 && <span className="mx-2 text-gray-400">/</span>}
          <a href={item.href} className={index === items.length - 1 ? 'text-gray-500' : 'text-blue-600 hover:underline'}>
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);
