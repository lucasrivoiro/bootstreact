import {
  AlignContentType,
  AlignItems,
  BorderType,
  ColorOpacityType,
  CursorType,
  DisplayType,
  FlexGrowType,
  FlexShrinkType,
  FlexType,
  FlexWrapType,
  GapType,
  JustifyContent,
  MarginType,
  OpacityType,
  OrderType,
  OverflowType,
  PaddingType,
  PositionAxisType,
  PositionType,
  RoundedType,
  ShadowType,
  SizeType,
  TextAlignmentType,
  TextColorOpacityType,
  TextColorType,
  ThemeType,
  TranslateMiddleType,
} from 'Type/Style';

export interface MarginInterface {
  m?: MarginType;
  mSm?: MarginType;
  mMd?: MarginType;
  mLg?: MarginType;
  mXl?: MarginType;
  mXxl?: MarginType;

  my?: MarginType;
  mySm?: MarginType;
  myMd?: MarginType;
  myLg?: MarginType;
  myXl?: MarginType;
  myXxl?: MarginType;

  mx?: MarginType;
  mxSm?: MarginType;
  mxMd?: MarginType;
  mxLg?: MarginType;
  mxXl?: MarginType;
  mxXxl?: MarginType;

  mt?: MarginType;
  mtSm?: MarginType;
  mtMd?: MarginType;
  mtLg?: MarginType;
  mtXl?: MarginType;
  mtXxl?: MarginType;

  mb?: MarginType;
  mbSm?: MarginType;
  mbMd?: MarginType;
  mbLg?: MarginType;
  mbXl?: MarginType;
  mbXxl?: MarginType;

  ms?: MarginType;
  msSm?: MarginType;
  msMd?: MarginType;
  msLg?: MarginType;
  msXl?: MarginType;
  msXxl?: MarginType;

  me?: MarginType;
  meSm?: MarginType;
  meMd?: MarginType;
  meLg?: MarginType;
  meXl?: MarginType;
  meXxl?: MarginType;
}

export interface PaddingInterface {
  p?: PaddingType;
  pSm?: PaddingType;
  pMd?: PaddingType;
  pLg?: PaddingType;
  pXl?: PaddingType;
  pXxl?: PaddingType;

  py?: PaddingType;
  pySm?: PaddingType;
  pyMd?: PaddingType;
  pyLg?: PaddingType;
  pyXl?: PaddingType;
  pyXxl?: PaddingType;

  px?: PaddingType;
  pxSm?: PaddingType;
  pxMd?: PaddingType;
  pxLg?: PaddingType;
  pxXl?: PaddingType;
  pxXxl?: PaddingType;

  pt?: PaddingType;
  ptSm?: PaddingType;
  ptMd?: PaddingType;
  ptLg?: PaddingType;
  ptXl?: PaddingType;
  ptXxl?: PaddingType;

  pb?: PaddingType;
  pbSm?: PaddingType;
  pbMd?: PaddingType;
  pbLg?: PaddingType;
  pbXl?: PaddingType;
  pbXxl?: PaddingType;

  ps?: PaddingType;
  psSm?: PaddingType;
  psMd?: PaddingType;
  psLg?: PaddingType;
  psXl?: PaddingType;
  psXxl?: PaddingType;

  pe?: PaddingType;
  peSm?: PaddingType;
  peMd?: PaddingType;
  peLg?: PaddingType;
  peXl?: PaddingType;
  peXxl?: PaddingType;
}

export interface BackgroundInterface {
  bgColor?: ThemeType;
  bgOpacity?: ColorOpacityType;
}

export interface BorderInterface {
  border?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  borderStart?: boolean;
  borderEnd?: boolean;

  border0?: boolean;
  borderTop0?: boolean;
  borderBottom0?: boolean;
  borderStart0?: boolean;
  borderEnd0?: boolean;

  borderColor?: ThemeType;
  borderOpacity?: ColorOpacityType;
  borderWidth?: BorderType;

  rounded?: boolean;
  roundedTop?: boolean;
  roundedBottom?: boolean;
  roundedStart?: boolean;
  roundedEnd?: boolean;
  roundedCircle?: boolean;
  roundedPill?: boolean;

  roundedSize?: RoundedType;
}

export interface DisplayInterface {
  d?: DisplayType;
  dSm?: DisplayType;
  dMd?: DisplayType;
  dLg?: DisplayType;
  dXl?: DisplayType;
  dXxl?: DisplayType;
}

export interface FlexInterface {
  flex?: FlexType;
  flexSm?: FlexType;
  flexMd?: FlexType;
  flexLg?: FlexType;
  flexXl?: FlexType;
  flexXxl?: FlexType;

  justifyContent?: JustifyContent;
  justifyContentSm?: JustifyContent;
  justifyContentMd?: JustifyContent;
  justifyContentLg?: JustifyContent;
  justifyContentXl?: JustifyContent;
  justifyContentXxl?: JustifyContent;

  alignItems?: AlignItems;
  alignItemsSm?: AlignItems;
  alignItemsMd?: AlignItems;
  alignItemsLg?: AlignItems;
  alignItemsXl?: AlignItems;
  alignItemsXxl?: AlignItems;

