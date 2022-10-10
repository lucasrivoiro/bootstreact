import { Popover as BsPopover } from 'bootstrap';
import React, { useEffect, useRef } from 'react';

interface Props {
  children?: JSX.Element;
  content: string;
  title?: string;
  placement?: 'top' | 'bottom' | 'right' | 'left';
  trigger?:
    | 'click'
    | 'hover'
    | 'focus'
    | 'manual'
    | 'click hover'
    | 'click focus'
    | 'hover focus'
    | 'click hover focus';
}

export const Popover = ({
  children,
  content,
  placement = 'top',
  trigger = 'click',
  title = '',
}: Props) => {
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

  return <span ref={ref}>{children}</span>;
};
