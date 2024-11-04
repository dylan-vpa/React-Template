//Utils(Images, Colors, Typography, Interfaces, etc.)
import { TextAreaProps } from "../../lib/utils/interfaces";

export default function TextArea({ className = "", ...props }: TextAreaProps) {
  return (
    <textarea
      className={`border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-150 ${className}`}
      {...props}
    />
  );
}
