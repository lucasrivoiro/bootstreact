import { ContextMenuItemType } from './types';

export interface ContextMenuProps {
  children: JSX.Element | JSX.Element[] | string | string[];
  title: string;
  items: ContextMenuItemType[];
}
