//Utils(Images, Colors, Typography, Interfaces, etc.)
import { CheckboxProps } from "../../lib/utils/interfaces";

function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label
      className={`flex items-center cursor-pointer select-none ${className}`}
    >
      <input type="checkbox" className="hidden peer" {...props} />
      <span
        className="
          h-5 w-5
          flex items-center justify-center
          border-2 border-primary 
          rounded 
          transition-all
          duration-200
          peer-checked:bg-primary peer-checked:border-primary 
          peer-focus:ring-2 peer-focus:ring-primary-light peer-focus:ring-opacity-50
          peer-checked:active:scale-95
          hover:border-primary-dark active:bg-primary-dark
        "
      >
        <svg
          className="w-3 h-3 text-white opacity-100 transition-opacity duration-200 peer-checked:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </span>
      {label && <span className="ml-2 text-gray-700">{label}</span>}
    </label>
  );
}

export default Checkbox;
