import { useBlock } from 'Hook/Style';
import React from 'react';
import { cx } from 'utils';

import { BlockInterface } from 'Interface/Styles';

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
}: BlockInterface): JSX.Element => {
  const classes = useBlock(props);

  return (
    <div
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
    </div>
  );
};

export default Div;
