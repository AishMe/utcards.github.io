import type { NextPage } from "next";

const FedExButton: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[1.75rem_0rem] max-w-full text-left text-[3rem] text-label-color-light-primary font-lekton">
      <header className="self-stretch bg-white flex flex-row items-end justify-start pt-[1.5rem] px-[1.75rem] pb-[1.563rem] box-border gap-[0.563rem] top-[0] z-[99] sticky max-w-full text-left text-[1.25rem] text-label-color-light-primary font-button-medium-18p">
        <div className="h-[5.875rem] w-[85.438rem] relative bg-white hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.188rem]">
          <img
            className="w-[2.25rem] h-[2.25rem] relative overflow-hidden shrink-0 object-cover z-[2]"
            loading="eager"
            alt=""
            src="/iconfinder-vector-65-09-473792-1@2x.png"
          />
        </div>
        <div className="h-[2.188rem] w-[15.125rem] flex flex-col items-start justify-start py-[0rem] pr-[1.438rem] pl-[0rem] box-border text-[1.563rem] text-primary-2 font-montserrat">
          <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem]">
            <div className="relative font-extrabold whitespace-nowrap z-[2]">
              UTCards
            </div>
            <div className="relative text-[1.25rem] font-medium font-button-medium-18p text-label-color-light-primary z-[1]">
              Home
            </div>
          </div>
        </div>
        <div className="h-[1.813rem] flex flex-col items-start justify-start py-[0rem] pr-[1.813rem] pl-[0rem] box-border">
          <div className="relative font-medium z-[1]">Trans</div>
        </div>
        <div className="h-[1.813rem] flex flex-col items-start justify-start py-[0rem] pr-[1.813rem] pl-[0rem] box-border">
          <div className="relative font-medium z-[1]">Acc.</div>
        </div>
        <div className="h-[1.813rem] flex flex-col items-start justify-start py-[0rem] pr-[1.813rem] pl-[0rem] box-border">
          <div className="relative font-medium z-[1]">Loan</div>
        </div>
        <div className="h-[1.813rem] w-[27.688rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border max-w-full text-mediumblue">
          <div className="relative font-semibold whitespace-nowrap z-[1]">
            Card Form
          </div>
        </div>
        <div className="w-[5.813rem] flex flex-col items-start justify-start">
          <img
            className="w-[2.5rem] h-[2.5rem] relative z-[1]"
            loading="eager"
            alt=""
            src="/search.svg"
          />
        </div>
        <div className="h-[2rem] w-[6.063rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border relative">
          <img
            className="w-[1.875rem] h-[1.606rem] relative z-[1]"
            loading="eager"
            alt=""
            src="/vector2.svg"
          />
          <img
            className="w-[2.638rem] h-[2.875rem] absolute my-0 mx-[!important] top-[calc(50%_-_23px)] right-[-1.819rem] z-[2]"
            loading="eager"
            alt=""
            src="/group-15.svg"
          />
        </div>
        <div className="w-[1.688rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.125rem] box-border text-[0.938rem] text-white">
          <div className="self-stretch h-[1.688rem] relative">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-crimson w-full h-full z-[3]" />
            <div className="absolute top-[0.313rem] left-[0.563rem] font-medium z-[4]">
              3
            </div>
          </div>
        </div>
      </header>
      <h1 className="m-0 w-[14.5rem] relative text-inherit font-bold font-inherit inline-block box-border pl-[1.25rem] pr-[1.25rem] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
        CHECKOUT
      </h1>
    </div>
  );
};

export default FedExButton;
