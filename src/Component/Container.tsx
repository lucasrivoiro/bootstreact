import { useClasses } from 'Hook/Style';
import React, { useMemo } from 'react';
import { cn } from 'utils';

interface Props {
  children?: JSX.Element | JSX.Element[] | string | string[];
  className?: string | undefined;
}

const Container = ({ children, className, ...props }: Props): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () => cn('container', propsClasses, className),
    [className, propsClasses]
  );

  return <div className={classes}>{children}</div>;
};

export default Container;
