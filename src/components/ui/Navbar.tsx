//Utils(Images, Colors, Typography, Interfaces, etc.)
import { NavbarProps } from '../../lib/utils/interfaces';

function Navbar({ title, links, className = '' }: NavbarProps) {
  return (
    <nav className={`bg-gray-800 text-white p-4 ${className}`}>
      <h1 className="text-lg font-bold">{title}</h1>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
