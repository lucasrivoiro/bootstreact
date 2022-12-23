import { useMemo } from 'react';
import { cn } from 'utils';

import {
  BackgroundInterface,
  BorderInterface,
  ClassesInterface,
  CursorInterface,
  DisplayInterface,
  FlexInterface,
  FontMonospaceInterface,
  FontSizeInterface,
  FontStyleInterface,
  FontWeightInterface,
  GapInterface,
  LineHeightInterface,
  MarginInterface,
  OpacityInterface,
  OverflowInterface,
  PaddingInterface,
  PositionInterface,
  ShadowInterface,
  SizeInterface,
  TextAlignmentInterface,
  TextBreakInterface,
  TextColorInterface,
  TextDecorationInterface,
  TextExtrasInterface,
  TextResetInterface,
  TextTransformInterface,
  TextWrapInterface,
} from 'Interface/Styles';

export const useMargin = (props: MarginInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`m-${props.m}`]: props.m || props.m === 0,
        [`m-sm-${props.mSm}`]: props.mSm || props.mSm === 0,
        [`m-md-${props.mMd}`]: props.mMd || props.mMd === 0,
        [`m-lg-${props.mLg}`]: props.mLg || props.mLg === 0,
        [`m-xl-${props.mXl}`]: props.mXl || props.mXl === 0,
        [`m-xxl-${props.mXxl}`]: props.mXxl || props.mXxl === 0,

        [`my-${props.my}`]: props.my || props.my === 0,
        [`my-sm-${props.mySm}`]: props.mySm || props.mySm === 0,
        [`my-md-${props.myMd}`]: props.myMd || props.myMd === 0,
        [`my-lg-${props.myLg}`]: props.myLg || props.myLg === 0,
        [`my-xl-${props.myXl}`]: props.myXl || props.myXl === 0,
        [`my-xxl-${props.mXxl}`]: props.myXxl || props.myXxl === 0,

        [`mx-${props.mx}`]: props.mx || props.mx === 0,
        [`mx-sm-${props.mxSm}`]: props.mxSm || props.mxSm === 0,
        [`mx-md-${props.mxMd}`]: props.mxMd || props.mxMd === 0,
        [`mx-lg-${props.mxLg}`]: props.mxLg || props.mxLg === 0,
        [`mx-xl-${props.mxXl}`]: props.mxXl || props.mxXl === 0,
        [`mx-xxl-${props.mxXxl}`]: props.mxXxl || props.mxXxl === 0,

        [`mt-${props.mt}`]: props.mt || props.mt === 0,
        [`mt-sm-${props.mtSm}`]: props.mtSm || props.mtSm === 0,
        [`mt-md-${props.mtMd}`]: props.mtMd || props.mtMd === 0,
        [`mt-lg-${props.mtLg}`]: props.mtLg || props.mtLg === 0,
        [`mt-xl-${props.mtXl}`]: props.mtXl || props.mtXl === 0,
        [`mt-xxl-${props.mtXxl}`]: props.mtXxl || props.mtXxl === 0,

        [`mb-${props.mb}`]: props.mb || props.mb === 0,
        [`mb-sm-${props.mbSm}`]: props.mbSm || props.mbSm === 0,
        [`mb-md-${props.mbMd}`]: props.mbMd || props.mbMd === 0,
        [`mb-lg-${props.mbLg}`]: props.mbLg || props.mbLg === 0,
        [`mb-xl-${props.mbXl}`]: props.mbXl || props.mbXl === 0,
        [`mb-xxl-${props.mbXxl}`]: props.mbXxl || props.mbXxl === 0,

        [`ms-${props.ms}`]: props.ms || props.ms === 0,
        [`ms-sm-${props.msSm}`]: props.msSm || props.msSm === 0,
        [`ms-md-${props.msMd}`]: props.msMd || props.msMd === 0,
        [`ms-lg-${props.msLg}`]: props.msLg || props.msLg === 0,
        [`ms-xl-${props.msXl}`]: props.msXl || props.msXl === 0,
        [`ms-xxl-${props.msXxl}`]: props.msXxl || props.msXxl === 0,

        [`me-${props.me}`]: props.me || props.me === 0,
        [`me-sm-${props.meSm}`]: props.meSm || props.meSm === 0,
        [`me-md-${props.meMd}`]: props.meMd || props.meMd === 0,
        [`me-lg-${props.meLg}`]: props.meLg || props.meLg === 0,
        [`me-xl-${props.meXl}`]: props.meXl || props.meXl === 0,
        [`me-xxl-${props.meXxl}`]: props.meXxl || props.meXxl === 0,
      }),
    [
      props.m,
      props.mLg,
      props.mMd,
      props.mSm,
      props.mXl,
      props.mXxl,
      props.mb,
      props.mbLg,
      props.mbMd,
      props.mbSm,
      props.mbXl,
      props.mbXxl,
      props.me,
      props.meLg,
      props.meMd,
      props.meSm,
      props.meXl,
      props.meXxl,
      props.ms,
      props.msLg,
      props.msMd,
      props.msSm,
      props.msXl,
      props.msXxl,
      props.mt,
      props.mtLg,
      props.mtMd,
      props.mtSm,
      props.mtXl,
      props.mtXxl,
      props.mx,
      props.mxLg,
      props.mxMd,
      props.mxSm,
      props.mxXl,
      props.mxXxl,
      props.my,
      props.myLg,
      props.myMd,
      props.mySm,
      props.myXl,
      props.myXxl,
    ]
  );

  return classes;
};

