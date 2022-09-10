import { useText } from 'Hook/Style';
import React from 'react';
import { cx } from 'utils';

import { TextInterface } from 'Interface/Styles';

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
  ...props
}: TextInterface): JSX.Element => {
  const classes = useText(props);

  return (
    <p
      className={cx(classes, className)}
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
    </p>
  );
};

export default P;
