import type { NextPage } from "next";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import CUSTOMIZE1 from "../components/c-u-s-t-o-m-i-z-e1";

const GradientCards: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-900 overflow-hidden flex flex-col items-center justify-start pt-[0rem] pb-[5.5rem] pr-[0.063rem] pl-[0rem] box-border gap-[13.625rem_0rem] tracking-[normal] mq900:gap-[13.625rem_0rem] mq1325:gap-[13.625rem_0rem]">
      <main className="self-stretch flex flex-col items-center justify-start gap-[8rem_0rem] max-w-full mq900:gap-[8rem_0rem] mq1325:gap-[8rem_0rem]">
        <header className="self-stretch bg-gray-700 overflow-hidden flex flex-row items-center justify-start py-[6.938rem] px-[8.875rem] text-left text-[5rem] text-white font-poppins mq900:pl-[4.438rem] mq900:pr-[4.438rem] mq900:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <h1 className="m-0 relative text-inherit capitalize font-medium font-inherit">
            Gradient
          </h1>
        </header>
        <section className="w-[90.25rem] rounded-21xl box-border overflow-hidden flex flex-row flex-wrap items-start justify-start p-[5.5rem] gap-[0rem_7.5rem] max-w-full border-[1px] border-dashed border-blueviolet-100 mq900:gap-[0rem_7.5rem] mq900:py-[1.5rem] mq900:px-[1.375rem] mq900:box-border mq450:gap-[0rem_7.5rem] mq1325:py-[2.313rem] mq1325:px-[2.75rem] mq1325:box-border">
          <FrameComponent6 />
          <FrameComponent5 />
        </section>
      </main>
      <CUSTOMIZE1 />
    </div>
  );
};

export default GradientCards;