export const usePadding = (props: PaddingInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`p-${props.p}`]: props.p || props.p === 0,
        [`p-sm-${props.pSm}`]: props.pSm || props.pSm === 0,
        [`p-md-${props.pMd}`]: props.pMd || props.pMd === 0,
        [`p-lg-${props.pLg}`]: props.pLg || props.pLg === 0,
        [`p-xl-${props.pXl}`]: props.pXl || props.pXl === 0,
        [`p-xxl-${props.pXxl}`]: props.pXxl || props.pXxl === 0,

        [`py-${props.py}`]: props.py || props.py === 0,
        [`py-sm-${props.pySm}`]: props.pySm || props.pySm === 0,
        [`py-md-${props.pyMd}`]: props.pyMd || props.pyMd === 0,
        [`py-lg-${props.pyLg}`]: props.pyLg || props.pyLg === 0,
        [`py-xl-${props.pyXl}`]: props.pyXl || props.pyXl === 0,
        [`py-xxl-${props.pXxl}`]: props.pyXxl || props.pyXxl === 0,

        [`px-${props.px}`]: props.px || props.px === 0,
        [`px-sm-${props.pxSm}`]: props.pxSm || props.pxSm === 0,
        [`px-md-${props.pxMd}`]: props.pxMd || props.pxMd === 0,
        [`px-lg-${props.pxLg}`]: props.pxLg || props.pxLg === 0,
        [`px-xl-${props.pxXl}`]: props.pxXl || props.pxXl === 0,
        [`px-xxl-${props.pxXxl}`]: props.pxXxl || props.pxXxl === 0,

        [`pt-${props.pt}`]: props.pt || props.pt === 0,
        [`pt-sm-${props.ptSm}`]: props.ptSm || props.ptSm === 0,
        [`pt-md-${props.ptMd}`]: props.ptMd || props.ptMd === 0,
        [`pt-lg-${props.ptLg}`]: props.ptLg || props.ptLg === 0,
        [`pt-xl-${props.ptXl}`]: props.ptXl || props.ptXl === 0,
        [`pt-xxl-${props.ptXxl}`]: props.ptXxl || props.ptXxl === 0,

        [`pb-${props.pb}`]: props.pb || props.pb === 0,
        [`pb-sm-${props.pbSm}`]: props.pbSm || props.pbSm === 0,
        [`pb-md-${props.pbMd}`]: props.pbMd || props.pbMd === 0,
        [`pb-lg-${props.pbLg}`]: props.pbLg || props.pbLg === 0,
        [`pb-xl-${props.pbXl}`]: props.pbXl || props.pbXl === 0,
        [`pb-xxl-${props.pbXxl}`]: props.pbXxl || props.pbXxl === 0,

        [`ps-${props.ps}`]: props.ps || props.ps === 0,
        [`ps-sm-${props.psSm}`]: props.psSm || props.psSm === 0,
        [`ps-md-${props.psMd}`]: props.psMd || props.psMd === 0,
        [`ps-lg-${props.psLg}`]: props.psLg || props.psLg === 0,
        [`ps-xl-${props.psXl}`]: props.psXl || props.psXl === 0,
        [`ps-xxl-${props.psXxl}`]: props.psXxl || props.psXxl === 0,

        [`pe-${props.pe}`]: props.pe || props.pe === 0,
        [`pe-sm-${props.peSm}`]: props.peSm || props.peSm === 0,
        [`pe-md-${props.peMd}`]: props.peMd || props.peMd === 0,
        [`pe-lg-${props.peLg}`]: props.peLg || props.peLg === 0,
        [`pe-xl-${props.peXl}`]: props.peXl || props.peXl === 0,
        [`pe-xxl-${props.peXxl}`]: props.peXxl || props.peXxl === 0,
      }),
    [
      props.p,
      props.pLg,
      props.pMd,
      props.pSm,
      props.pXl,
      props.pXxl,
      props.pb,
      props.pbLg,
      props.pbMd,
      props.pbSm,
      props.pbXl,
      props.pbXxl,
      props.pe,
      props.peLg,
      props.peMd,
      props.peSm,
      props.peXl,
      props.peXxl,
      props.ps,
      props.psLg,
      props.psMd,
      props.psSm,
      props.psXl,
      props.psXxl,
      props.pt,
      props.ptLg,
      props.ptMd,
      props.ptSm,
      props.ptXl,
      props.ptXxl,
      props.px,
      props.pxLg,
      props.pxMd,
      props.pxSm,
      props.pxXl,
      props.pxXxl,
      props.py,
      props.pyLg,
      props.pyMd,
      props.pySm,
      props.pyXl,
      props.pyXxl,
    ]
  );

  return classes;
};

