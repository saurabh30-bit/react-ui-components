import React from 'react';

export const Badge = ({ text, color = 'blue' }) => (
  <span className={\inline-block px-2 py-1 text-xs font-semibold text-\-800 bg-\-100 rounded-full\}>
    {text}
  </span>
);
