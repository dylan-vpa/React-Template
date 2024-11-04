//Utils(Images, Colors, Typography, Interfaces, etc.)
import { AlertProps } from '../../lib/utils/interfaces';

function Alert({ message, type = 'info', className = '' }: AlertProps) {
  const alertTypes: Record<string, string> = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className={`p-4 rounded-md ${alertTypes[type]} ${className}`}>
      {message}
    </div>
  );
}

export default Alert;
