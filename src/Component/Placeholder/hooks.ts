import { useMemo } from 'react';

import { PlaceholderProps } from './interfaces';

export const usePlaceholder = ({
  size,
  number,
}: PlaceholderProps): [number[], () => number] => {
  const placeholders = useMemo(() => {
    return Array(number).fill(1, 0, number);
  }, [number]);

  const calculateSize = (): number => {
    if (size && number == 1) {
      return size;
    }

    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
  };

  return [placeholders, calculateSize];
};
