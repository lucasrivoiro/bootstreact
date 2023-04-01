import React, { Children, cloneElement, useState } from 'react';
import { Link as DomLink, NavLink } from 'react-router-dom';
import { cn } from 'utils';

import Icon from 'Component/Icon';
import Offcanvas from 'Component/Offcanvas';

import {
  NavigationBrandProps,
  NavigationContainerProps,
  NavigationLinkProps,
  NavigationProps,
} from './interfaces';
import './styles.scss';

const Navigation = ({ children }: NavigationProps): JSX.Element => (
  <div className="navigation">{children}</div>
);

const Brand = ({ to, image }: NavigationBrandProps): JSX.Element => (
  <DomLink to={to || '/'} className="navigation-brand">
    <img src={image} />
    Bootstreact
  </DomLink>
);

const Container = ({ children }: NavigationContainerProps): JSX.Element => {
  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <>
      <ul className="navigation-container">
        {children}
        <li className="nav-item d-md-none">
          <a className="nav-link" onClick={() => setShowAll(true)}>
            <Icon name="list" fs={1} />
          </a>
        </li>
      </ul>
      <Offcanvas show={showAll} onClose={setShowAll} placement="end">
        <Offcanvas.Header>Menu</Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navigation-container-list-mode">
            {Children.map(
              children,
              (child) =>
                child &&
                cloneElement(child as JSX.Element, { keepMobile: true })
            )}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const Link = ({
  to,
  icon,
  text,
  keepMobile,
}: NavigationLinkProps): JSX.Element => (
  <li className={cn('nav-item', 'd-md-block', { 'd-none': !keepMobile })}>
    <NavLink
      to={to}
      className={({ isActive }) => cn('nav-link', { active: isActive })}
    >
      <Icon name={icon} />
      {text}
    </NavLink>
  </li>
);

Link.defaultProps = {
  keepMobile: false,
};

Navigation.Brand = Brand;
Navigation.Container = Container;
Navigation.Link = Link;

export default Navigation;
