import { Icons } from 'Type/Style';

export type ContextMenuItemType = {
  icon?: Icons;
  title: string;
  callback: () => void;
  disabled?: boolean;
};
