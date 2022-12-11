import { useMemo } from 'react';

import { PlaceholderProps } from './interfaces';

export const usePlaceholder = ({
  size,
  number,
}: PlaceholderProps): [number[], () => number] => {
  const generate = (): number[] => {
    return Array(number).fill(1, 0, number);
  }

  const calculateSize = (): number => {
    if (size && number == 1) {
      return size;
    }

    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
  };

  const placeholders = useMemo(generate, [number]);

  return [placeholders, calculateSize];
};
