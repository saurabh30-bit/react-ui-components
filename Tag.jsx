import React from 'react';

const colors = { blue: 'bg-blue-100 text-blue-800', green: 'bg-green-100 text-green-800', red: 'bg-red-100 text-red-800', yellow: 'bg-yellow-100 text-yellow-800' };

export const Tag = ({ label, color = 'blue', onRemove }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[color]}`}>
    {label}
    {onRemove && <button onClick={onRemove} className="ml-1 inline-flex items-center">&times;</button>}
  </span>
);
