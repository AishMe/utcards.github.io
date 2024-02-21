import type { NextPage } from "next";
import CardTypeHorizontalStyleDe1 from "./card-type-horizontal-style-de1";
import CardTypeVerticalStyleDesi1 from "./card-type-vertical-style-desi1";
import CardTypeHorizontalStyleDe2 from "./card-type-horizontal-style-de2";

const FrameComponent6: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-end justify-start gap-[12.5rem_0rem] min-w-[23.313rem] max-w-full text-left text-[1.25rem] text-silver font-button-medium-18p mq900:gap-[12.5rem_0rem] mq900:min-w-full mq450:gap-[12.5rem_0rem]">
      <CardTypeHorizontalStyleDe1
        vector="/c-o-m-p-o-n-e-n-t-s-e-t.svg"
        bankLogo
        propPadding="2.75rem 2.438rem 2rem 2.563rem"
        propGap="4rem 0rem"
        propLeft="unset"
        propWidth="28.969rem"
        propHeight="31.781rem"
        propTop="unset"
        propRight="-5.287rem"
        propBottom="-4.887rem"
        propRight1="-0.094rem"
        propBottom1="0rem"
        propMaxHeight="100%"
        propLeft1="unset"
        propFlexDirection="column"
        propGap1="2.563rem 0rem"
        propPadding1="unset"
        propPadding2="unset"
        propPadding3="unset"
        propGap2="1.25rem"
        propAlignSelf="stretch"
        propMaxHeight1="100%"
        propMinHeight="3.5rem"
        propHeight1="unset"
      />
      <CardTypeVerticalStyleDesi1 bankLogo />
      <CardTypeHorizontalStyleDe2 bankLogo />
    </div>
  );
};

export default FrameComponent6;
