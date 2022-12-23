import React, { useState } from 'react';
import { cn } from 'utils';

import Button from 'Component/Button';

import { FloatingButtonProps } from './interfaces';
import './styles.scss';

const FloatingButtons = ({
  children,
  direction,
}: FloatingButtonProps): JSX.Element => {
  const [showButtons, setShowButtons] = useState<boolean>(false);

  return (
    <div
      className={cn('btn-floating', {
        'btn-floating-start': direction == 'start',
        'btn-floating-end': direction == 'end',
        active: showButtons,
      })}
    >
      <Button icon="plus-lg" onClick={() => setShowButtons(!showButtons)} />
      <div className="btn-floating-container">{children}</div>
    </div>
  );
};

FloatingButtons.defaultProps = {
  direction: 'left',
};

export default FloatingButtons;
