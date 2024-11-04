//Utils(Images, Colors, Typography, Interfaces, etc.)
import { RadioButtonProps } from '../../lib/utils/interfaces';

export default function RadioButton({ label, name, className = '', ...props }: RadioButtonProps) {
  return (
    <label className={`flex items-center cursor-pointer select-none ${className}`}>
      <input type="radio" name={name} className="hidden peer" {...props} />
      <span
        className="
          h-5 w-5 border-2 border-primary rounded-full flex items-center justify-center
          transition-all duration-200 peer-checked:bg-primary peer-focus:ring-2 
          peer-focus:ring-primary-light peer-focus:ring-opacity-50 shadow-sm
        "
      >
        <span className="hidden peer-checked:block h-3 w-3 bg-white rounded-full"></span>
      </span>
      <span className="ml-2 text-gray-700 font-medium">{label}</span>
    </label>
  );
}