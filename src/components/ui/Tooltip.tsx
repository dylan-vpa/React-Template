//Utils(Images, Colors, Typography, Interfaces, etc.)
import { TooltipProps } from '../../lib/utils/interfaces';

function Tooltip({ content, children, className = '' }: TooltipProps) {
  return (
    <div className={`relative group ${className}`}>
      {children}
      <div className="absolute hidden group-hover:block w-max p-2 text-xs text-white bg-black rounded-md">
        {content}
      </div>
    </div>
  );
}

export default Tooltip;
