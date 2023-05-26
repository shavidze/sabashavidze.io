import Link from 'next/link';
import { FC } from 'react';

type Props = {
  href: any;
  children: any;
};
const CustomLink: FC<Props> = (props) => {
  const { href, children } = props;
  if (href.startsWith('/')) {
    return <Link {...props}>{props.children}</Link>;
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <Link {...props}>{children}</Link>;
};
export default CustomLink;
