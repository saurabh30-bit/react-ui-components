import React from 'react';

export const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-200';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button 
      onClick={onClick}
      className={\\ \ \\}
    >
      {children}
    </button>
  );
};
