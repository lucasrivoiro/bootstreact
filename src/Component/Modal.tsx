import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import { cn } from 'utils';

import AppendToBody from './AppendToBody';

interface ModalProps {
  centered?: boolean;
  children: JSX.Element;
  fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  lg?: boolean;
  onClose: (state: boolean) => void;
  scrollable?: boolean;
  show: boolean;
  sm?: boolean;
  xl?: boolean;
}

interface ContentProps {
  children: JSX.Element | JSX.Element[];
}

interface HeaderProps {
  children: JSX.Element | string;
}

interface BodyProps {
  children: JSX.Element | JSX.Element[];
}

interface FooterProps {
  children: JSX.Element | JSX.Element[];
}

interface ContextInterface {
  onClose?: (state: boolean) => void;
}

let numberOfModals = 0;

const Context = createContext<ContextInterface>({});

const Modal = ({
  children,
  lg,
  onClose,
  sm,
  xl,
  centered = true,
  scrollable = false,
  fullscreen = false,
  show = false,
}: ModalProps): JSX.Element => {
  const [zIndex, setZIndex] = useState<number>(0);

  useLayoutEffect(() => {
    numberOfModals++;
    setZIndex(10 * numberOfModals);
  }, []);

  return (
    <React.Fragment>
      {show && (
        <AppendToBody>
          <Context.Provider value={{ onClose }}>
            <div
              className="modal fade show d-block"
              style={{ zIndex: 1055 + zIndex }}
            >
              <div
                className={cn('modal-dialog', {
                  'modal-dialog-scrollable': scrollable,
                  'modal-dialog-centered': centered,
                  'modal-xl': xl,
                  'modal-lg': lg,
                  'modal-sm': sm,
                  [`modal-fullscreen${
                    typeof fullscreen !== 'boolean' ? `-${fullscreen}-down` : ''
                  }`]: fullscreen,
                })}
              >
                {children}
              </div>
            </div>
            <div
              className="modal-backdrop fade show"
              onClick={() => onClose(false)}
              style={{ zIndex: 1050 + zIndex }}
            ></div>
          </Context.Provider>
        </AppendToBody>
      )}
    </React.Fragment>
  );
};

const Content = ({ children }: ContentProps): JSX.Element => (
  <div className="modal-content">{children}</div>
);

const Header = ({ children }: HeaderProps): JSX.Element => {
  const { onClose } = useContext(Context);

  return (
    <div className="modal-header">
      <h5 className="modal-title">{children}</h5>
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
  <div className="modal-body">{children}</div>
);

const Footer = ({ children }: FooterProps): JSX.Element => (
  <div className="modal-footer">{children}</div>
);

Modal.Content = Content;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
