import React from 'react';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <nav className="flex items-center justify-center space-x-2">
    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1} className="px-3 py-1 rounded border disabled:opacity-50">Prev</button>
    <span className="text-sm text-gray-700">{currentPage} / {totalPages}</span>
    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages} className="px-3 py-1 rounded border disabled:opacity-50">Next</button>
  </nav>
);
