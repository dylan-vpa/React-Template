//Utils(Images, Colors, Typography, Interfaces, etc.)
import { PaginationProps } from '../../lib/utils/interfaces';

function Pagination({ currentPage, totalPages, onPageChange, className = '' }: PaginationProps) {
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <div className={`flex space-x-2 ${className}`}>
      {pages.map((page) => (
        <button
          key={page}
          className={`p-2 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
