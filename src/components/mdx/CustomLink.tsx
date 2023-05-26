import Link from 'next/link';

type Props = {
  href: any;
  children: any;
};
const CustomLink = (props: Props) => {
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
