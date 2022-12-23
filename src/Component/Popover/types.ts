import { Ref } from 'react';

export type PopoverPlacementType = 'top' | 'bottom' | 'right' | 'left';

export type PopoverTriggerType =
  | 'click'
  | 'hover'
  | 'focus'
  | 'manual'
  | 'click hover'
  | 'click focus'
  | 'hover focus'
  | 'click hover focus';

  export type PopoverHookType = Ref<HTMLSpanElement>;
