//Components
import Image from './Image';
//Utils(Images, Colors, Typography, Interfaces, etc.)
import { AvatarProps } from '../../lib/utils/interfaces';

function Avatar({ src, alt = 'Avatar', initials, className = '', size = 40 }: AvatarProps) {
  return (
    <figure
      className={`flex items-center justify-center rounded-full overflow-hidden bg-gray-200 ${className}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover"
        />
      ) : (
        <span className="text-gray-600 font-semibold text-xl">{initials}</span>
      )}
    </figure>
  );
}

export default Avatar;
