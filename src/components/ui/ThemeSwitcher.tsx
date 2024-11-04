//Utils(Images, Colors, Typography, Interfaces, etc.)
import { ThemeSwitcherProps } from '../../lib/utils/interfaces';

function ThemeSwitcher({ currentTheme, onChange }: ThemeSwitcherProps) {
  return (
    <div>
      <button
        className={`p-2 ${currentTheme === 'light' ? 'bg-gray-300' : 'bg-gray-700'} text-white`}
        onClick={() => onChange(currentTheme === 'light' ? 'dark' : 'light')}
      >
        Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
