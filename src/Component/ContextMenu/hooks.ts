import { useState } from 'react';

import { ContextMenuItem } from './types';

export const useContextMenu = () => {
  return useState<boolean>(false);
};

export const useContextMenuTitle = () => {
  return useState<string>('');
};

export const useContextMenuItems = () => {
  return useState<ContextMenuItem[]>([]);
};
