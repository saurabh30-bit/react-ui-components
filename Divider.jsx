import React from 'react';

export const Divider = ({ text }) => (
  <div className="relative flex items-center py-4">
    <div className="flex-grow border-t border-gray-300"></div>
    {text && <span className="flex-shrink mx-4 text-gray-400 text-sm">{text}</span>}
    <div className="flex-grow border-t border-gray-300"></div>
  </div>
);
