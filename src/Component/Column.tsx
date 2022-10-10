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
  offsetXs?: Size;
  offsetSm?: Size;
  offsetMd?: Size;
  offsetLg?: Size;
  offsetXl?: Size;
  offsetXxl?: Size;
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
  offsetXs,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  offsetXxl,
  ...props
}: Props): JSX.Element => {
  const propsClasses = useClasses(props);

  console.log(lg)

  const classes = useMemo(
    () =>
      cn(
        {
          [`${!xs && !sm && !md && !lg && !xl && !xxl ? 'col' : ''}`]: true,
          [`col-${xs}`]: xs,
          [`col-sm-${sm}`]: sm,
          [`col-md-${md}`]: md,
          [`col-lg-${lg}`]: lg,
          [`col-xl-${xl}`]: xl,
          [`col-xxl-${xxl}`]: xxl,
          [`offset-${offsetXs}`]: offsetXs,
          [`offset-sm-${offsetSm}`]: offsetSm,
          [`offset-md-${offsetMd}`]: offsetMd,
          [`offset-lg-${offsetLg}`]: offsetLg,
          [`offset-xl-${offsetXl}`]: offsetXl,
          [`offset-xxl-${offsetXxl}`]: offsetXxl,
        },
        propsClasses,
        className
      ),
    [
      className,
      lg,
      md,
      propsClasses,
      sm,
      xl,
      xs,
      xxl,
      offsetXs,
      offsetSm,
      offsetMd,
      offsetLg,
      offsetXl,
      offsetXxl,
    ]
  );

  return <div className={classes}>{children}</div>;
};

export default Column;
