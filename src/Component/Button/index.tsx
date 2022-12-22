import React from 'react';
import { cn } from 'utils';

import Icon from 'Component/Icon';
import { usePlaceholderClasses } from 'Component/Placeholder/hooks';

import { ButtonProps } from './interfaces';

const Button = ({
  children,
  className,
  color,
  disabled,
  lg,
  onClick,
  sm,
  type,
  loading,
  processing,
  processingText,
  placeholderSize,
  icon,
}: ButtonProps): JSX.Element => {
  const placeholder = usePlaceholderClasses(placeholderSize);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(`btn btn-${color}`, className, {
        'btn-sm': sm,
        'btn-lg': lg,
        disabled: loading || processing,
        [`${placeholder}`]: loading,
      })}
    >
      {processing && !loading ? (
        <>
          <span
            className={cn('spinner-grow spinner-grow-sm', {
              'me-1': processingText,
            })}
          />{' '}
          {processingText}
        </>
      ) : null}

      {icon && !loading && !processing ? (
        <Icon name={icon} me={children ? 2 : 0} />
      ) : null}

      {!loading && !processing ? children : ''}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  lg: false,
  sm: false,
  type: 'button',
  loading: false,
  processing: false,
  placeholderSize: 4,
};

export default Button;
