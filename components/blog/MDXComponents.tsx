import Link from 'next/link';

import ProsCard from './ProsCard';
import ConsCard from './ConsCard';
import Step from './Step';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  ConsCard,
  ProsCard,
  Step
};

export default MDXComponents;
