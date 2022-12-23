import { OffcanvasBackdropType, OffcanvasPlacementType } from './types';

export interface OffcanvasProps {
  backdrop?: OffcanvasBackdropType;
  children: JSX.Element | JSX.Element[];
  keyboard?: boolean;
  lg?: boolean;
  md?: boolean;
  onClose: (state: boolean) => void;
  placement?: OffcanvasPlacementType;
  scroll?: boolean;
  show: boolean;
  sm?: boolean;
  xl?: boolean;
  xxl?: boolean;
}

export interface OffcanvasHookProps {
  backdrop?: OffcanvasBackdropType;
  keyboard?: boolean;
  onClose: (state: boolean) => void;
  scroll?: boolean;
  show: boolean;
}

export interface OffcanvasHeaderProps {
  children: JSX.Element | string;
}

export interface OffcanvasBodyProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

export interface OffcanvasContextInterface {
  onClose?: (state: boolean) => void;
}
