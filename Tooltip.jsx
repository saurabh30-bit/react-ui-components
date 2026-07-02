import React, { useState } from 'react';

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && (
        <div className="absolute z-10 p-2 text-sm text-white bg-black rounded-lg shadow-lg -top-10 left-1/2 transform -translate-x-1/2">
          {text}
        </div>
      )}
    </div>
  );
};
