import React from 'react';

export const Skeleton = ({ width = '100%', height = '1rem', rounded = false }) => (
  <div
    className={`animate-pulse bg-gray-200 ${rounded ? 'rounded-full' : 'rounded'}`}
    style={{ width, height }}
  />
);
