import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const getPaginationItems = () => {
    if (totalPages <= 5) {
      return range(1, totalPages);
    }
    
    const items = [];
    if (currentPage > 3) {
      items.push(1);
      items.push('...');
    }

    const startPage = Math.max(currentPage - 1, 2);
    const endPage = Math.min(currentPage + 1, totalPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      items.push(i);
    }

    if (currentPage < totalPages - 2) {
      items.push('...');
      items.push(totalPages);
    }

    return items;
  };

  const paginationItems = getPaginationItems();

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`px-4 py-2  rounded-md ${currentPage === 1 ? 'bg-gray-300' : 'bg-white'}`}
      >
        &lt;&lt;
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2  rounded-md ${currentPage === 1 ? 'bg-gray-300' : 'bg-white'}`}
      >
        &lt;
      </button>
      {paginationItems.map((item, index) => (
        item === '...' ? (
          <span key={index} className="px-4 py-2  rounded-md bg-white">...</span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(item)}
            className={`px-4 py-2  rounded-md ${item === currentPage ? 'bg-[#ff6600] text-white' : 'bg-white'}`}
          >
            {item}
          </button>
        )
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2  rounded-md ${currentPage === totalPages ? 'bg-gray-300' : 'bg-white'}`}
      >
        &gt;
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2  rounded-md ${currentPage === totalPages ? 'bg-gray-300' : 'bg-white'}`}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
