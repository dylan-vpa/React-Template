//Utils(Images, Colors, Typography, Interfaces, etc.)
import { TimePickerProps } from '../../lib/utils/interfaces';

export default function TimePicker({ className = '', ...props }: TimePickerProps) {
  return (
    <input
      type="time"
      className={`px-4 py-2 border border-gray-300 rounded w-full shadow-sm 
        focus:border-primary focus:ring-primary-light focus:outline-none focus:ring-1 transition duration-200 ${className}`}
      {...props}
    />
  );
}