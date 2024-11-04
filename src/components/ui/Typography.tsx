//Utils(Images, Colors, Typography, Interfaces, etc.)
import { TypographyProps } from '../../lib/utils/interfaces';

function Typography({ variant, children }: TypographyProps) {
  switch (variant) {
    case 'h1':
      return <h1 className="text-4xl font-bold">{children}</h1>;
    case 'h2':
      return <h2 className="text-3xl font-semibold">{children}</h2>;
    case 'h3':
      return <h3 className="text-2xl font-medium">{children}</h3>;
    case 'p':
      return <p className="text-base">{children}</p>;
    default:
      return <p>{children}</p>;
  }
}

export default Typography;
