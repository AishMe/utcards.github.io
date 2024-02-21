import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type CardTypeHorizontalStyleDe1Type = {
  vector?: string;
  bankLogo?: boolean;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propRight1?: CSSProperties["right"];
  propBottom1?: CSSProperties["bottom"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propLeft1?: CSSProperties["left"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propGap1?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
  propPadding3?: CSSProperties["padding"];
  propGap2?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMaxHeight1?: CSSProperties["maxHeight"];
  propMinHeight?: CSSProperties["minHeight"];
  propHeight1?: CSSProperties["height"];
};

const CardTypeHorizontalStyleDe1: NextPage<CardTypeHorizontalStyleDe1Type> = ({
  vector,
  bankLogo = true,
  propPadding,
  propGap,
  propLeft,
  propWidth,
  propHeight,
  propTop,
  propRight,
  propBottom,
  propRight1,
  propBottom1,
  propMaxHeight,
  propLeft1,
  propFlexDirection,
  propGap1,
  propPadding1,
  propPadding2,
  propPadding3,
  propGap2,
  propAlignSelf,
  propMaxHeight1,
  propMinHeight,
  propHeight1,
}) => {
  const cardTypeHorizontalStyleDeStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
      height: propHeight,
      top: propTop,
      right: propRight,
      bottom: propBottom,
    };
  }, [propLeft, propWidth, propHeight, propTop, propRight, propBottom]);

  const textureIconStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight1,
      bottom: propBottom1,
      maxHeight: propMaxHeight,
      left: propLeft1,
    };
  }, [propRight1, propBottom1, propMaxHeight, propLeft1]);

  const frameDiv9Style: CSSProperties = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
      gap: propGap1,
      padding: propPadding1,
    };
  }, [propFlexDirection, propGap1, propPadding1]);

  const frameDiv10Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const frameDiv11Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding3,
      gap: propGap2,
    };
  }, [propPadding3, propGap2]);

  const typeRuPayIconStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      maxHeight: propMaxHeight1,
      minHeight: propMinHeight,
      height: propHeight1,
    };
  }, [propAlignSelf, propMaxHeight1, propMinHeight, propHeight1]);

  return (
    <div
      className="self-stretch rounded-13xl bg-gray-600 [backdrop-filter:blur(40px)] overflow-hidden flex flex-col items-center justify-start pt-[2.5rem] pb-[2rem] pr-[2.438rem] pl-[2.5rem] box-border relative gap-[4rem_0rem] max-w-full text-left text-[1.5rem] text-white font-button-medium-18p mq900:gap-[4rem_0rem] mq450:gap-[4rem_0rem] mq450:pt-[1.625rem] mq450:pb-[1.313rem] mq450:box-border"
      style={cardTypeHorizontalStyleDeStyle}
    >
      <img
        className="w-[39.3rem] h-[44.969rem] absolute my-0 mx-[!important] top-[-12.812rem] left-[-17.094rem] object-contain"
        alt=""
        src={vector}
        style={vectorIconStyle}
      />
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[-0.094rem] bottom-[0rem] max-h-full object-cover z-[1]"
        alt=""
        src="/texture@2x.png"
        style={textureIconStyle}
      />
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[2.813rem_0rem] max-w-full mq900:gap-[2.813rem_0rem]"
        style={frameDiv9Style}
      >
        <div className="w-[14.5rem] relative uppercase font-medium inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1.188rem]">
          BAHADIR NUROGLU
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[0.75rem_0rem] max-w-full text-[1.25rem] text-silver"
          style={frameDiv10Style}
        >
          <div className="self-stretch flex flex-col items-end justify-start">
            <div className="rounded-lg bg-gray-1900 overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] gap-[0rem_0.75rem] z-[2] border-[2px] border-solid border-gray-1800">
              <img
                className="self-stretch w-[1.375rem] relative max-h-full min-h-[3.125rem]"
                loading="eager"
                alt=""
                src="/vector-11.svg"
              />
              <div className="h-[3.125rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="mt-[-0.125rem] w-[1.813rem] h-[3.219rem] relative"
                  loading="eager"
                  alt=""
                  src="/vector-22.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start mt-[-0.062rem]">
              <div className="relative z-[2] mq450:text-[1rem]">
                Card Number
              </div>
            </div>
          </div>
          <div className="relative text-[2rem] font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] max-w-full z-[2] mq900:text-[1.625rem] mq450:text-[1.188rem]">
            2243 6652 9435 9982
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.063rem] pl-[0rem] gap-[1.25rem] text-[1.25rem] text-silver mq450:flex-wrap"
        style={frameDiv11Style}
      >
        <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
          <div className="relative font-medium z-[2] mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="w-[3.5rem] relative font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1rem]">
            10/25
          </div>
        </div>
        <TypeRuPayIcon
          typeRuPay="/bank.svg"
          propHeight="unset"
          propWidth="5rem"
          propAlignSelf="stretch"
          propFlex="unset"
          propOverflow="unset"
          propMaxHeight="100%"
          propMinHeight="3.5rem"
          propPosition="relative"
          propLeft="unset"
          propTop="unset"
          propTransform="unset"
          propMargin="unset"
        />
      </div>
    </div>
  );
};

export default CardTypeHorizontalStyleDe1;
