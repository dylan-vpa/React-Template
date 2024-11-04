//Utils(Images, Colors, Typography, Interfaces, etc.)
import { SearchInputProps } from '../../lib/utils/interfaces';
import { Search } from 'lucide-react';

export default function SearchInput({
  className = '',
  ...props
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        className="border border-gray-300 rounded-lg pl-10 pr-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-light"
        placeholder="Search..."
        {...props}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
    </div>
  );
}
