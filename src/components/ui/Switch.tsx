//Utils(Images, Colors, Typography, Interfaces, etc.)
import { SwitchProps } from '../../lib/utils/interfaces';

export default function Switch({ className = '', ...props }: SwitchProps) {
  return (
    <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input type="checkbox" className="sr-only peer" {...props} />
      <div
        className="
          w-12 h-6 bg-gray-300 rounded-full transition-all duration-200
          peer-focus:ring-2 peer-focus:ring-primary-light peer-checked:bg-primary
        "
      ></div>
      <div
        className="
          absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform 
          duration-200 transform peer-checked:translate-x-6
        "
      ></div>
    </label>
  );
}