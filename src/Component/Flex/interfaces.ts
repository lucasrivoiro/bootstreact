import { ClassesInterface } from 'Interface/Styles';

export interface FlexProps extends ClassesInterface {
  column?: boolean;
  center?: boolean;
  children: JSX.Element | JSX.Element[] | string;
}
