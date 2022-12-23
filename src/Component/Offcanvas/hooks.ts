import { Offcanvas as BsOffcanvas } from 'bootstrap';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { OffcanvasHookProps } from './interfaces';
import { OffcanvasHookType } from './types';

let numberOfOffcanvas = 0;

export const useOffcanvas = ({
  backdrop,
  scroll,
  keyboard,
  show,
  onClose,
}: OffcanvasHookProps): OffcanvasHookType => {
  const ref = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = useState<number>(0);

  const initializeOffcanvas = () => {
    if (ref.current) {
      ref.current.addEventListener('hide.bs.offcanvas', () => {
        onClose(false);
      });

      return new BsOffcanvas(ref.current, {
        backdrop: backdrop as (boolean | undefined),
        scroll,
        keyboard,
      });
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const offcanvas = useMemo(initializeOffcanvas, [backdrop, scroll, keyboard, ref.current]);

  const incrementOffcanvasCount = (): void => {
    numberOfOffcanvas++;
    setZIndex(10 * numberOfOffcanvas);
  }

  const changeOffcanvasZIndex = (): void => {
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
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(changeOffcanvasZIndex, [offcanvas, show]);
  useLayoutEffect(incrementOffcanvasCount, []);

  return [ref, zIndex];
};
