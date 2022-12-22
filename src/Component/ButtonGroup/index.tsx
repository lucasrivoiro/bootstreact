import React from 'react';

import { ButtonGroupProps } from './interfaces';

const ButtonGroup = ({ children }: ButtonGroupProps): JSX.Element => (
  <div className="btn-group">{children}</div>
);

export default ButtonGroup;
