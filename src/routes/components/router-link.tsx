import type { LinkProps } from 'react-router-dom';

import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import MuiLink from '@mui/material/Link';

// ----------------------------------------------------------------------

interface RouterLinkProps extends Omit<LinkProps, 'href' | 'to'> {
  href: string;
}

export const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
(props, ref) => {


 const { href, ...otherProps } =props;
 return(
  < MuiLink component={Link} ref={ref} to={href} {...otherProps} />
);
}
);
