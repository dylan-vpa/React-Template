//Utils(Images, Colors, Typography, Interfaces, etc.)
import { SliderProps } from '../../lib/utils/interfaces';

export default function Slider({ className = '', ...props }: SliderProps) {
  return (
    <input
      type="range"
      className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
        accent-primary focus:outline-none hover:bg-primary-light transition duration-200 ${className}`}
      {...props}
    />
  );
}