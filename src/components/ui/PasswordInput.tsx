//Utils(Images, Colors, Typography, Interfaces, etc.)
import { PasswordInputProps } from "../../lib/utils/interfaces";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Importar íconos de Lucide React

export default function PasswordInput({
  label = "",
  className = "",
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 text-gray-700">{label}</label>}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-light"
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-500" />
          ) : (
            <Eye className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
}
