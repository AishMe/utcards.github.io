import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CodeType = {
  cVCCWFrame?: string;
  vectorFrame?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propPadding?: CSSProperties["padding"];
};

const Code: NextPage<CodeType> = ({
  cVCCWFrame,
  vectorFrame,
  propRight,
  propPadding,
}) => {
  const codeStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      padding: propPadding,
    };
  }, [propRight, propPadding]);

  return (
    <div
      className="w-[11.563rem] my-0 mx-[!important] absolute right-[-3.125rem] bottom-[-3.375rem] rounded-6xs box-border flex flex-row items-end justify-between py-[1.25rem] pr-[1.313rem] pl-[1.625rem] gap-[1.25rem] z-[1] text-left text-[1.75rem] text-label-color-light-primary font-lekton border-[1px] border-solid border-dimgray"
      style={codeStyle}
    >
      <div className="h-[4.375rem] w-[11.563rem] relative rounded-6xs box-border hidden border-[1px] border-solid border-dimgray" />
      <b className="relative z-[1] mq450:text-[1.375rem]">{cVCCWFrame}</b>
      <img
        className="h-[1.875rem] w-[1.875rem] relative min-h-[1.875rem] z-[1]"
        alt=""
        src={vectorFrame}
      />
    </div>
  );
};

export default Code;
