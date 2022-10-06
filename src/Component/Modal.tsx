import { Modal as BsModal } from 'bootstrap';
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from 'utils';

import AppendToBody from './AppendToBody';

interface ModalProps {
  backdrop?: boolean | 'static';
  centered?: boolean;
  children: JSX.Element;
  fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  keyboard?: boolean;
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
  children: JSX.Element | JSX.Element[] | string | string[];
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
  backdrop = true,
  centered = true,
  children,
  fullscreen = false,
  keyboard = true,
  lg,
  onClose,
  scrollable = false,
  show = false,
  sm,
  xl,
}: ModalProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = useState<number>(0);

  const modal = useMemo(() => {
    if (ref.current) {
      ref.current.addEventListener('hide.bs.modal', () => {
        onClose(false);
      });

      return new BsModal(ref.current, {
        backdrop,
        keyboard,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backdrop, keyboard, ref.current]);

  useEffect(() => {
    if (modal) {
      if (show) {
        modal.show();

        if (backdrop) {
          const backdropElement = document.querySelectorAll<HTMLDivElement>(
            'div.modal-backdrop:last-child'
          );

          if (backdropElement.length) {
            backdropElement[0].style.zIndex = (1050 + zIndex).toString();
          }
        }
      } else {
        modal.hide();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal, show]);

  useLayoutEffect(() => {
    numberOfModals++;
    setZIndex(10 * numberOfModals);
  }, []);

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
