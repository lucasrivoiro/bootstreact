import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import { cn } from 'utils';

import AppendToBody from './AppendToBody';

interface OffcanvasProps {
  children: JSX.Element | JSX.Element[];
  onClose: (state: boolean) => void;
  show: boolean;
  placement?: 'start' | 'end' | 'top' | 'bottom';
}

interface HeaderProps {
  children: JSX.Element | string;
}

interface BodyProps {
  children: JSX.Element | JSX.Element[];
}

interface ContextInterface {
  onClose?: (state: boolean) => void;
}

let numberOfOffcanvas = 0;

const Context = createContext<ContextInterface>({});

const Offcanvas = ({
  children,
  onClose,
  show = false,
  placement = 'end',
}: OffcanvasProps): JSX.Element => {
  const [zIndex, setZIndex] = useState<number>(0);

  useLayoutEffect(() => {
    numberOfOffcanvas++;
    setZIndex(10 * numberOfOffcanvas);
  }, []);

  return (
    <React.Fragment>
      {show && (
        <AppendToBody>
          <Context.Provider value={{ onClose }}>
            <div
              className={cn('offcanvas', `offcanvas-${placement}`, 'show')}
              style={{ zIndex: 1045 + zIndex }}
            >
              {children}
            </div>
            <div
              className="offcanvas-backdrop fade show"
              onClick={() => onClose(false)}
              style={{ zIndex: 1040 + zIndex }}
            ></div>
          </Context.Provider>
        </AppendToBody>
      )}
    </React.Fragment>
  );
};

const Header = ({ children }: HeaderProps): JSX.Element => {
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

const Body = ({ children }: BodyProps): JSX.Element => (
  <div className="offcanvas-body">{children}</div>
);

Offcanvas.Header = Header;
Offcanvas.Body = Body;

export default Offcanvas;
