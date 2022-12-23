export type MarginType = 0 | 1 | 2 | 3 | 4 | 5 | 'auto';

export type PaddingType = 0 | 1 | 2 | 3 | 4 | 5 | 'auto';

export type ThemeType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'transparent'
  | 'body'
  | 'white';

export type OpacityType = 0 | 25 | 50 | 75 | 100;

export type ColorOpacityType = 10 | 25 | 50 | 75;

export type BorderType = 1 | 2 | 3 | 4 | 5;

export type RoundedType = 0 | 1 | 2 | 3 | 4 | 5;

export type DisplayType =
  | 'block'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'inline'
  | 'none'
  | 'table'
  | 'table-cell'
  | 'table-row'
  | 'grid';

export type FlexType = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type FlexGrowType = 0 | 1;

export type FlexShrinkType = 0 | 1;

export type FlexWrapType = 'wrap' | 'nowrap' | 'wrap-reverse' | boolean;

export type OrderType = 0 | 1 | 2 | 3 | 4 | 5 | 'first' | 'last';

export type GapType = 0 | 1 | 2 | 3 | 4 | 5;

export type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

export type AlignContentType =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'stretch';

export type AlignItems =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

export type OverflowType = 'auto' | 'hidden' | 'visible' | 'scroll';

export type ShadowType = 'none' | 'sm' | 'lg' | true;

export type SizeType = 25 | 50 | 75 | 100 | 'auto';

export type PositionType =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky';

export type PositionAxisType = 0 | 50 | 100;

export type TranslateMiddleType = 'x' | 'y' | true;

export type TextColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'body'
  | 'muted'
  | 'white'
  | 'black-50'
  | 'white-50';

export type TextColorOpacityType = 25 | 50 | 75;

export type TextAlignmentType = 'start' | 'center' | 'end';

export type CursorType =
  | 'context-menu'
  | 'copy'
  | 'crosshair'
  | 'grab'
  | 'grabbing'
  | 'help'
  | 'move'
  | 'pointer'
  | 'progress'
  | 'text';
