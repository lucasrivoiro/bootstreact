import { useClasses } from 'Hook/Style';
import React, { useMemo } from 'react';
import { cn } from 'utils';

import { IconInterface } from './interfaces';

const Icon = ({ className, name, ...props }: IconInterface): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () => cn('bi', `bi-${name}`, propsClasses, className),
    [className, name, propsClasses]
  );

  return <i className={classes}></i>;
};

export default Icon;
