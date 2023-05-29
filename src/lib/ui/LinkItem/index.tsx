import { IconArrowUpRight } from '@tabler/icons-react';

type Props = {
  style: string;
  href: string;
  text: string;
  children: any;
};
const LinkItem = ({ style, href, children, text }: Props) => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={href} className={style}>
      <div className="flex items-center">
        {children}
        <div className="ml-3">{text}</div>
      </div>
      <IconArrowUpRight />
    </a>
  );
};

export default LinkItem;
