//React
import { useEffect, useState } from 'react';
//Utils(Images, Colors, Typography, Interfaces, etc.)
import { ToastProps } from '../../lib/utils/interfaces';
import { X } from 'lucide-react'; 

function Toast({ message, className = '', onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, 5000); // 5 segundos

    return () => clearTimeout(timer); 
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return null; 

  return (
    <div
      className={`fixed bottom-5 right-5 p-4 bg-gray-800 text-white rounded-lg z-50 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button className="ml-2 text-gray-300 hover:text-white" onClick={handleClose}>
          <X />
        </button>
      </div>
    </div>
  );
}

export default Toast;
