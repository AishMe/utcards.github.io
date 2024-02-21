import type { NextPage } from "next";
import CardTypeHorizontalStyleDe1 from "./card-type-horizontal-style-de1";
import CardTypeVerticalStyleDesi from "./card-type-vertical-style-desi";
import CardTypeHorizontalStyleDe from "./card-type-horizontal-style-de";

const FrameComponent5: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[12.5rem_0rem] min-w-[23.313rem] max-w-full text-left text-[1.5rem] text-white font-button-medium-18p mq900:gap-[12.5rem_0rem] mq900:min-w-full mq450:gap-[12.5rem_0rem]">
      <CardTypeHorizontalStyleDe1 vector="/vector-7.svg" bankLogo />
      <CardTypeVerticalStyleDesi bankLogo />
      <CardTypeHorizontalStyleDe bankLogo />
    </div>
  );
};

export default FrameComponent5;
