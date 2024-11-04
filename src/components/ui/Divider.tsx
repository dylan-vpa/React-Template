//Utils(Images, Colors, Typography, Interfaces, etc.)
import { DividerProps } from '../../lib/utils/interfaces';

function Divider({ className = '' }: DividerProps) {
  return <hr className={`border-t border-gray-300 ${className}`} />;
}

export default Divider;
