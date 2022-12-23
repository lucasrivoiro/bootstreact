import React from 'react';

import { usePopover } from './hooks';
import { PopoverProps } from './interfaces';

const Popover = ({ children, block, ...props }: PopoverProps) => {
  const ref = usePopover(props);

  return (
    <span ref={ref} className={block ? 'd-block' : 'd-inline-block'}>
      {children}
    </span>
  );
};

Popover.defaultProps = {
  placement: 'bottom',
  trigger: 'hover',
  title: '',
  block: false,
};

export default Popover;
