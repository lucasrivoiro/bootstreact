import { Icons } from 'Type/Style';

export type ContextMenuItem = {
  icon?: Icons;
  title: string;
  callback: () => void;
  disabled?: boolean;
};
