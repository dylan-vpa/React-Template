//Utils(Images, Colors, Typography, Interfaces, etc.)
import { TextInputProps } from "../../lib/utils/interfaces";

export default function TextInput({
  className = "",
  ...props
}: TextInputProps) {
  return (
    <input
      type="text"
      className={`border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-150 ${className}`}
      {...props}
    />
  );
}
