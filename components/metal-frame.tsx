import type { NextPage } from "next";
import MetalBronzeHorizontalMetal from "./metal-bronze-horizontal-metal";

const MetalFrame: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_3.313rem] max-w-full text-left text-[1.25rem] text-label-color-light-primary font-button-medium-18p mq450:gap-[0rem_3.313rem] mq825:flex-wrap">
      <MetalBronzeHorizontalMetal />
      <div className="w-[14.25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem] box-border min-w-[14.25rem] text-[1.688rem] mq825:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.188rem_0rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.75rem_0rem]">
            <h3 className="m-0 self-stretch h-[4rem] relative text-inherit inline-block shrink-0 font-inherit mq450:text-[1.375rem]">
              <p className="m-0 font-black">Type:</p>
              <p className="m-0 font-kurale">Debit Card</p>
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
                      <span className="font-extrabold">Color:</span>
                      <span className="font-button-medium-18p">{` `}</span>
                    </p>
                    <p className="m-0">Dark</p>
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

export default MetalFrame;
