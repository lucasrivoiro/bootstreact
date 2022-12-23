import React, { createContext, useContext } from 'react';
import { cn } from 'utils';

import AppendToBody from '../AppendToBody';
import { useOffcanvas } from './hooks';
import {
  OffcanvasBodyProps,
  OffcanvasContextInterface,
  OffcanvasHeaderProps,
  OffcanvasProps,
} from './interfaces';

const Context = createContext<OffcanvasContextInterface>({});

const Offcanvas = ({
  backdrop,
  children,
  keyboard,
  lg,
  md,
  onClose,
  placement,
  scroll,
  show,
  sm,
  xl,
  xxl,
}: OffcanvasProps): JSX.Element => {
  const [ref, zIndex] = useOffcanvas({
    backdrop,
    keyboard,
    scroll,
    show,
    onClose,
  });

  return (
    <AppendToBody>
      <Context.Provider value={{ onClose }}>
        <div
          ref={ref}
          className={cn('offcanvas', `offcanvas-${placement}`, {
            'offcanvas-xxl': xxl,
            'offcanvas-xl': xl,
            'offcanvas-lg': lg,
            'offcanvas-md': md,
            'offcanvas-sm': sm,
          })}
          style={{ zIndex: 1065 + zIndex }}
        >
          {children}
        </div>
      </Context.Provider>
    </AppendToBody>
  );
};

const Header = ({ children }: OffcanvasHeaderProps): JSX.Element => {
  const { onClose } = useContext(Context);

  return (
    <div className="offcanvas-header">
      <h5 className="offcanvas-title">{children}</h5>
      {onClose && (
        <button
          type="button"
          className="btn-close"
          onClick={() => onClose(false)}
        ></button>
      )}
    </div>
  );
};

const Body = ({ children }: OffcanvasBodyProps): JSX.Element => (
  <div className="offcanvas-body">{children}</div>
);

Offcanvas.defaultProps = {
  backdrop: true,
  keyboard: true,
  placement: 'start',
  scroll: false,
  show: false,
};

Offcanvas.Header = Header;
Offcanvas.Body = Body;

export default Offcanvas;
