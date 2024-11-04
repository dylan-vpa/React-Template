//React
import { useState } from 'react';
//Utils(Images, Colors, Typography, Interfaces, etc.)
import { AccordionProps } from '../../lib/utils/interfaces';

function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`border ${className}`}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full text-left p-4 bg-gray-200"
            onClick={() => toggleItem(index)}
          >
            {item.label}
          </button>
          {openIndex === index && (
            <div className="p-4 border-t">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
