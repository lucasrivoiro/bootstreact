import { useState } from 'react';
import { useLongPress } from 'use-long-press';

export const useContextMenu = () => {
  const [show, setShow] = useState<boolean>(false);

  const longPress = useLongPress(() => setShow(true), {
    threshold: 200,
  });

  return {
    show,
    setShow,
    longPress,
  };
};
