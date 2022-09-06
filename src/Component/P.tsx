import { useText } from 'Hook/Style';
import React from 'react';

import { TextInterface } from 'Interface/Styles';

const P = ({ children, ...props }: TextInterface): JSX.Element => {
  const classes = useText(props);

  return <p className={classes}>{children}</p>;
};

export default P;
