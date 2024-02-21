import type { NextPage } from "next";
import Simple from "../components/simple";

const SimpleCards: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-900 overflow-hidden flex flex-col items-center justify-start pt-[0rem] pb-[7.75rem] pr-[0.063rem] pl-[0rem] box-border gap-[7.75rem_0rem] tracking-[normal] mq750:gap-[7.75rem_0rem] mq1050:gap-[7.75rem_0rem]">
      <header className="self-stretch bg-gray-700 overflow-hidden flex flex-row items-center justify-start py-[6.938rem] px-[8.875rem] text-left text-[5rem] text-white font-poppins mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[4.438rem] mq750:pr-[4.438rem] mq750:box-border">
        <h1 className="m-0 relative text-inherit capitalize font-medium font-inherit">
          Simple
        </h1>
      </header>
      <Simple />
    </div>
  );
};

export default SimpleCards;
