//React
import { useState } from 'react';
//Utils(Images, Colors, Typography, Interfaces, etc.)
import { PopoverProps } from '../../lib/utils/interfaces';

function Popover({ content, children, className = '' }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && (
        <div className="absolute z-10 p-4 mt-2 text-sm text-white bg-black rounded-md">
          {content}
        </div>
      )}
    </div>
  );
}

export default Popover;
