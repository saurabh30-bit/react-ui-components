import React from 'react';

export const EmptyState = ({ title, description, action }) => (
  <div className="text-center py-12">
    <h3 className="mt-2 text-sm font-semibold text-gray-900">{title}</h3>
    <p className="mt-1 text-sm text-gray-500">{description}</p>
    {action && <div className="mt-6">{action}</div>}
  </div>
);
