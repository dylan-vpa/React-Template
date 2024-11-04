//Utils(Images, Colors, Typography, Interfaces, etc.)
import { StackProps } from '../../lib/utils/interfaces';

function Stack({ children, className = '', spacing = 2 }: StackProps) {
  return (
    <div className={`flex flex-col space-y-${spacing} ${className}`}>
      {children}
    </div>
  );
}

export default Stack;
