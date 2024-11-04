//Utils(Images, Colors, Typography, Interfaces, etc.)
import { ColorPickerProps } from '../../lib/utils/interfaces';

function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2"
    />
  );
}

export default ColorPicker;
