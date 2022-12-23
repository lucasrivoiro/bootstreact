import { Popover as BsPopover } from 'bootstrap';
import { useEffect, useRef } from 'react';

import { PopoverProps } from './interfaces';
import { PopoverHookType } from './types';

export const usePopover = ({
  content,
  placement,
  trigger,
  title,
}: PopoverProps): PopoverHookType => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      const t = new BsPopover(ref.current, {
        content,
        placement,
        title,
        trigger,
      });
      return () => t.dispose();
    }
  }, [content, placement, title, trigger]);

  return ref;
};
