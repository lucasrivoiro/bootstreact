import React from 'react';
import { cn } from 'utils';

import A from 'Component/A';
import Icon from 'Component/Icon';
import Offcanvas from 'Component/Offcanvas';

import { useContextMenu } from './hooks';
import { ContextMenuProps } from './interfaces';

const ContextMenu = ({
  children,
  title,
  items = [],
}: ContextMenuProps): JSX.Element => {
  const { show, setShow, longPress } = useContextMenu();

  return (
    <>
      <A
        cursor="pointer"
        textColor="body"
        textDecoration="none"
        className="user-select-none"
        {...longPress()}
      >
        {children}
      </A>
      <Offcanvas show={show} onClose={setShow} placement="bottom">
        <Offcanvas.Header>{title}</Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group list-group-flush">
            {items.map((item) => (
              <li
                key={item.title}
                onClick={item.callback}
                className={cn(
                  'list-group-item',
                  'cursor-pointer',
                  'd-flex',
                  'justify-content-between',
                  'fs-5',
                  'fw-light',
                  'px-0',
                  { disabled: item.disabled }
                )}
              >
                {item.title}
                {item.icon ? <Icon name={item.icon} /> : null}
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ContextMenu;
