import { ContextMenuItem } from './types';

export interface ContextMenuProps {
  title: string;
  show: boolean;
  onClose: (state: boolean) => void;
  items: ContextMenuItem[];
}
