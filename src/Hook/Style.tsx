import { useMemo } from 'react';
import { cx } from 'utils';

import {
  BackgroundInterface,
  BlockInterface,
  BorderInterface,
  DisplayInterface,
  FlexInterface,
  FontSizeInterface,
  FontStyleInterface,
  FontWeightInterface,
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
  TextInterface,
  TextTransformInterface,
  TextWrapInterface,
} from 'Interface/Styles';

export const useMargin = (props: MarginInterface): string => {
  const classes = useMemo(
    () =>
      cx({
        [`m-${props.m}`]: props.m,
        [`m-sm-${props.mSm}`]: props.mSm,
        [`m-md-${props.mMd}`]: props.mMd,
        [`m-lg-${props.mLg}`]: props.mLg,
        [`m-xl-${props.mXl}`]: props.mXl,
        [`m-xxl-${props.mXxl}`]: props.mXxl,

        [`my-${props.my}`]: props.my,
        [`my-sm-${props.mySm}`]: props.mySm,
        [`my-md-${props.myMd}`]: props.myMd,
        [`my-lg-${props.myLg}`]: props.myLg,
        [`my-xl-${props.myXl}`]: props.myXl,
        [`my-xxl-${props.mXxl}`]: props.myXxl,

        [`mx-${props.mx}`]: props.mx,
        [`mx-sm-${props.mxSm}`]: props.mxSm,
        [`mx-md-${props.mxMd}`]: props.mxMd,
        [`mx-lg-${props.mxLg}`]: props.mxLg,
        [`mx-xl-${props.mxXl}`]: props.mxXl,
        [`mx-xxl-${props.mxXxl}`]: props.mxXxl,

        [`mt-${props.mt}`]: props.mt,
        [`mt-sm-${props.mtSm}`]: props.mtSm,
        [`mt-md-${props.mtMd}`]: props.mtMd,
        [`mt-lg-${props.mtLg}`]: props.mtLg,
        [`mt-xl-${props.mtXl}`]: props.mtXl,
        [`mt-xxl-${props.mtXxl}`]: props.mtXxl,

        [`mb-${props.mb}`]: props.mb,
        [`mb-sm-${props.mbSm}`]: props.mbSm,
        [`mb-md-${props.mbMd}`]: props.mbMd,
        [`mb-lg-${props.mbLg}`]: props.mbLg,
        [`mb-xl-${props.mbXl}`]: props.mbXl,
        [`mb-xxl-${props.mbXxl}`]: props.mbXxl,

        [`ms-${props.ms}`]: props.ms,
        [`ms-sm-${props.msSm}`]: props.msSm,
        [`ms-md-${props.msMd}`]: props.msMd,
        [`ms-lg-${props.msLg}`]: props.msLg,
        [`ms-xl-${props.msXl}`]: props.msXl,
        [`ms-xxl-${props.msXxl}`]: props.msXxl,

        [`me-${props.me}`]: props.me,
        [`me-sm-${props.meSm}`]: props.meSm,
        [`me-md-${props.meMd}`]: props.meMd,
        [`me-lg-${props.meLg}`]: props.meLg,
        [`me-xl-${props.meXl}`]: props.meXl,
        [`me-xxl-${props.meXxl}`]: props.meXxl,
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
      cx({
        [`p-${props.p}`]: props.p,
        [`p-sm-${props.pSm}`]: props.pSm,
        [`p-md-${props.pMd}`]: props.pMd,
        [`p-lg-${props.pLg}`]: props.pLg,
        [`p-xl-${props.pXl}`]: props.pXl,
        [`p-xxl-${props.pXxl}`]: props.pXxl,

        [`py-${props.py}`]: props.py,
        [`py-sm-${props.pySm}`]: props.pySm,
        [`py-md-${props.pyMd}`]: props.pyMd,
        [`py-lg-${props.pyLg}`]: props.pyLg,
        [`py-xl-${props.pyXl}`]: props.pyXl,
        [`py-xxl-${props.pXxl}`]: props.pyXxl,

        [`px-${props.px}`]: props.px,
        [`px-sm-${props.pxSm}`]: props.pxSm,
        [`px-md-${props.pxMd}`]: props.pxMd,
        [`px-lg-${props.pxLg}`]: props.pxLg,
        [`px-xl-${props.pxXl}`]: props.pxXl,
        [`px-xxl-${props.pxXxl}`]: props.pxXxl,

        [`pt-${props.pt}`]: props.pt,
        [`pt-sm-${props.ptSm}`]: props.ptSm,
        [`pt-md-${props.ptMd}`]: props.ptMd,
        [`pt-lg-${props.ptLg}`]: props.ptLg,
        [`pt-xl-${props.ptXl}`]: props.ptXl,
        [`pt-xxl-${props.ptXxl}`]: props.ptXxl,

        [`pb-${props.pb}`]: props.pb,
        [`pb-sm-${props.pbSm}`]: props.pbSm,
        [`pb-md-${props.pbMd}`]: props.pbMd,
        [`pb-lg-${props.pbLg}`]: props.pbLg,
        [`pb-xl-${props.pbXl}`]: props.pbXl,
        [`pb-xxl-${props.pbXxl}`]: props.pbXxl,

        [`ps-${props.ps}`]: props.ps,
        [`ps-sm-${props.psSm}`]: props.psSm,
        [`ps-md-${props.psMd}`]: props.psMd,
        [`ps-lg-${props.psLg}`]: props.psLg,
        [`ps-xl-${props.psXl}`]: props.psXl,
        [`ps-xxl-${props.psXxl}`]: props.psXxl,

        [`pe-${props.pe}`]: props.pe,
        [`pe-sm-${props.peSm}`]: props.peSm,
        [`pe-md-${props.peMd}`]: props.peMd,
        [`pe-lg-${props.peLg}`]: props.peLg,
        [`pe-xl-${props.peXl}`]: props.peXl,
        [`pe-xxl-${props.peXxl}`]: props.peXxl,
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
      cx({
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
      cx({
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
      cx({
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
      cx({
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

        [`flex-wrap-${props.flexWrap}`]: props.flexWrap,
        [`flex-sm-wrap-${props.flexSmWrap}`]: props.flexSmWrap,
        [`flex-md-wrap-${props.flexMdWrap}`]: props.flexMdWrap,
        [`flex-lg-wrap-${props.flexLgWrap}`]: props.flexLgWrap,
        [`flex-xl-wrap-${props.flexXlWrap}`]: props.flexXlWrap,
        [`flex-xxl-wrap-${props.flexXxlWrap}`]: props.flexXxlWrap,

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

export const useOpacity = (props: OpacityInterface): string => {
  const classes = useMemo(
    () =>
      cx({
        [`opacity-${props.opacity}`]: props.opacity,
      }),
    [props.opacity]
  );

  return classes;
};

export const useOverflow = (props: OverflowInterface): string => {
  const classes = useMemo(
    () =>
      cx({
        [`overflow-${props.overflow}`]: props.overflow,
      }),
    [props.overflow]
  );

  return classes;
};

export const useShadow = (props: ShadowInterface): string => {
  const classes = useMemo(
    () =>
      cx({
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
      cx({
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
      cx({
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
      cx({
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
      cx({
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
      cx({
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
      cx({
        'text-break': props.textBreak,
      }),
    [props.textBreak]
  );

  return classes;
};

export const useTextTransform = (props: TextTransformInterface): string => {
  const classes = useMemo(
    () =>
      cx({
        [`text-${props.textTransform}`]: props.textTransform,
      }),
    [props.textTransform]
  );

  return classes;
};

export const useFontSize = (props: FontSizeInterface): string => {
  const classes = useMemo(
    () =>
      cx({
        [`fs-${props.fs}`]: props.fs,
      }),
    [props.fs]
  );

  return classes;
};

export const useFontWeight = (props: FontWeightInterface): string => {
  const classes = useMemo(
    () =>
      cx({
        [`fw-${props.fw}`]: props.fw,
      }),
    [props.fw]
  );

  return classes;
};

export const useFontStyle = (props: FontStyleInterface): string => {
  const classes = useMemo(
    () =>
      cx({
        [`fst-${props.fst}`]: props.fst,
      }),
    [props.fst]
  );

  return classes;
};

export const useBlock = (props: BlockInterface): string => {
  const margin = useMargin(props);
  const padding = usePadding(props);
  const background = useBackground(props);
  const border = useBorder(props);
  const display = useDisplay(props);
  const flex = useFlex(props);
  const opacity = useOpacity(props);
  const overflow = useOverflow(props);
  const shadow = useShadow(props);
  const size = useSize(props);
  const position = usePosition(props);

  const classes = useMemo(
    () =>
      cx(
        margin,
        padding,
        background,
        border,
        display,
        flex,
        opacity,
        overflow,
        shadow,
        size,
        position
      ),
    [
      background,
      border,
      display,
      flex,
      margin,
      opacity,
      overflow,
      padding,
      position,
      shadow,
      size,
    ]
  );

  return classes;
};

export const useText = (props: TextInterface): string => {
  const margin = useMargin(props);
  const padding = usePadding(props);
  const background = useBackground(props);
  const border = useBorder(props);
  const color = useTextColor(props);
  const align = useTextAlignment(props);
  const wrap = useTextWrap(props);
  const textBreak = useTextBreak(props);
  const transform = useTextTransform(props);
  const size = useFontSize(props);
  const weight = useFontWeight(props);
  const style = useFontStyle(props);

  const classes = useMemo(
    () =>
      cx(
        margin,
        padding,
        background,
        border,
        color,
        align,
        wrap,
        textBreak,
        transform,
        size,
        weight,
        style
      ),
    [
      align,
      background,
      border,
      color,
      margin,
      padding,
      wrap,
      textBreak,
      transform,
      size,
      weight,
      style,
    ]
  );

  return classes;
};
