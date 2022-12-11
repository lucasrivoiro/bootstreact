import React from 'react';

import { useTooltip } from './hooks';
import { TooltipProps } from './interfaces';

const Tooltip = ({
  block = false,
  children,
  ...props
}: TooltipProps): JSX.Element => {
  const ref = useTooltip(props);

  return (
    <span ref={ref} className={block ? 'd-block' : 'd-inline-block'}>
      {children}
    </span>
  );
};

export default Tooltip;
