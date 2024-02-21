import type { NextPage } from "next";
import FrameComponent4 from "../components/frame-component4";
import LayoutHorizontalThemePurpl from "../components/layout-horizontal-theme-purpl";
import LayoutVerticalThemePurple from "../components/layout-vertical-theme-purple";
import LayoutVerticalThemeDefault from "../components/layout-vertical-theme-default";
import CUSTOMIZE from "../components/c-u-s-t-o-m-i-z-e";

const GlassmorphismCards: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-900 overflow-hidden flex flex-col items-center justify-start pt-[0rem] pb-[5.5rem] pr-[0.063rem] pl-[0rem] box-border gap-[7.75rem_0rem] tracking-[normal] mq750:gap-[7.75rem_0rem] mq1050:gap-[7.75rem_0rem]">
      <header className="self-stretch bg-gray-700 overflow-hidden flex flex-row items-center justify-start py-[6.938rem] px-[8.875rem] text-left text-[5rem] text-white font-poppins mq1050:pl-[4.438rem] mq1050:pr-[4.438rem] mq1050:box-border mq450:pl-[2.188rem] mq450:pr-[2.188rem] mq450:box-border">
        <h1 className="m-0 relative text-inherit capitalize font-medium font-inherit">
          Glassmorphism
        </h1>
      </header>
      <main className="w-[108rem] flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[8.25rem_0rem] max-w-full lg:gap-[8.25rem_0rem] mq750:gap-[8.25rem_0rem] mq450:gap-[8.25rem_0rem]">
        <section className="w-[90.25rem] rounded-21xl box-border overflow-hidden flex flex-row items-start justify-start p-[5.5rem] gap-[0rem_2.813rem] max-w-full border-[1px] border-dashed border-blueviolet-100 lg:flex-wrap lg:py-[3.563rem] lg:px-[2.75rem] lg:box-border mq750:gap-[0rem_2.813rem] mq750:py-[1.5rem] mq750:px-[1.375rem] mq750:box-border mq1050:pt-[2.313rem] mq1050:pb-[2.313rem] mq1050:box-border">
          <FrameComponent4 />
          <div className="w-[35.875rem] flex flex-col items-start justify-start gap-[12.5rem_0rem] min-w-[35.875rem] max-w-full lg:flex-1 mq750:gap-[12.5rem_0rem] mq1050:min-w-full mq450:gap-[12.5rem_0rem]">
            <LayoutHorizontalThemePurpl bankLogo />
            <div className="w-[27.813rem] flex flex-row items-start justify-start py-[0rem] px-[0.375rem] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[7.5rem_0rem] max-w-full mq450:gap-[7.5rem_0rem]">
                <LayoutVerticalThemePurple bankLogo />
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.125rem] box-border max-w-full">
                  <LayoutVerticalThemeDefault bankLogo />
                </div>
              </div>
            </div>
          </div>
        </section>
        <CUSTOMIZE />
      </main>
    </div>
  );
};

export default GlassmorphismCards;
