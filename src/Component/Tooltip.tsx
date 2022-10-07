import { Tooltip as BsTooltip } from 'bootstrap';
import React, { useEffect, useRef } from 'react';

interface Props {
  children?: JSX.Element;
  title: string;
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

export const Tooltip = ({
  children,
  placement = 'top',
  trigger = 'hover',
  title,
}: Props) => {
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

  return <span ref={ref}>{children}</span>;
};
