import { useClasses } from 'Hook/Style';
import React, {
  FocusEventHandler,
  FormEventHandler,
  MouseEventHandler,
  ReactNode,
  useMemo,
} from 'react';
import { cn } from 'utils';

import { ClassesInterface } from 'Interface/Styles';

interface HeadingInterface extends ClassesInterface {
  children?: ReactNode | undefined;
  className?: string | undefined;
  contentEditable?: boolean | 'inherit' | undefined;
  onBlur?: FocusEventHandler<HTMLHeadingElement> | undefined;
  onChange?: FormEventHandler<HTMLHeadingElement> | undefined;
  onClick?: MouseEventHandler<HTMLHeadingElement> | undefined;
  onMouseDown?: MouseEventHandler<HTMLHeadingElement> | undefined;
  onMouseEnter?: MouseEventHandler<HTMLHeadingElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLHeadingElement> | undefined;
  onMouseMove?: MouseEventHandler<HTMLHeadingElement> | undefined;
  onMouseOut?: MouseEventHandler<HTMLHeadingElement> | undefined;
  onMouseOver?: MouseEventHandler<HTMLHeadingElement> | undefined;
  onMouseUp?: MouseEventHandler<HTMLHeadingElement> | undefined;
}

const H4 = ({
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
}: HeadingInterface): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () => cn(propsClasses, className),
    [className, propsClasses]
  );

  return (
    <h4
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
    </h4>
  );
};

export default H4;
