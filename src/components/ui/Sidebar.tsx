//Utils(Images, Colors, Typography, Interfaces, etc.)
import { SidebarProps } from '../../lib/utils/interfaces';

function Sidebar({ links, className = '' }: SidebarProps) {
  return (
    <div className={`bg-gray-200 p-4 w-64 ${className}`}>
      <h2 className="font-semibold">Menu</h2>
      <ul className="flex flex-col space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
