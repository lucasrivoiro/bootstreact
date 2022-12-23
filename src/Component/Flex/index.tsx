import React from 'react';

import Div from 'Component/Div';

import { FlexProps } from './interfaces';

const Flex = ({
  column,
  center,
  children,
  ...props
}: FlexProps): JSX.Element => (
  <Div
    d="flex"
    flex={column ? 'column' : 'row'}
    justifyContent={center ? 'center' : undefined}
    alignItems={center ? 'center' : undefined}
    {...props}
  >
    {children}
  </Div>
);

Flex.defaultProps = {
  flexWrap: true,
  gap: 2,
};

export default Flex;
