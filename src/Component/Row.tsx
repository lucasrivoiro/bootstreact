import { useClasses } from 'Hook/Style';
import React, { useMemo } from 'react';
import { cn } from 'utils';

import { ClassesInterface } from 'Interface/Styles';

interface Props extends ClassesInterface {
  children?: JSX.Element | JSX.Element[] | string | string[];
  className?: string | undefined;
}

const Row = ({ children, className, ...props }: Props): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () => cn('row', propsClasses, className),
    [className, propsClasses]
  );

  return <div className={classes}>{children}</div>;
};

export default Row;
