import Link from 'next/link';

const CustomLink = (props: any) => {
  const { href, children } = props;
  if (href.startsWith('/')) {
    return <Link {...props}>{props.children}</Link>;
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return (
    <Link target="_blank" href={href} {...props}>
      {children}
    </Link>
  );
};
export default CustomLink;
