import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BankType6IconType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propPosition?: CSSProperties["position"];
  propMargin?: CSSProperties["margin"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propOverflow?: CSSProperties["overflow"];
  propMaxHeight?: CSSProperties["maxHeight"];
};

const BankType6Icon: NextPage<BankType6IconType> = ({
  propWidth,
  propHeight,
  propPosition,
  propMargin,
  propRight,
  propBottom,
  propAlignSelf,
  propFlex,
  propOverflow,
  propMaxHeight,
}) => {
  const bankType6IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      position: propPosition,
      margin: propMargin,
      right: propRight,
      bottom: propBottom,
      alignSelf: propAlignSelf,
      flex: propFlex,
      overflow: propOverflow,
      maxHeight: propMaxHeight,
    };
  }, [
    propWidth,
    propHeight,
    propPosition,
    propMargin,
    propRight,
    propBottom,
    propAlignSelf,
    propFlex,
    propOverflow,
    propMaxHeight,
  ]);

  return (
    <img
      className="w-[5rem] h-[3.5rem] absolute my-0 mx-[!important] right-[2.688rem] bottom-[1.875rem] z-[3]"
      loading="eager"
      alt=""
      src="/banktype6.svg"
      style={bankType6IconStyle}
    />
  );
};

export default BankType6Icon;