export const useBackground = (props: BackgroundInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`bg-${props.bgColor}`]: props.bgColor,
        [`bg-opacity-${props.bgOpacity}`]: props.bgOpacity,
      }),
    [props.bgColor, props.bgOpacity]
  );

  return classes;
};

export const useBorder = (props: BorderInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        border: props.border,
        'border-top': props.borderTop,
        'border-bottom': props.borderBottom,
        'border-start': props.borderStart,
        'border-end': props.borderEnd,
        'border-0': props.border0,
        'border-top-0': props.borderTop0,
        'border-bottom-0': props.borderBottom0,
        'border-start-0': props.borderStart0,
        'border-end-0': props.borderEnd0,
        [`border-${props.borderColor}`]: props.borderColor,
        [`border-${props.borderWidth}`]: props.borderWidth,
        rounded: props.rounded,
        'rounded-top': props.roundedTop,
        'rounded-bottom': props.roundedBottom,
        'rounded-start': props.roundedStart,
        'rounded-end': props.roundedEnd,
        'rounded-circle': props.roundedCircle,
        'rounded-pill': props.roundedPill,
        [`rounded-${props.roundedSize}`]: props.roundedSize,
        [`border-opacity-${props.borderOpacity}`]: props.borderOpacity,
      }),
    [
      props.border,
      props.border0,
      props.borderBottom,
      props.borderBottom0,
      props.borderColor,
      props.borderEnd,
      props.borderEnd0,
      props.borderOpacity,
      props.borderStart,
      props.borderStart0,
      props.borderTop,
      props.borderTop0,
      props.borderWidth,
      props.rounded,
      props.roundedBottom,
      props.roundedCircle,
      props.roundedEnd,
      props.roundedPill,
      props.roundedSize,
      props.roundedStart,
      props.roundedTop,
    ]
  );

  return classes;
};

