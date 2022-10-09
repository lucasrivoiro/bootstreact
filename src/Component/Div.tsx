import { useClasses } from 'Hook/Style';
import React, {
  FocusEventHandler,
  FormEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { useMemo } from 'react';
import { cn } from 'utils';

import { ClassesInterface } from 'Interface/Styles';

interface DivInterface extends ClassesInterface {
  children?: ReactNode | undefined;
  className?: string | undefined;
  contentEditable?: boolean | 'inherit' | undefined;
  onBlur?: FocusEventHandler<HTMLDivElement> | undefined;
  onChange?: FormEventHandler<HTMLDivElement> | undefined;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
  onMouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
  onMouseMove?: MouseEventHandler<HTMLDivElement> | undefined;
  onMouseOut?: MouseEventHandler<HTMLDivElement> | undefined;
  onMouseOver?: MouseEventHandler<HTMLDivElement> | undefined;
  onMouseUp?: MouseEventHandler<HTMLDivElement> | undefined;
}

const Div = ({
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
}: DivInterface): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () => cn(propsClasses, className),
    [className, propsClasses]
  );

  return (
    <div
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
    </div>
  );
};

export default Div;
