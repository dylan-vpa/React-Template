//Utils(Images, Colors, Typography, Interfaces, etc.)
import { MenuProps } from '../../lib/utils/interfaces';

function Menu({ items, className = '' }: MenuProps) {
  return (
    <div className={`relative ${className}`}>
      <button className="bg-blue-500 text-white p-2 rounded">Menu</button>
      <ul className="absolute mt-2 bg-white border rounded shadow-lg">
        {items.map((item) => (
          <li key={item.label}>
            <button className="block w-full text-left p-2 hover:bg-gray-200" onClick={item.onClick}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