export const useDisplay = (props: DisplayInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`d-${props.d}`]: props.d,
        [`d-sm-${props.dSm}`]: props.dSm,
        [`d-md-${props.dMd}`]: props.dMd,
        [`d-lg-${props.dLg}`]: props.dLg,
        [`d-xl-${props.dXl}`]: props.dXl,
        [`d-xxl-${props.dXxl}`]: props.dXxl,
      }),
    [props.d, props.dLg, props.dMd, props.dSm, props.dXl, props.dXxl]
  );

  return classes;
};

export const useFlex = (props: FlexInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`flex-${props.flex}`]: props.flex,
        [`flex-sm-${props.flexSm}`]: props.flexSm,
        [`flex-md-${props.flexMd}`]: props.flexMd,
        [`flex-lg-${props.flexLg}`]: props.flexLg,
        [`flex-xl-${props.flexXl}`]: props.flexXl,
        [`flex-xxl-${props.flexXxl}`]: props.flexXxl,

        [`justify-content-${props.justifyContent}`]: props.justifyContent,
        [`justify-content-sm-${props.justifyContentSm}`]:
          props.justifyContentSm,
        [`justify-content-md-${props.justifyContentMd}`]:
          props.justifyContentMd,
        [`justify-content-lg-${props.justifyContentLg}`]:
          props.justifyContentLg,
        [`justify-content-xl-${props.justifyContentXl}`]:
          props.justifyContentXl,
        [`justify-content-xxl-${props.justifyContentXxl}`]:
          props.justifyContentXxl,

        [`align-items-${props.alignItems}`]: props.alignItems,
        [`align-items-sm-${props.alignItemsSm}`]: props.alignItemsSm,
        [`align-items-md-${props.alignItemsMd}`]: props.alignItemsMd,
        [`align-items-lg-${props.alignItemsLg}`]: props.alignItemsLg,
        [`align-items-xl-${props.alignItemsXl}`]: props.alignItemsXl,
        [`align-items-xxl-${props.alignItemsXxl}`]: props.alignItemsXxl,

        [`align-content-${props.alignContent}`]: props.alignContent,
        [`align-content-sm-${props.alignContentSm}`]: props.alignContentSm,
        [`align-content-md-${props.alignContentMd}`]: props.alignContentMd,
        [`align-content-lg-${props.alignContentLg}`]: props.alignContentLg,
        [`align-content-xl-${props.alignContentXl}`]: props.alignContentXl,
        [`align-content-xxl-${props.alignContentXxl}`]: props.alignContentXxl,

        [`align-self-${props.alignSelf}`]: props.alignSelf,
        [`align-self-sm-${props.alignSelfSm}`]: props.alignSelfSm,
        [`align-self-md-${props.alignSelfMd}`]: props.alignSelfMd,
        [`align-self-lg-${props.alignSelfLg}`]: props.alignSelfLg,
        [`align-self-xl-${props.alignSelfXl}`]: props.alignSelfXl,
        [`align-self-xxl-${props.alignSelfXxl}`]: props.alignSelfXxl,

        'flex-fill': props.flexFill,
        'flex-sm-fill': props.flexSmFill,
        'flex-md-fill': props.flexMdFill,
        'flex-lg-fill': props.flexLgFill,
        'flex-xl-fill': props.flexXlFill,
        'flex-xxl-fill': props.flexXxlFill,

        [`flex-grow-${props.flexGrow}`]: props.flexGrow,
        [`flex-sm-grow-${props.flexSmGrow}`]: props.flexSmGrow,
        [`flex-md-grow-${props.flexMdGrow}`]: props.flexMdGrow,
        [`flex-lg-grow-${props.flexLgGrow}`]: props.flexLgGrow,
        [`flex-xl-grow-${props.flexXlGrow}`]: props.flexXlGrow,
        [`flex-xxl-grow-${props.flexXxlGrow}`]: props.flexXxlGrow,

        [`flex-shrink-${props.flexShrink}`]: props.flexShrink,
        [`flex-sm-shrink-${props.flexSmShrink}`]: props.flexSmShrink,
        [`flex-md-shrink-${props.flexMdShrink}`]: props.flexMdShrink,
        [`flex-lg-shrink-${props.flexLgShrink}`]: props.flexLgShrink,
        [`flex-xl-shrink-${props.flexXlShrink}`]: props.flexXlShrink,
        [`flex-xxl-shrink-${props.flexXxlShrink}`]: props.flexXxlShrink,

        [`flex-${
          typeof props.flexWrap == 'boolean' ? 'wrap' : props.flexWrap
        }`]: props.flexWrap,
        [`flex-sm-${
          typeof props.flexSmWrap == 'boolean' ? 'wrap' : props.flexSmWrap
        }`]: props.flexSmWrap,
        [`flex-md-${
          typeof props.flexMdWrap == 'boolean' ? 'wrap' : props.flexMdWrap
        }`]: props.flexMdWrap,
        [`flex-lg-${
          typeof props.flexLgWrap == 'boolean' ? 'wrap' : props.flexLgWrap
        }`]: props.flexLgWrap,
        [`flex-xl-${
          typeof props.flexXlWrap == 'boolean' ? 'wrap' : props.flexXlWrap
        }`]: props.flexXlWrap,
        [`flex-xxl-${
          typeof props.flexXxlWrap == 'boolean' ? 'wrap' : props.flexXxlWrap
        }`]: props.flexXxlWrap,

        [`order-${props.order}`]: props.order,
        [`order-sm-${props.orderSm}`]: props.orderSm,
        [`order-md-${props.orderMd}`]: props.orderMd,
        [`order-lg-${props.orderLg}`]: props.orderLg,
        [`order-xl-${props.orderXl}`]: props.orderXl,
        [`order-xxl-${props.orderXxl}`]: props.orderXxl,
      }),
    [
      props.alignContent,
      props.alignContentLg,
      props.alignContentMd,
      props.alignContentSm,
      props.alignContentXl,
      props.alignContentXxl,
      props.alignItems,
      props.alignItemsLg,
      props.alignItemsMd,
      props.alignItemsSm,
      props.alignItemsXl,
      props.alignItemsXxl,
      props.alignSelf,
      props.alignSelfLg,
      props.alignSelfMd,
      props.alignSelfSm,
      props.alignSelfXl,
      props.alignSelfXxl,
      props.flex,
      props.flexFill,
      props.flexGrow,
      props.flexLg,
      props.flexLgFill,
      props.flexLgGrow,
      props.flexLgShrink,
      props.flexLgWrap,
      props.flexMd,
      props.flexMdFill,
      props.flexMdGrow,
      props.flexMdShrink,
      props.flexMdWrap,
      props.flexShrink,
      props.flexSm,
      props.flexSmFill,
      props.flexSmGrow,
      props.flexSmShrink,
      props.flexSmWrap,
      props.flexWrap,
      props.flexXl,
      props.flexXlFill,
      props.flexXlGrow,
      props.flexXlShrink,
      props.flexXlWrap,
      props.flexXxl,
      props.flexXxlFill,
      props.flexXxlGrow,
      props.flexXxlShrink,
      props.flexXxlWrap,
      props.justifyContent,
      props.justifyContentLg,
      props.justifyContentMd,
      props.justifyContentSm,
      props.justifyContentXl,
      props.justifyContentXxl,
      props.order,
      props.orderLg,
      props.orderMd,
      props.orderSm,
      props.orderXl,
      props.orderXxl,
    ]
  );

  return classes;
};

