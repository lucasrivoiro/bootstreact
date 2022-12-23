import React from 'react';
import { cn } from 'utils';

import Span from 'Component/Span';

import { BadgeProps } from './interfaces';

const Badge = ({ children, className, ...props }: BadgeProps): JSX.Element => (
  <Span className={cn('badge', className)} {...props}>
    {children}
  </Span>
);

Badge.defaultProps = {
  bgColor: 'primary',
};

export default Badge;
