import { useState } from "react";
import { ImageProps } from "../../lib/utils/interfaces";

export default function Image({
  src,
  alt,
  width,
  height,
  className = "",
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{ width, height }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`object-cover w-full h-full transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
