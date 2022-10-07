import { Offcanvas as BsOffcanvas } from 'bootstrap';
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

interface OffcanvasProps {
  backdrop?: boolean | 'static';
  children: JSX.Element | JSX.Element[];
  keyboard?: boolean;
  lg?: boolean;
  md?: boolean;
  onClose: (state: boolean) => void;
  placement?: 'start' | 'end' | 'top' | 'bottom';
  scroll?: boolean;
  show: boolean;
  sm?: boolean;
  xl?: boolean;
  xxl?: boolean;
}

interface HeaderProps {
  children: JSX.Element | string;
}

interface BodyProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

interface ContextInterface {
  onClose?: (state: boolean) => void;
}

let numberOfOffcanvas = 0;

const Context = createContext<ContextInterface>({});

const Offcanvas = ({
  backdrop = true,
  children,
  keyboard = true,
  lg,
  md,
  onClose,
  placement = 'start',
  scroll = false,
  show = false,
  sm,
  xl,
  xxl,
}: OffcanvasProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = useState<number>(0);

  const offcanvas = useMemo(() => {
    if (ref.current) {
      ref.current.addEventListener('hide.bs.offcanvas', () => {
        onClose(false);
      });

      return new BsOffcanvas(ref.current, {
        backdrop,
        scroll,
        keyboard,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backdrop, scroll, keyboard, ref.current]);

  useEffect(() => {
    if (offcanvas) {
      if (show) {
        offcanvas.show();

        if (backdrop) {
          const backdropElement = document.querySelectorAll<HTMLDivElement>(
            'div.offcanvas-backdrop:last-child'
          );

          if (backdropElement.length) {
            backdropElement[0].style.zIndex = (1055 + zIndex).toString();
          }
        }
      } else {
        offcanvas.hide();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offcanvas, show]);

  useLayoutEffect(() => {
    numberOfOffcanvas++;
    setZIndex(10 * numberOfOffcanvas);
  }, []);

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
  