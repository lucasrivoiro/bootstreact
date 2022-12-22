import { MouseEventHandler } from 'react';

import { IconType } from 'Component/Icon/types';
import { PlaceholderSizeType } from 'Component/Placeholder/types';

import { ButtonThemeType, ButtonType } from './types';

export interface ButtonProps {
  children?: string;
  className?: string;
  color?: ButtonThemeType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  lg?: boolean;
  sm?: boolean;
  disabled?: boolean;
  loading?: boolean;
  processing?: boolean;
  processingText?: string;
  placeholderSize?: PlaceholderSizeType;
  icon?: IconType;
}
