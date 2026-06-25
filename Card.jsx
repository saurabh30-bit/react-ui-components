import React from 'react';

export const Card = ({ title, description, image, footer }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {image && (
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-600 text-base">
          {description}
        </p>
      </div>
      {footer && (
        <div className="px-6 pt-4 pb-2 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};
