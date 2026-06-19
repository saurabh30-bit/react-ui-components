import React from 'react';

export const Card = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      <div className="text-gray-700">{content}</div>
    </div>
  );
};
