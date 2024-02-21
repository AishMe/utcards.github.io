import type { NextPage } from "next";

const CUSTOMIZE: NextPage = () => {
  return (
    <section className="self-stretch rounded-21xl bg-gray-700 overflow-hidden flex flex-col items-start justify-start p-[5.5rem] box-border gap-[5rem_0rem] max-w-full text-left text-[2.5rem] text-white font-jetbrains-mono mq750:gap-[5rem_0rem] mq750:py-[3.563rem] mq750:px-[2.75rem] mq750:box-border mq450:gap-[5rem_0rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
      <h1 className="m-0 relative text-inherit tracking-[0.2em] uppercase font-extrabold font-inherit mq1050:text-[2rem] mq450:text-[1.5rem]">
        Customize
      </h1>
      <div className="w-[26.75rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-center text-[2rem] text-gray-200 mq750:flex-wrap">
        <div className="flex flex-col items-center justify-start gap-[1.625rem_0rem]">
          <div className="w-[10.25rem] h-[10.25rem] relative rounded-181xl [background:linear-gradient(180deg,_rgba(142,_0,_254,_0),_rgba(254,_0,_198,_0.4))]" />
          <h2 className="m-0 relative text-inherit tracking-[0.12em] uppercase font-bold font-inherit mq1050:text-[1.625rem] mq450:text-[1.188rem]">
            Style1
          </h2>
        </div>
        <div className="flex flex-col items-center justify-start gap-[1.625rem_0rem]">
          <div className="w-[10.25rem] h-[10.25rem] relative rounded-181xl [background:linear-gradient(180deg,_rgba(251,_251,_251,_0.8),_rgba(251,_251,_251,_0))]" />
          <h2 className="m-0 relative text-inherit tracking-[0.12em] uppercase font-bold font-inherit mq1050:text-[1.625rem] mq450:text-[1.188rem]">
            Style2
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CUSTOMIZE;
