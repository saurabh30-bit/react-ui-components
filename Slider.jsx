import React from 'react';

export const Slider = ({ min, max, value, onChange }) => (
  <input type="range" min={min} max={max} value={value} onChange={onChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
);
