import { Ref } from 'react';

export type OffcanvasBackdropType = boolean | 'static';

export type OffcanvasPlacementType = 'start' | 'end' | 'top' | 'bottom';

export type OffcanvasHookType = [Ref<HTMLDivElement>, number];
