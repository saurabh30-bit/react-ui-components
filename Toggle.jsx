import React from 'react';

export const Toggle = ({ enabled, setEnabled }) => (
  <div className={\elative inline-flex items-center h-6 rounded-full w-11 cursor-pointer transition-colors \\} onClick={() => setEnabled(!enabled)}>
    <span className={\inline-block w-4 h-4 transform bg-white rounded-full transition-transform \\} />
  </div>
);
