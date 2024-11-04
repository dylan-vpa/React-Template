//Utils(Images, Colors, Typography, Interfaces, etc.)
import { GridProps } from '../../lib/utils/interfaces';

function Grid({ children, className = '', columns = 2 }: GridProps) {
  return (
    <div className={`grid grid-cols-${columns} gap-4 ${className}`}>
      {children}
    </div>
  );
}

export default Grid;
