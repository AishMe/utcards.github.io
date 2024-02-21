import type { NextPage } from "next";
import FrameComponent2 from "../components/frame-component2";
import MetalFrame from "../components/metal-frame";
import CheckoutButtonGroup from "../components/checkout-button-group";

const IPhone13ProMax: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[2.438rem] px-[0.625rem] pb-[7.313rem] box-border gap-[0.438rem_0rem] tracking-[normal]">
      <header className="w-[58.938rem] flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[3.938rem] text-label-color-light-primary font-lekton">
        <h1 className="m-0 relative text-inherit font-bold font-inherit whitespace-nowrap">
          ORDER SUMMARY
        </h1>
      </header>
      <div className="self-stretch h-[0.5rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border max-w-full">
        <div className="h-[0.063rem] flex-1 relative box-border max-w-full border-t-[1px] border-solid border-gray-100" />
      </div>
      <main className="w-[58.938rem] flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full shrink-0">
        <section className="w-[53.438rem] flex flex-col items-start justify-start gap-[4.813rem_0rem] max-w-full mq450:gap-[4.813rem_0rem] mq825:gap-[4.813rem_0rem]">
          <FrameComponent2 />
          <MetalFrame />
          <CheckoutButtonGroup />
        </section>
      </main>
    </div>
  );
};

export default IPhone13ProMax;
