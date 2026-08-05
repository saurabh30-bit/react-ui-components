import React from 'react';

export const NotificationToast = ({ message, type = 'info' }) => {
  const bg = type === 'error' ? 'bg-red-500' : type === 'success' ? 'bg-green-500' : 'bg-blue-500';
  return (
    <div className={\ixed bottom-4 right-4 text-white px-4 py-2 rounded shadow-lg \\}>
      {message}
    </div>
  );
};
