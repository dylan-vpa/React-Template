//Utils(Images, Colors, Typography, Interfaces, etc.)
import { SkeletonLoaderProps } from '../../lib/utils/interfaces';

function SkeletonLoader({ width = '100%', height = '20px', className = '' }: SkeletonLoaderProps) {
  return (
    <div
      className={`animate-pulse bg-gray-300 ${className}`}
      style={{ width, height }}
    />
  );
}

export default SkeletonLoader;
