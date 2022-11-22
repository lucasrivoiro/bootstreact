import { ContextMenuItem } from './types';

export interface ContextMenuProps {
  children: JSX.Element | JSX.Element[] | string | string[];
  title: string;
  items: ContextMenuItem[];
}
