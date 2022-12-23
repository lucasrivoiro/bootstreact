import { Modal as BsModal } from 'bootstrap';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { ModalHookProps } from './interfaces';
import { ModalHookType } from './types';

let numberOfModals = 0;

export const useModal = ({
  backdrop,
  onClose,
  show,
  keyboard,
}: ModalHookProps): ModalHookType => {
  const ref = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = useState<number>(0);

  const initializeModal = () => {
    if (ref.current) {
      ref.current.addEventListener('hide.bs.modal', () => {
        onClose(false);
      });

      return new BsModal(ref.current, {
        backdrop,
        keyboard,
      });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modal = useMemo(initializeModal, [backdrop, keyboard, ref.current]);

  const incrementModalCount = (): void => {
    numberOfModals++;
    setZIndex(10 * numberOfModals);
  };

  const changeModalZIndex = (): void => {
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
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(changeModalZIndex, [modal, show]);
  useLayoutEffect(incrementModalCount, []);

  return [ref, zIndex];
};
