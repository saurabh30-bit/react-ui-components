import React from 'react';

export const Alert = ({ message, type = 'info' }) => {
  const types = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800'
  };
  return (
    <div className={\p-4 rounded-md \\}>
      {message}
    </div>
  );
};
