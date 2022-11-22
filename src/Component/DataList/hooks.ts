import { useMemo } from 'react';
import { cn } from 'utils';

import { DataListColumnProps } from './interfaces';

export const useDataListColumnClasses = (
  defaultClass: string,
  {
    hideXs = false,
    hideSm = false,
    hideMd = false,
    hideLg = false,
    hideXl = false,
    hideXxl = false,
  }: Partial<DataListColumnProps>
): string => {
  const classes = useMemo(() => {
    return cn(defaultClass, {
      'd-none': hideXs,
      'd-sm-none': hideSm,
      'd-md-none': hideMd,
      'd-lg-none': hideLg,
      'd-xl-none': hideXl,
      'd-xxl-none': hideXxl,
      'd-block': !hideXs,
      'd-sm-block': !hideSm,
      'd-md-block': !hideMd,
      'd-lg-block': !hideLg,
      'd-xl-block': !hideXl,
      'd-xxl-block': !hideXxl,
    });
  }, [defaultClass, hideLg, hideMd, hideSm, hideXl, hideXs, hideXxl]);

  return classes;
};
