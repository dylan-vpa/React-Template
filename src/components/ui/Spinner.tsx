//Utils(Images, Colors, Typography, Interfaces, etc.)
import { SpinnerProps } from '../../lib/utils/interfaces';

function Spinner({ size = 40, color = 'blue' }: SpinnerProps) {
  return (
    <div
      className="animate-spin border-t-4 border-b-4"
      style={{
        width: size,
        height: size,
        borderColor: `${color} transparent`,
      }}
    />
  );
}

export default Spinner;
