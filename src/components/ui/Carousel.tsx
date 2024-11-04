//Utils(Images, Colors, Typography, Interfaces, etc.)
import  { useState } from 'react';
import { CarouselProps } from '../../lib/utils/interfaces';

function Carousel({ items, className = '' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`relative ${className}`}>
      <button onClick={prevItem} className="absolute left-0 bg-white p-2">
        &#8249;
      </button>
      <div className="flex justify-center">
        {items[currentIndex]}
      </div>
      <button onClick={nextItem} className="absolute right-0 bg-white p-2">
        &#8250;
      </button>
    </div>
  );
}

export default Carousel;