  alignContent?: AlignContentType;
  alignContentSm?: AlignContentType;
  alignContentMd?: AlignContentType;
  alignContentLg?: AlignContentType;
  alignContentXl?: AlignContentType;
  alignContentXxl?: AlignContentType;

  alignSelf?: AlignItems;
  alignSelfSm?: AlignItems;
  alignSelfMd?: AlignItems;
  alignSelfLg?: AlignItems;
  alignSelfXl?: AlignItems;
  alignSelfXxl?: AlignItems;

  flexFill?: boolean;
  flexSmFill?: boolean;
  flexMdFill?: boolean;
  flexLgFill?: boolean;
  flexXlFill?: boolean;
  flexXxlFill?: boolean;

  flexGrow?: FlexGrowType;
  flexSmGrow?: FlexGrowType;
  flexMdGrow?: FlexGrowType;
  flexLgGrow?: FlexGrowType;
  flexXlGrow?: FlexGrowType;
  flexXxlGrow?: FlexGrowType;

  flexShrink?: FlexShrinkType;
  flexSmShrink?: FlexShrinkType;
  flexMdShrink?: FlexShrinkType;
  flexLgShrink?: FlexShrinkType;
  flexXlShrink?: FlexShrinkType;
  flexXxlShrink?: FlexShrinkType;

  flexWrap?: FlexWrapType;
  flexSmWrap?: FlexWrapType;
  flexMdWrap?: FlexWrapType;
  flexLgWrap?: FlexWrapType;
  flexXlWrap?: FlexWrapType;
  flexXxlWrap?: FlexWrapType;

  order?: OrderType;
  orderSm?: OrderType;
  orderMd?: OrderType;
  orderLg?: OrderType;
  orderXl?: OrderType;
  orderXxl?: OrderType;
}

export interface GapInterface {
  gap?: GapType;
  gapSm?: GapType;
  gapMd?: GapType;
  gapLg?: GapType;
  gapXl?: GapType;
  gapXxl?: GapType;
}

export interface OpacityInterface {
  opacity?: OpacityType;
}

export interface OverflowInterface {
  overflow?: OverflowType;
}

export interface ShadowInterface {
  shadow?: ShadowType;
}

export interface SizeInterface {
  w?: SizeType;
  mw?: SizeType;
  vw?: SizeType;
  minVw?: SizeType;
  h?: SizeType;
  mh?: SizeType;
  vh?: SizeType;
  minVh?: SizeType;
}

export interface PositionInterface {
  position?: PositionType;
  top?: PositionAxisType;
  bottom?: PositionAxisType;
  start?: PositionAxisType;
  end?: PositionAxisType;
  translateMiddle?: TranslateMiddleType;
}

export interface TextColorInterface {
  textColor?: TextColorType;
  textColorOpacity?: TextColorOpacityType;
}

export interface TextAlignmentInterface {
  align?: TextAlignmentType;
  alignSm?: TextAlignmentType;
  alignMd?: TextAlignmentType;
  alignLg?: TextAlignmentType;
  alignXl?: TextAlignmentType;
  alignXxl?: TextAlignmentType;
}

export interface TextWrapInterface {
  wrap?: true | 'nowrap';
}

export interface TextBreakInterface {
  textBreak?: boolean;
}

export interface TextTransformInterface {
  textTransform?: 'lowercase' | 'uppercase' | 'capitalize';
}

export interface FontSizeInterface {
  fs?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface FontWeightInterface {
  fw?: 'bold' | 'bolder' | 'semibold' | 'normal' | 'light' | 'lighter';
}

export interface FontStyleInterface {
  fst?: 'italic' | 'normal';
}

export interface LineHeightInterface {
  lh?: 1 | 'sm' | 'base' | 'lg';
}

export interface FontMonospaceInterface {
  fontMonospace?: boolean;
}

export interface TextResetInterface {
  textReset?: boolean;
}

export interface TextDecorationInterface {
  textDecoration?: 'none' | 'underline' | 'line-through';
}

export interface TextExtrasInterface {
  display?: 1 | 2 | 3 | 4 | 5 | 6;
  lead?: boolean;
  small?: boolean;
  mark?: boolean;
  truncate?: boolean;
}

export interface CursorInterface {
  cursor?: CursorType;
}

export interface ClassesInterface
  extends MarginInterface,
    BackgroundInterface,
    BorderInterface,
    DisplayInterface,
    PaddingInterface,
    FlexInterface,
    GapInterface,
    OpacityInterface,
    OverflowInterface,
    ShadowInterface,
    SizeInterface,
    PositionInterface,
    TextColorInterface,
    TextAlignmentInterface,
    TextWrapInterface,
    TextBreakInterface,
    TextTransformInterface,
    FontSizeInterface,
    FontWeightInterface,
    FontStyleInterface,
    LineHeightInterface,
    FontMonospaceInterface,
    TextResetInterface,
    TextDecorationInterface,
    TextExtrasInterface,
    CursorInterface {}
