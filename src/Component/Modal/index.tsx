import React, { createContext, useContext } from 'react';
import { cn } from 'utils';

import AppendToBody from '../AppendToBody';
import { useModal } from './hooks';
import {
  ModalBodyProps,
  ModalContentProps,
  ModalContextInterface,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
} from './interfaces';
import './styles.scss';

const Context = createContext<ModalContextInterface>({});

const Modal = ({
  backdrop,
  centered,
  children,
  fullscreen,
  keyboard,
  lg,
  onClose,
  scrollable,
  show,
  sm,
  xl,
}: ModalProps): JSX.Element => {
  const [ref, zIndex] = useModal({ backdrop, onClose, keyboard, show });

  return (
    <AppendToBody>
      <Context.Provider value={{ onClose }}>
        <div ref={ref} className="modal fade" style={{ zIndex: 1055 + zIndex }}>
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
      </Context.Provider>
    </AppendToBody>
  );
};

const Content = ({ children }: ModalContentProps): JSX.Element => (
  <div className="modal-content">{children}</div>
);

const Header = ({ children }: ModalHeaderProps): JSX.Element => {
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

const Body = ({ children }: ModalBodyProps): JSX.Element => (
  <div className="modal-body">{children}</div>
);

const Footer = ({ children }: ModalFooterProps): JSX.Element => (
  <div className="modal-footer">{children}</div>
);

Modal.defaultProps = {
  backdrop: true,
  centered: true,
  fullscreen: false,
  keyboard: true,
  scrollable: false,
  show: false,
};

Modal.Content = Content;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
