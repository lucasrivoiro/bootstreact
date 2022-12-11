import { Tooltip as BsTooltip } from 'bootstrap';
import { RefObject, useEffect, useRef } from 'react';

import { TooltipProps } from './interfaces';

export const useTooltip = ({
  placement = 'top',
  title,
  trigger = 'hover',
}: TooltipProps): RefObject<HTMLSpanElement> => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      const t = new BsTooltip(ref.current, {
        placement,
        title,
        trigger,
      });
      return () => t.dispose();
    }
  }, [placement, title, trigger]);

  return ref;
};
