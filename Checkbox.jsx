import React from 'react';

export const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex items-center space-x-3">
    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked={checked} onChange={onChange} />
    <span className="text-gray-900 font-medium">{label}</span>
  </label>
);
