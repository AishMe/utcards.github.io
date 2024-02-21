import type { NextPage } from "next";
import CardTypeHorizontalStyleDe1 from "./card-type-horizontal-style-de1";
import BankType6Icon from "./bank-type6-icon";

const FrameComponent2: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_2.813rem] max-w-full text-left text-[1.688rem] text-label-color-light-primary font-button-medium-18p mq450:gap-[0rem_2.813rem] mq825:flex-wrap">
      <div className="flex-1 flex flex-col items-center justify-center relative min-w-[23.438rem] max-w-full mq675:min-w-full">
        <CardTypeHorizontalStyleDe1
          vector="/texture-rectangle.svg"
          bankLogo={false}
          propPadding="2.5rem 2.625rem 2.125rem 2.5rem"
          propGap="2.813rem 0rem"
          propLeft="-17.125rem"
          propWidth="39.3rem"
          propHeight="44.969rem"
          propTop="-12.812rem"
          propRight="unset"
          propBottom="unset"
          propRight1="unset"
          propBottom1="unset"
          propMaxHeight="unset"
          propLeft1="0.063rem"
          propFlexDirection="row"
          propGap1="unset"
          propPadding1="0rem 0.063rem"
          propPadding2="0rem 0rem 1.188rem"
          propPadding3="0rem 0.063rem"
          propGap2="unset"
          propAlignSelf="unset"
          propMaxHeight1="unset"
          propMinHeight="unset"
          propHeight1="3.5rem"
        />
        <BankType6Icon />
      </div>
      <div className="w-[14.25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.75rem] box-border min-w-[14.25rem] mq825:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.188rem_0rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.75rem_0rem]">
            <h3 className="m-0 self-stretch h-[4rem] relative text-inherit inline-block shrink-0 font-inherit mq450:text-[1.375rem]">
              <p className="m-0 font-black">Type:</p>
              <p className="m-0 font-kurale">Credit Card</p>
            </h3>
            <div className="flex flex-col items-start justify-start gap-[1.125rem_0rem] font-roboto">
              <div className="relative mq450:text-[1.188rem]">
                <p className="m-0 font-black">Name:</p>
                <p className="m-0 text-[1.5rem] font-kurale">BAHADUR NUROGLU</p>
              </div>
              <div className="w-[12.125rem] flex flex-row items-end justify-between gap-[1.25rem] text-[1.25rem] font-button-medium-18p">
                <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem]">
                  <div className="relative mq450:text-[1rem]">
                    <p className="m-0">
                      <span className="font-extrabold font-button-medium-18p">
                        Color:
                      </span>
                      <span>{` `}</span>
                    </p>
                    <p className="m-0">Custom</p>
                  </div>
                </div>
                <div className="relative text-[1.188rem]">
                  <p className="m-0 font-black">Size:</p>
                  <p className="m-0">Physical</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2.188rem] flex flex-row items-start justify-start gap-[0rem_1.938rem] text-[1.125rem]">
            <div className="relative">
              <span className="font-black">CVV:</span>
              <span>{` `}</span>
              <span className="font-semibold">XXX</span>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.719rem] text-[1.25rem]">
              <div className="h-[2.125rem] w-[2.125rem] relative rounded-sm bg-gainsboro-300">
                <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-gainsboro-300 w-full h-full hidden" />
                <img
                  className="absolute top-[0.188rem] left-[0.063rem] w-[1.938rem] h-[1.688rem] z-[1]"
                  alt=""
                  src="/vector-32.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div className="relative mq450:text-[1rem]">1</div>
              </div>
              <div className="h-[2.125rem] w-[2.063rem] relative rounded-sm bg-gainsboro-300">
                <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-gainsboro-300 w-full h-full hidden" />
                <img
                  className="absolute top-[1.063rem] left-[0.063rem] w-[1.938rem] h-[0.125rem] z-[1]"
                  alt=""
                  src="/vector-42.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
