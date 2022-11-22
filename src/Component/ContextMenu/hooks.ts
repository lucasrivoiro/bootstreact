import { useState } from 'react';
import { useLongPress } from 'use-long-press';

export const useContextMenu = () => {
  const [show, setShow] = useState<boolean>(false);

  const longPress = useLongPress(() => setShow(true));

  return {
    show,
    setShow,
    longPress,
  };
};
