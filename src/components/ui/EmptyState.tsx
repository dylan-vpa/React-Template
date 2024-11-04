//Utils(Images, Colors, Typography, Interfaces, etc.)
import { EmptyStateProps } from '../../lib/utils/interfaces';

function EmptyState({ message, illustration }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-gray-500">
      {illustration && <div className="mb-4">{illustration}</div>}
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;
