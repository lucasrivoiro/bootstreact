import { useContext, useMemo } from 'react';
import { useLongPress } from 'use-long-press';
import { cn } from 'utils';

import {
  useContextMenu,
  useContextMenuItems,
  useContextMenuTitle,
} from 'Component/ContextMenu/hooks';

import { DataListContext } from '.';
import { DataListColumnProps, DataListItemProps } from './interfaces';

export const useDataListaContext = () => {
  const [contextMenu, setContextMenu] = useContextMenu();
  const [contextMenuTitle, setContextMenuTitle] = useContextMenuTitle();
  const [contextMenuItems, setContextMenuItems] = useContextMenuItems();

  return {
    hasContextMenu: !!contextMenuTitle,
    contextMenu,
    setContextMenu,
    contextMenuTitle,
    setContextMenuTitle,
    contextMenuItems,
    setContextMenuItems,
  }
};

export const useDataListItemContextMenu = ({
  contextMenuTitle,
  contextMenuItems,
}: Partial<DataListItemProps>) => {
  const context = useContext(DataListContext);

  const bind = useLongPress(() => {
    if (contextMenuTitle && contextMenuItems) {
      context.setContextMenu(true);
      context.setContextMenuTitle(contextMenuTitle);
      context.setContextMenuItems(contextMenuItems);
    }
  });

  return bind;
};

export const useDataListColumnClasses = (
  defaultClass: string,
  {
    hideXs = false,
    hideSm = false,
    hideMd = false,
    hideLg = false,
    hideXl = false,
    hideXxl = false,
  }: Partial<DataListColumnProps>
): string => {
  const classes = useMemo(() => {
    return cn(defaultClass, {
      'd-none': hideXs,
      'd-sm-none': hideSm,
      'd-md-none': hideMd,
      'd-lg-none': hideLg,
      'd-xl-none': hideXl,
      'd-xxl-none': hideXxl,
      'd-block': !hideXs,
      'd-sm-block': !hideSm,
      'd-md-block': !hideMd,
      'd-lg-block': !hideLg,
      'd-xl-block': !hideXl,
      'd-xxl-block': !hideXxl,
    });
  }, [defaultClass, hideLg, hideMd, hideSm, hideXl, hideXs, hideXxl]);

  return classes;
};
