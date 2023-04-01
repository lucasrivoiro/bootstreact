import { IconType } from 'Component/Icon/types';

export interface NavigationProps {
  children: React.ReactNode;
}

export interface NavigationBrandProps {
  to?: string;
  image: string;
}

export interface NavigationContainerProps {
  children: React.ReactNode;
}

export interface NavigationLinkProps {
  to: string;
  icon: IconType;
  text: string;
  keepMobile?: boolean;
}
