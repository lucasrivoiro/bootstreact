import { ClassesInterface } from 'Interface/Styles';

export interface BadgeProps extends ClassesInterface {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}
