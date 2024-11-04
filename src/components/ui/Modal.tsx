//Utils(Images, Colors, Typography, Interfaces, etc.)
import { ModalProps } from '../../lib/utils/interfaces';
import { X } from 'lucide-react'; 

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>
        <h2 className="text-lg font-bold">{title}</h2>
        <div>{children}</div>
        <button onClick={onClose} className="mt-4 px-4 py-2 text-white bg-blue-500 rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
