import React, { MouseEventHandler } from 'react';
import { cn } from 'utils';

type ButtonThemeType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-dark'
  | 'outline-light'
  | 'transparent';

interface IconInterface {
  children?: string;
  className?: string | undefined;
  color?: ButtonThemeType;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset';
  lg?: boolean;
  sm?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  className,
  color = 'primary',
  disabled = false,
  lg = false,
  onClick,
  sm = false,
  type = 'button',
}: IconInterface): JSX.Element => (
  <button
    className={cn(`btn btn-${color}`, className, {
      'btn-sm': sm,
      'btn-lg': lg,
    })}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
