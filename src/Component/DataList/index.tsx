import React from 'react';

import ContextMenu from 'Component/ContextMenu';

import A from '../A';
import Div from '../Div';
import Icon from '../Icon';
import Small from '../Small';
import Span from '../Span';
import { useDataListColumnClasses } from './hooks';
import {
  DataListColumnProps,
  DataListItemProps,
  DataListProps,
  DataListSubtitleProps,
  DataListTitleProps,
} from './interfaces';
import './styles.scss';

const DataList = ({ children }: DataListProps): JSX.Element => (
  <Div className="datalist" bgColor="white" w={100}>
    {children}
  </Div>
);

const Item = ({
  children,
  contextMenuTitle,
  contextMenuItems,
}: DataListItemProps): JSX.Element => {
  const Item = (
    <Div
      className="datalist-item"
      d="flex"
      alignItems="center"
      px={3}
      py={2}
      gap={3}
      borderBottom
    >
      {children}
    </Div>
  );

  if (contextMenuTitle && contextMenuItems) {
    return (
      <ContextMenu title={contextMenuTitle} items={contextMenuItems}>
        {Item}
      </ContextMenu>
    );
  }

  return Item;
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