export const useGap = (props: GapInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`gap-${props.gap}`]: props.gap || props.gap === 0,
        [`gap-sm-${props.gapSm}`]: props.gapSm || props.gapSm === 0,
        [`gap-md-${props.gapMd}`]: props.gapMd || props.gapMd === 0,
        [`gap-lg-${props.gapLg}`]: props.gapLg || props.gapLg === 0,
        [`gap-xl-${props.gapXl}`]: props.gapXl || props.gapXl === 0,
        [`gap-xxl-${props.gapXxl}`]: props.gapXxl || props.gapXxl === 0,
      }),
    [
      props.gap,
      props.gapLg,
      props.gapMd,
      props.gapSm,
      props.gapXl,
      props.gapXxl,
    ]
  );

  return classes;
};

export const useOpacity = (props: OpacityInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`opacity-${props.opacity}`]: props.opacity,
      }),
    [props.opacity]
  );

  return classes;
};

export const useOverflow = (props: OverflowInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`overflow-${props.overflow}`]: props.overflow,
      }),
    [props.overflow]
  );

  return classes;
};

export const useShadow = (props: ShadowInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`shadow${typeof props.shadow != 'boolean' ? `-${props.shadow}` : ''}`]:
          props.shadow,
      }),
    [props.shadow]
  );

  return classes;
};

