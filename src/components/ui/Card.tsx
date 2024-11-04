//Utils(Images, Colors, Typography, Interfaces, etc.)
import { CardProps } from '../../lib/utils/interfaces';

function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
