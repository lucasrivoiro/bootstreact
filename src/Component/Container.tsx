import { useClasses } from 'Hook/Style';
import React, { useMemo } from 'react';
import { cn } from 'utils';

import { ClassesInterface } from 'Interface/Styles';

interface Props extends ClassesInterface {
  children?: JSX.Element | JSX.Element[] | string | string[];
  className?: string | undefined;
  fluid?: boolean;
}

const Container = ({
  children,
  className,
  fluid,
  ...props
}: Props): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () => cn(`container${fluid ? '-fluid' : ''}`, propsClasses, className),
    [className, fluid, propsClasses]
  );

  return <div className={classes}>{children}</div>;
};

export default Container;
