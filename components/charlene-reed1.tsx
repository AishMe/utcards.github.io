import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CharleneReed1Type = {
  yourName?: string;
  charleneReed?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const CharleneReed1: NextPage<CharleneReed1Type> = ({
  yourName,
  charleneReed,
  propPadding,
  propPadding1,
  propWidth,
}) => {
  const charleneReedStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[0.688rem_0rem] max-w-full text-left text-[1rem] text-gray-300 font-button-medium-18p"
      style={charleneReedStyle}
    >
      <div className="relative z-[1]">{yourName}</div>
      <div
        className="self-stretch rounded-mini bg-white box-border flex flex-row items-center justify-start py-[1rem] px-[1.25rem] max-w-full whitespace-nowrap z-[1] text-[0.938rem] text-steelblue border-[1px] border-solid border-aliceblue-600"
        style={groupDivStyle}
      >
        <div
          className="h-[3.125rem] w-[26.125rem] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-aliceblue-600"
          style={rectangleDivStyle}
        />
        <div className="relative z-[1]">{charleneReed}</div>
      </div>
    </div>
  );
};

export default CharleneReed1;
