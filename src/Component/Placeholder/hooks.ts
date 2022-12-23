import { useMemo } from 'react';

import { PlaceholderProps } from './interfaces';
import { PlaceholderHookType, PlaceholderSizeType } from './types';

export const usePlaceholder = ({
  size,
  number,
}: PlaceholderProps): PlaceholderHookType => {
  const generate = (): number[] => {
    return Array(number).fill(1, 0, number);
  };

  const calculateSize = (): number => {
    if (size && (!number || number <= 1)) {
      return size;
    }

    return Math.floor(Math.random() * (12 - 8 + 1) + 8);
  };

  const placeholders = useMemo(generate, [number]);

  return [placeholders, calculateSize];
};

export const usePlaceholderClasses = (size?: PlaceholderSizeType): string => {
  return `placeholder col-${size || 12}`;
};
