//Utils(Images, Colors, Typography, Interfaces, etc.)
import { FormProps } from "../../lib/utils/interfaces";

export default function Form({
  className = "",
  onSubmit,
  children,
}: FormProps) {
  return (
    <form className={`space-y-4 ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
