//Utils(Images, Colors, Typography, Interfaces, etc.)
import { DatePickerProps } from '../../lib/utils/interfaces';

export default function DatePicker({ className = '', ...props }: DatePickerProps) {
  return (
    <input
      type="date"
      className={`px-4 py-2 border border-gray-300 rounded w-full shadow-sm 
        focus:border-primary focus:ring-primary-light focus:outline-none focus:ring-1 transition duration-200 ${className}`}
      {...props}
    />
  );
}