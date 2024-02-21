import type { NextPage } from "next";
import Code from "./code";

const FrameComponent1: NextPage = () => {
  return (
    <section className="w-[70.938rem] flex flex-col items-start justify-start gap-[0.625rem_0rem] max-w-full text-left text-[1.5rem] text-label-color-light-primary font-lekton">
      <b className="relative z-[1] mq450:text-[1.188rem]">03</b>
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-[2rem] lg:flex-wrap">
        <h2 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
          PAYMENT METHOD
        </h2>
        <div className="w-[50.563rem] flex flex-col items-start justify-start gap-[2.5rem_0rem] max-w-full text-[1.75rem] mq450:gap-[2.5rem_0rem]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1.813rem] max-w-full mq750:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2.438rem_0rem] min-w-[15.813rem] max-w-full mq450:gap-[2.438rem_0rem]">
              <div className="self-stretch rounded-6xs box-border flex flex-row items-center justify-start pt-[0.375rem] px-[1.688rem] pb-[0.313rem] gap-[0.938rem] max-w-full z-[1] border-[1px] border-solid border-dimgray mq450:flex-wrap">
                <div className="h-[4.375rem] w-[24.375rem] relative rounded-6xs box-border hidden max-w-full border-[1px] border-solid border-dimgray" />
                <img
                  className="h-[3.688rem] w-[3.125rem] relative object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/emblempaypal-1@2x.png"
                />
                <h3 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-[1.375rem]">
                  Paypal
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center relative max-w-full">
                <div className="self-stretch rounded-6xs box-border flex flex-row items-center justify-start py-[1.313rem] px-[1.5rem] max-w-full whitespace-nowrap z-[1] border-[1px] border-solid border-dimgray">
                  <div className="h-[4.375rem] w-[24.375rem] relative rounded-6xs box-border hidden max-w-full border-[1px] border-solid border-dimgray" />
                  <b className="relative z-[2]">1234 4567 8910 1112</b>
                </div>
                <div className="my-0 mx-[!important] absolute top-[-1rem] left-[1.188rem] bg-whitesmoke-200 flex flex-row items-center justify-center py-[0.25rem] pr-[0rem] pl-[0.25rem] whitespace-nowrap z-[2] text-[1.25rem] text-dimgray font-button-medium-18p">
                  <div className="h-[2rem] w-[8.188rem] relative bg-whitesmoke-200 hidden" />
                  <div className="relative z-[1]">Card number</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.438rem_0rem] min-w-[15.813rem] max-w-full text-[1.5rem]">
              <div className="self-stretch rounded-6xs box-border flex flex-row items-center justify-between pt-[1.25rem] pb-[1.188rem] pr-[1.563rem] pl-[1.625rem] gap-[1.25rem] max-w-full whitespace-nowrap z-[1] border-[1px] border-solid border-dimgray">
                <div className="h-[4.375rem] w-[24.375rem] relative rounded-6xs box-border hidden max-w-full border-[1px] border-solid border-dimgray" />
                <b className="relative z-[1]">Card or debit card</b>
                <img
                  className="h-[1.938rem] w-[1.938rem] relative z-[1]"
                  alt=""
                  src="/button.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[1.188rem] pb-[3.375rem] gap-[0rem_5.563rem] text-[1.75rem] mq450:flex-wrap mq450:gap-[0rem_5.563rem]">
                <div className="flex flex-row items-center justify-center relative">
                  <Code cVCCWFrame="01/28" vectorFrame="/vector-8.svg" />
                  <div className="bg-whitesmoke-200 flex flex-row items-center justify-center py-[0.25rem] pr-[0.063rem] pl-[0.25rem] whitespace-nowrap z-[2] text-[1.25rem] text-dimgray font-button-medium-18p">
                    <div className="h-[2rem] w-[7.25rem] relative bg-whitesmoke-200 hidden" />
                    <div className="relative z-[1]">Expiry date</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center relative text-[1.25rem] text-dimgray font-button-medium-18p">
                  <Code
                    cVCCWFrame="123"
                    vectorFrame="/vector-9.svg"
                    propRight="-4.687rem"
                    propPadding="1.25rem 1.563rem 1.25rem 1.625rem"
                  />
                  <div className="bg-whitesmoke-200 flex flex-row items-center justify-center py-[0.25rem] pr-[0.313rem] pl-[0.188rem] z-[2]">
                    <div className="h-[2rem] w-[5.688rem] relative bg-whitesmoke-200 hidden" />
                    <div className="relative z-[1] mq450:text-[1rem]">
                      CVC/CW
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0rem_0.875rem] max-w-full text-[1.25rem] text-dimgray">
            <img
              className="h-[1.119rem] w-[0.938rem] relative z-[1]"
              loading="eager"
              alt=""
              src="/vector-10.svg"
            />
            <b className="relative z-[1] mq450:text-[1rem]">{`Your transaction is secured with SSL encryption `}</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