export const useSize = (props: SizeInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`w-${props.w}`]: props.w,
        [`mw-${props.mw}`]: props.mw,
        [`vw-${props.vw}`]: props.vw,
        [`min-vw-${props.minVw}`]: props.minVw,
        [`h-${props.h}`]: props.h,
        [`mh-${props.mh}`]: props.mh,
        [`vh-${props.vh}`]: props.vh,
        [`min-vh-${props.minVh}`]: props.minVh,
      }),
    [
      props.h,
      props.mh,
      props.minVh,
      props.minVw,
      props.mw,
      props.vh,
      props.vw,
      props.w,
    ]
  );

  return classes;
};

export const usePosition = (props: PositionInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`position-${props.position}`]: props.position,
        [`top-${props.top}`]: typeof props.top == 'number',
        [`bottom-${props.bottom}`]: typeof props.bottom == 'number',
        [`start-${props.start}`]: typeof props.start == 'number',
        [`end-${props.end}`]: typeof props.end == 'number',
        [`translate-middle${
          typeof props.translateMiddle != 'boolean'
            ? `-${props.translateMiddle}`
            : ''
        }`]: props.translateMiddle,
      }),
    [
      props.bottom,
      props.end,
      props.position,
      props.start,
      props.top,
      props.translateMiddle,
    ]
  );

  return classes;
};

export const useTextColor = (props: TextColorInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`text-${props.textColor}`]: props.textColor,
        [`text-opacity-${props.textColorOpacity}`]: props.textColorOpacity,
      }),
    [props.textColor, props.textColorOpacity]
  );

  return classes;
};

export const useTextAlignment = (props: TextAlignmentInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`text-${props.align}`]: props.align,
        [`text-sm-${props.alignSm}`]: props.alignSm,
        [`text-md-${props.alignMd}`]: props.alignMd,
        [`text-lg-${props.alignLg}`]: props.alignLg,
        [`text-xl-${props.alignXl}`]: props.alignXl,
        [`text-xxl-${props.alignXxl}`]: props.alignXxl,
      }),
    [
      props.align,
      props.alignLg,
      props.alignMd,
      props.alignSm,
      props.alignXl,
      props.alignXxl,
    ]
  );

  return classes;
};

export const useTextWrap = (props: TextWrapInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`text${typeof props.wrap != 'boolean' ? `-${props.wrap}` : ''}`]:
          props.wrap,
      }),
    [props.wrap]
  );

  return classes;
};

