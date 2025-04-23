type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLink ({ href, children }: ExternalLinkProps) {
  return (
    <a 
      href={href} 
      target='_blank' 
      rel='noopener noreferrer' 
      className='text-blue-600 hover:underline inline-flex items-center gap-1'
    >
      {children}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-4 w-4'
      >
        <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
        <polyline points='15 3 21 3 21 9' />
        <line x1='10' y1='14' x2='21' y2='3' />
      </svg>
    </a>
  );
};