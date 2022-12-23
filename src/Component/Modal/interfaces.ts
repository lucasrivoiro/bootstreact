import { ModalBackdropType, ModalFullscreenType } from './types';

export interface ModalProps {
  backdrop?: ModalBackdropType;
  centered?: boolean;
  children: JSX.Element;
  fullscreen?: ModalFullscreenType;
  keyboard?: boolean;
  lg?: boolean;
  onClose: (state: boolean) => void;
  scrollable?: boolean;
  show: boolean;
  sm?: boolean;
  xl?: boolean;
}

export interface ModalHookProps {
  backdrop?: ModalBackdropType;
  keyboard?: boolean;
  onClose: (state: boolean) => void;
  show: boolean;
}

export interface ModalContentProps {
  children: JSX.Element | JSX.Element[];
}

export interface ModalHeaderProps {
  children: JSX.Element | string;
}

export interface ModalBodyProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

export interface ModalFooterProps {
  children: JSX.Element | JSX.Element[];
}

export interface ModalContextInterface {
  onClose?: (state: boolean) => void;
}