export const useTextBreak = (props: TextBreakInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        'text-break': props.textBreak,
      }),
    [props.textBreak]
  );

  return classes;
};

export const useTextTransform = (props: TextTransformInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`text-${props.textTransform}`]: props.textTransform,
      }),
    [props.textTransform]
  );

  return classes;
};

export const useFontSize = (props: FontSizeInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`fs-${props.fs}`]: props.fs,
      }),
    [props.fs]
  );

  return classes;
};

export const useFontWeight = (props: FontWeightInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`fw-${props.fw}`]: props.fw,
      }),
    [props.fw]
  );

  return classes;
};

export const useFontStyle = (props: FontStyleInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`fst-${props.fst}`]: props.fst,
      }),
    [props.fst]
  );

  return classes;
};

export const useLineHeight = (props: LineHeightInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`lh-${props.lh}`]: props.lh,
      }),
    [props.lh]
  );

  return classes;
};

export const useFontMonospace = (props: FontMonospaceInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        'font-monospace': props.fontMonospace,
      }),
    [props.fontMonospace]
  );

  return classes;
};

export const useTextReset = (props: TextResetInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        'text-reset': props.textReset,
      }),
    [props.textReset]
  );

  return classes;
};

export const useTextDecoration = (props: TextDecorationInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`text-decoration-${props.textDecoration}`]: props.textDecoration,
      }),
    [props.textDecoration]
  );

  return classes;
};

export const useTextExtras = (props: TextExtrasInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`display-${props.display}`]: props.display,
        lead: props.lead,
        small: props.small,
        mark: props.mark,
        'text-truncate': props.truncate,
      }),
    [props.display, props.lead, props.mark, props.small, props.truncate]
  );

  return classes;
};

export const useCursor = (props: CursorInterface): string => {
  const classes = useMemo(
    () =>
      cn({
        [`cursor-${props.cursor}`]: props.cursor,
      }),
    [props.cursor]
  );

  return classes;
};

export const useClasses = (props: ClassesInterface): string => {
  const margin = useMargin(props);
  const padding = usePadding(props);
  const background = useBackground(props);
  const border = useBorder(props);
  const display = useDisplay(props);
  const flex = useFlex(props);
  const gap = useGap(props);
  const opacity = useOpacity(props);
  const overflow = useOverflow(props);
  const shadow = useShadow(props);
  const size = useSize(props);
  const position = usePosition(props);
  const color = useTextColor(props);
  const align = useTextAlignment(props);
  const wrap = useTextWrap(props);
  const textBreak = useTextBreak(props);
  const transform = useTextTransform(props);
  const weight = useFontWeight(props);
  const fontSize = useFontSize(props);
  const style = useFontStyle(props);
  const lineHeight = useLineHeight(props);
  const monospace = useFontMonospace(props);
  const textReset = useTextReset(props);
  const textDecoration = useTextDecoration(props);
  const extras = useTextExtras(props);
  const cursor = useCursor(props);

  const classes = useMemo(
    () =>
      cn(
        margin,
        padding,
        background,
        border,
        display,
        flex,
        gap,
        opacity,
        overflow,
        shadow,
        size,
        position,
        color,
        align,
        wrap,
        textBreak,
        transform,
        weight,
        fontSize,
        style,
        lineHeight,
        monospace,
        textReset,
        textDecoration,
        extras,
        cursor
      ),
    [
      align,
      background,
      border,
      color,
      display,
      extras,
      flex,
      gap,
      fontSize,
      lineHeight,
      margin,
      monospace,
      opacity,
      overflow,
      padding,
      position,
      shadow,
      size,
      style,
      textBreak,
      textDecoration,
      textReset,
      transform,
      weight,
      wrap,
      cursor,
    ]
  );

  return classes;
};
