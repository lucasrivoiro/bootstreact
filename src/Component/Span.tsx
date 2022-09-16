import { useText } from 'Hook/Style';
import React, {
  FocusEventHandler,
  FormEventHandler,
  MouseEventHandler,
  ReactNode,
  useMemo,
} from 'react';
import { cn } from 'utils';

import { TextInterface } from 'Interface/Styles';

interface SpanInterface extends TextInterface {
  children?: ReactNode | undefined;
  className?: string | undefined;
  contentEditable?: boolean | 'inherit' | undefined;
  onBlur?: FocusEventHandler<HTMLSpanElement> | undefined;
  onChange?: FormEventHandler<HTMLSpanElement> | undefined;
  onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
  onMouseDown?: MouseEventHandler<HTMLSpanElement> | undefined;
  onMouseEnter?: MouseEventHandler<HTMLSpanElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLSpanElement> | undefined;
  onMouseMove?: MouseEventHandler<HTMLSpanElement> | undefined;
  onMouseOut?: MouseEventHandler<HTMLSpanElement> | undefined;
  onMouseOver?: MouseEventHandler<HTMLSpanElement> | undefined;
  onMouseUp?: MouseEventHandler<HTMLSpanElement> | undefined;
}

const Span = ({
  children,
  className,
  contentEditable,
  onBlur,
  onChange,
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  ...props
}: SpanInterface): JSX.Element => {
  const propsClasses = useText(props);
  const classes = useMemo(
    () => cn(propsClasses, className),
    [className, propsClasses]
  );

  return (
    <span
      className={classes}
      contentEditable={contentEditable}
      onBlur={onBlur}
      onChange={onChange}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
    >
      {children}
    </span>
  );
};

export default Span;
