import { PopoverPlacementType, PopoverTriggerType } from './types';

export interface PopoverProps {
  children?: JSX.Element;
  content: string;
  title?: string;
  placement?: PopoverPlacementType;
  trigger?: PopoverTriggerType;
  block?: boolean;
}
