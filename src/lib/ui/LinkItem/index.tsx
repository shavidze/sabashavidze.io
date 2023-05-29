import { IconArrowUpRight } from '@tabler/icons-react';

type Props = {
  style: string;
  href: string;
  children: any;
};
const LinkItem = ({ style, href, children }: Props) => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={href} className={style}>
      <div className="flex items-center">
        {children}
        <div className="ml-3">Twitter</div>
      </div>
      <IconArrowUpRight />
    </a>
  );
};

export default LinkItem;
