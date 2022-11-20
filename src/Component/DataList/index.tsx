import React, { createContext } from 'react';

import ContextMenu from 'Component/ContextMenu';

import A from '../A';
import Div from '../Div';
import Icon from '../Icon';
import Small from '../Small';
import Span from '../Span';
import {
  useDataListaContext,
  useDataListColumnClasses,
  useDataListItemContextMenu,
} from './hooks';
import {
  DataListColumnProps,
  DataListContext as DataListContextInterface,
  DataListItemProps,
  DataListProps,
  DataListSubtitleProps,
  DataListTitleProps,
} from './interfaces';
import './styles.scss';

export const DataListContext = createContext<DataListContextInterface>({
  hasContextMenu: false,
  contextMenu: false,
  setContextMenu: () => ({}),
  setContextMenuTitle: () => ({}),
  setContextMenuItems: () => ({}),
});

const DataList = ({ children }: DataListProps): JSX.Element => {
  const context = useDataListaContext();

  return (
    <DataListContext.Provider value={context}>
      <Div className="datalist" bgColor="white" w={100}>
        {children}
      </Div>
      {context.hasContextMenu ? (
        <ContextMenu
          title={context.contextMenuTitle}
          show={context.contextMenu}
          onClose={context.setContextMenu}
          items={context.contextMenuItems}
        />
      ) : null}
    </DataListContext.Provider>
  );
};

const Item = ({ children, ...rest }: DataListItemProps): JSX.Element => {
  const contextMenu = useDataListItemContextMenu(rest);

  return (
    <Div
      className="datalist-item"
      cursor="pointer"
      d="flex"
      alignItems="center"
      px={3}
      py={2}
      gap={3}
      borderBottom
      {...contextMenu()}
    >
      {children}
    </Div>
  );
};

const Column = ({
  children,
  truncate = false,
  ...rest
}: DataListColumnProps): JSX.Element => {
  const classes = useDataListColumnClasses('datalist-column', rest);

  return (
    <Div truncate={truncate} className={classes}>
      {children}
    </Div>
  );
};

const Title = ({
  children,
  to = '',
  target,
  icon,
  ...rest
}: DataListTitleProps): JSX.Element => (
  <A
    className="datalist-title"
    d="block"
    textDecoration="none"
    to={to}
    target={target}
    truncate
    {...rest}
  >
    {icon ? <Icon name={icon} me={2} /> : null}
    {children}
  </A>
);

const Subtitle = ({
  children,
  icon,
  ...rest
}: DataListSubtitleProps): JSX.Element => (
  <Small
    className="datalist-subtitle"
    mb={0}
    d="block"
    textColor="muted"
    truncate
    {...rest}
  >
    {icon ? <Icon name={icon} me={2} /> : null}
    {children}
  </Small>
);

const Text = ({ children, ...rest }: DataListTitleProps): JSX.Element => (
  <Span className="datalist-text" d="block" {...rest}>
    {children}
  </Span>
);

DataList.Item = Item;
DataList.Column = Column;
DataList.Title = Title;
DataList.Subtitle = Subtitle;
DataList.Text = Text;

export default DataList;
