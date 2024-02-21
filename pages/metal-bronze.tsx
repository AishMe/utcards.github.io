import type { NextPage } from "next";
import TitleFrame from "../components/title-frame";
import LayoutHorizontalMaterialBr from "../components/layout-horizontal-material-br";
import LayoutVerticalMaterialBron from "../components/layout-vertical-material-bron";
import LayoutVerticalMaterialDefa from "../components/layout-vertical-material-defa";

const MetalBronze: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-900 overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[7.75rem] box-border gap-[7.75rem_0rem] tracking-[normal] mq750:gap-[7.75rem_0rem] mq1050:gap-[7.75rem_0rem]">
      <header className="self-stretch bg-gray-700 overflow-hidden flex flex-row items-center justify-start py-[6.938rem] px-[8.875rem] text-right text-[5rem] text-white font-poppins mq1050:pl-[4.438rem] mq1050:pr-[4.438rem] mq1050:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <h1 className="m-0 h-[7.5rem] relative text-inherit capitalize font-medium font-inherit inline-block whitespace-nowrap">
          Metal - Bronze
        </h1>
      </header>
      <section className="w-[90.25rem] rounded-21xl box-border overflow-hidden flex flex-row items-start justify-start p-[5.5rem] gap-[0rem_2.813rem] max-w-full border-[1px] border-dashed border-blueviolet-100 lg:flex-wrap lg:py-[3.563rem] lg:px-[2.75rem] lg:box-border mq750:gap-[0rem_2.813rem] mq750:py-[1.5rem] mq750:px-[1.375rem] mq750:box-border mq1050:pt-[2.313rem] mq1050:pb-[2.313rem] mq1050:box-border">
        <TitleFrame />
        <div className="w-[35.875rem] flex flex-col items-start justify-start gap-[12.5rem_0rem] min-w-[35.875rem] max-w-full lg:flex-1 mq750:gap-[12.5rem_0rem] mq1050:min-w-full mq450:gap-[12.5rem_0rem]">
          <LayoutHorizontalMaterialBr bankLogo />
          <div className="w-[31.938rem] flex flex-col items-start justify-start gap-[7.188rem_0rem] max-w-full mq750:gap-[7.188rem_0rem] mq450:gap-[7.188rem_0rem]">
            <LayoutVerticalMaterialBron bankLogo />
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <LayoutVerticalMaterialDefa bankLogo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetalBronze;
