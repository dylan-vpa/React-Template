//Utils(Images, Colors, Typography, Interfaces, etc.)
import { BadgeProps } from '../../lib/utils/interfaces';

function Badge({ text, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-full ${className}`}
    >
      {text}
    </span>
  );
}

export default Badge;
