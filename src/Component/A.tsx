import { useClasses } from 'Hook/Style';
import React, {
  FocusEventHandler,
  FormEventHandler,
  MouseEventHandler,
  ReactNode,
  useMemo,
} from 'react';
import { Link } from 'react-router-dom';
import { cn } from 'utils';

import { ClassesInterface } from 'Interface/Styles';

export interface AnchorInterface extends ClassesInterface {
  children?: ReactNode | undefined;
  className?: string | undefined;
  contentEditable?: boolean | 'inherit' | undefined;
  onBlur?: FocusEventHandler<HTMLAnchorElement> | undefined;
  onChange?: FormEventHandler<HTMLAnchorElement> | undefined;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onMouseDown?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onMouseMove?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onMouseOut?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onMouseOver?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onMouseUp?: MouseEventHandler<HTMLAnchorElement> | undefined;
  to?: string;
  target?: '_blank' | '_self' | '_parent';
}

const A = ({
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
  to = '',
  target,
  ...props
}: AnchorInterface): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () => cn(propsClasses, className),
    [className, propsClasses]
  );

  return (
    <Link
      to={to}
      target={target}
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
    </Link>
  );
};

export default A;
