//Utils(Images, Colors, Typography, Interfaces, etc.)
import { SelectProps } from '../../lib/utils/interfaces';

export default function Select({ options, className = '', ...props }: SelectProps) {
  return (
    <select
      className={`block w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded 
        focus:border-primary focus:ring-primary-light focus:outline-none focus:ring-1 shadow-sm 
        transition duration-200 ${className}`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}