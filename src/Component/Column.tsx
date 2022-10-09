import { useClasses } from 'Hook/Style';
import React, { useMemo } from 'react';
import { cn } from 'utils';

import { ClassesInterface } from 'Interface/Styles';

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props extends ClassesInterface {
  children?: JSX.Element | JSX.Element[] | string | string[];
  className?: string | undefined;
  xs?: Size;
  sm?: Size;
  md?: Size;
  lg?: Size;
  xl?: Size;
  xxl?: Size;
}

const Column = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  ...props
}: Props): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () =>
      cn(
        {
          [`col${xs ? `-${xs}` : ''}`]:
            !xs || (!xs && !sm && !md && !lg && !xl && !xxl),
          [`col-sm-${sm}`]: sm,
          [`col-md-${sm}`]: md,
          [`col-lg-${sm}`]: lg,
          [`col-xl-${sm}`]: xl,
          [`col-xxl-${sm}`]: xxl,
        },
        propsClasses,
        className
      ),
    [className, lg, md, propsClasses, sm, xl, xs, xxl]
  );

  return <div className={classes}>{children}</div>;
};

export default Column;
