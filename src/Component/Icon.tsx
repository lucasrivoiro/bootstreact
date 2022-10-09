import { useClasses } from 'Hook/Style';
import React, { useMemo } from 'react';
import { Icons } from 'Type/Style';
import { cn } from 'utils';

import { ClassesInterface } from 'Interface/Styles';

interface IconInterface extends ClassesInterface {
  className?: string | undefined;
  name: Icons;
}

const Icon = ({ className, name, ...props }: IconInterface): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () => cn('bi', `bi-${name}`, propsClasses, className),
    [className, name, propsClasses]
  );

  return <i className={classes}></i>;
};

export default Icon;
