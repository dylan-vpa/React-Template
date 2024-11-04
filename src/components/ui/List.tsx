//Utils(Images, Colors, Typography, Interfaces, etc.)
import { ListProps } from '../../lib/utils/interfaces';

function List({ items, className = '' }: ListProps) {
  return (
    <ul className={`list-disc pl-5 ${className}`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
