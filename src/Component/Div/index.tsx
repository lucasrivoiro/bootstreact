import { useBlock } from 'Hook/Style';
import React from 'react';

import { BlockInterface } from 'Interface/Styles';

const Div = ({ children, ...props }: BlockInterface): JSX.Element => {
  const classes = useBlock(props);

  return <div className={classes}>{children}</div>;
};

export default Div;
