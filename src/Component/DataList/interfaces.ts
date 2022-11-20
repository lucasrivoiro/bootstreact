import { Icons } from 'Type/Style';

import { ContextMenuItem } from 'Component/ContextMenu/types';
import { ClassesInterface } from 'Interface/Styles';

export interface DataListContext {
  hasContextMenu: boolean;
  contextMenu: boolean;
  setContextMenu: (state: boolean) => void;
  setContextMenuTitle: (state: string) => void;
  setContextMenuItems: (state: ContextMenuItem[]) => void;
}

export interface DataListProps {
  children: JSX.Element | JSX.Element[];
}

export interface DataListItemProps {
  children: JSX.Element | JSX.Element[] | string | string[];
  contextMenuTitle?: string;
  contextMenuItems?: ContextMenuItem[];
}

export interface DataListColumnProps {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | (string | JSX.Element)[];
  hideXs?: boolean;
  hideSm?: boolean;
  hideMd?: boolean;
  hideLg?: boolean;
  hideXl?: boolean;
  hideXxl?: boolean;
  truncate?: boolean;
}

export interface DataListTitleProps extends ClassesInterface {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | (string | JSX.Element)[];
  to?: string;
  target?: '_blank' | '_self' | '_parent';
  icon?: Icons;
}

export interface DataListSubtitleProps extends ClassesInterface {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | (string | JSX.Element)[];
  icon?: Icons;
}
