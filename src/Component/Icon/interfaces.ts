import { ClassesInterface } from 'Interface/Styles';

import { IconType } from './types';

export interface IconInterface extends ClassesInterface {
  className?: string | undefined;
  name: IconType;
}
