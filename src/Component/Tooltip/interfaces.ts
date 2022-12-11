export interface TooltipProps {
    block?: boolean;
    children?: JSX.Element;
    title: string;
    placement?: 'top' | 'bottom' | 'right' | 'left';
    trigger?:
      | 'click'
      | 'hover'
      | 'focus'
      | 'manual'
      | 'click hover'
      | 'click focus'
      | 'hover focus'
      | 'click hover focus';
  }
