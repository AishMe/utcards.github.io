import type { NextPage } from "next";
import LayoutHorizontalMaterialBr from "./layout-horizontal-material-br";
import LayoutVerticalMaterialMeta from "./layout-vertical-material-meta";
import LayoutHorizontalMaterialDe from "./layout-horizontal-material-de";

const TitleFrame: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-end justify-start gap-[12.5rem_0rem] min-w-[26.375rem] max-w-full text-left text-[1.25rem] text-label-color-light-primary font-button-medium-18p mq750:gap-[12.5rem_0rem] mq750:min-w-full mq450:gap-[12.5rem_0rem]">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <LayoutHorizontalMaterialBr
          bankLogo
          propAlignSelf="unset"
          propWidth="35.875rem"
          propBackground="linear-gradient(rgba(220, 207, 255, 0.2), rgba(220, 207, 255, 0.2)), linear-gradient(143.15deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)), linear-gradient(244.71deg, #576265, #757a7b 10.42%, #576265 18.75%, #576265 45.9%, #848b8a 52.1%, #9ea1a1 84.96%, #576265)"
        />
      </div>
      <div className="w-[29.625rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.813rem] px-[0rem] box-border max-w-full">
        <LayoutVerticalMaterialMeta bankLogo />
      </div>
      <LayoutHorizontalMaterialDe bankLogo />
    </div>
  );
};

export default TitleFrame;
