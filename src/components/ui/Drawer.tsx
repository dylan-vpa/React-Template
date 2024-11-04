//Utils(Images, Colors, Typography, Interfaces, etc.)
import { DrawerProps } from '../../lib/utils/interfaces';

function Drawer({ isOpen, onClose, children }: DrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 w-64 bg-white h-full shadow-lg p-4">
        <button className="text-red-500" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Drawer;
