import { useText } from 'Hook/Style';
import React, { useMemo } from 'react';
import { Icons } from 'Type/Style';
import { cn } from 'utils';

import { TextInterface } from 'Interface/Styles';

interface IconInterface extends TextInterface {
  className?: string | undefined;
  name: Icons;
}

const Icon = ({ className, name, ...props }: IconInterface): JSX.Element => {
  const propsClasses = useText(props);
  const classes = useMemo(
    () => cn('bi', `bi-${name}`, propsClasses, className),
    [className, name, propsClasses]
  );

  return <i className={classes}></i>;
};

export default Icon;
