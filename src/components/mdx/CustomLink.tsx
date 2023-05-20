import Link from 'next/link';
import { FC } from 'react';

type Props = {
  href: any;
  children: any;
};
const CustomLink: FC<Props> = ({ href, children }) => {
  if (href.startsWith('#')) {
    return <a href={href} {...children} />;
  }

  return (
    <Link href={href} {...children}>
      {children}
    </Link>
  );
};
export default CustomLink;
