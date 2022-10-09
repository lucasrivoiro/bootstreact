import { useClasses } from 'Hook/Style';
import React, { useMemo } from 'react';
import { cn } from 'utils';

import { ClassesInterface } from 'Interface/Styles';

type Cols = 1 | 2 | 3 | 4;

interface Props extends ClassesInterface {
  children?: JSX.Element | JSX.Element[] | string | string[];
  className?: string | undefined;
  cols?: Cols;
  colsSm?: Cols;
  colsMd?: Cols;
  colsLg?: Cols;
  colsXl?: Cols;
  colsXxl?: Cols;
}

const Row = ({
  children,
  className,
  cols,
  colsSm,
  colsMd,
  colsLg,
  colsXl,
  colsXxl,
  ...props
}: Props): JSX.Element => {
  const propsClasses = useClasses(props);

  const classes = useMemo(
    () =>
      cn(
        'row',
        {
          [`row-cols-${cols}`]: cols,
          [`row-cols-sm-${cols}`]: colsSm,
          [`row-cols-md-${cols}`]: colsMd,
          [`row-cols-lg-${cols}`]: colsLg,
          [`row-cols-xl-${cols}`]: colsXl,
          [`row-cols-xxl-${cols}`]: colsXxl,
        },
        propsClasses,
        className
      ),
    [className, cols, colsLg, colsMd, colsSm, colsXl, colsXxl, propsClasses]
  );

  return <div className={classes}>{children}</div>;
};

export default Row;
