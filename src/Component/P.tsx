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

import Placeholder from './Placeholder';
import { PlaceholderInterface } from './Placeholder/interfaces';

interface ParagraphInterface extends ClassesInterface, PlaceholderInterface {
  children?: ReactNode | undefined;
  className?: string | undefined;
  contentEditable?: boolean | 'inherit' | undefined;
  onBlur?: FocusEventHandler<HTMLParagraphElement> | undefined;
  onChange?: FormEventHandler<HTMLParagraphElement> | undefined;
  onClick?: MouseEventHandler<HTMLParagraphElement> | undefined;
  onMouseDown?: MouseEventHandler<HTMLParagraphElement> | undefined;
  onMouseEnter?: MouseEventHandler<HTMLParagraphElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLParagraphElement> | undefined;
  onMouseMove?: MouseEventHandler<HTMLParagraphElement> | undefined;
  onMouseOut?: MouseEventHandler<HTMLParagraphElement> | undefined;
  onMouseOver?: MouseEventHandler<HTMLParagraphElement> | undefined;
  onMouseUp?: MouseEventHandler<HTMLParagraphElement> | undefined;
}

const P = ({
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
  placeholderSize,
  numberOfPlaceholders,
  ...props
}: ParagraphInterface): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () => cn(propsClasses, 'placeholder-glow', className),
    [className, propsClasses]
  );

  return (
    <p
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
      {children ? (
        children
      ) : (
        <Placeholder size={placeholderSize} number={numberOfPlaceholders} />
      )}
    </p>
  );
};

export default P;
