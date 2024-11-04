//Utils(Images, Colors, Typography, Interfaces, etc.)
import { BreadcrumbProps } from '../../lib/utils/interfaces';

function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`flex space-x-2 ${className}`}>
      {items.map((item, index) => (
        <span key={index}>
          <a href={item.link} className="text-blue-500 hover:underline">
            {item.label}
          </a>
          {index < items.length - 1 && <span> &gt; </span>}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb;
