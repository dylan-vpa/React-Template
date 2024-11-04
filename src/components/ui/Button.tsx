//Utils(Images, Colors, Typography, Interfaces, etc.)
import { ButtonProps } from '../../lib/utils/interfaces';

export default function Button({
  variant = 'primary',
  size = 'normal',
  type = 'button',
  fullWidth = false, 
  startIcon = null,
  endIcon = null,
  children,
  className = '',
}: ButtonProps) {
  const variants: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-primary opacity-90 hover:opacity-100 active:opacity-80',
    secondary: 'bg-secondary text-white hover:bg-secondary opacity-90 hover:opacity-100 active:opacity-80',
    danger: 'bg-red-500 text-white opacity-90 hover:opacity-100 active:opacity-80',
    success: 'bg-green-500 text-white opacity-90 hover:opacity-100 active:opacity-80',
    ghost: 'bg-transparent border border-transparent text-primary opacity-90 active:opacity-80',
  };

  const sizes: Record<string, string> = {
    small: 'px-3 py-1.5 text-sm font-medium',
    normal: 'px-5 py-2 text-base font-medium',
    large: 'px-6 py-3 text-lg font-semibold',
  };

  const buttonStyles = `
    ${variants[variant]} 
    ${sizes[size]} 
    rounded-lg 
    focus:outline-none 
    ${variant !== 'ghost' ? 'focus:ring-2 focus:ring-primary-light' : ''}
    transition 
    duration-150 
    transform 
    active:scale-95 
    ${fullWidth ? 'w-full' : ''} // Agrega clase para ancho completo
    ${className}
  `;

  return (
    <button type={type} className={buttonStyles}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}