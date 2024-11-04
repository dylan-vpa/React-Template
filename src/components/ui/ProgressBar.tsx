//Utils(Images, Colors, Typography, Interfaces, etc.)
import { ProgressBarProps } from '../../lib/utils/interfaces';

function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  return (
    <div className={`relative w-full h-2 bg-gray-200 rounded ${className}`}>
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
