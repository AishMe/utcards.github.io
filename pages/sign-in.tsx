import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent7 from "../components/frame-component7";

const SignIn: NextPage = () => {
  const router = useRouter();

  const onLOGINTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative rounded-3xs bg-white overflow-hidden flex flex-row items-center justify-start gap-[0rem_17.938rem] tracking-[normal] text-center text-[1.563rem] text-white font-montserrat lg:flex-wrap lg:gap-[0rem_17.938rem] mq450:gap-[0rem_17.938rem] mq750:gap-[0rem_17.938rem]">
      <div className="h-[64rem] w-[35.375rem] [background:linear-gradient(163.07deg,_#201658,_rgba(29,_36,_202,_0.74)_49.56%,_rgba(152,_171,_238,_0.4)_89.67%,_rgba(249,_232,_201,_0))] flex flex-row items-start justify-end py-[19.375rem] px-[0rem] box-border min-w-[35.375rem] max-w-full lg:flex-1 mq450:pt-[8.188rem] mq450:pb-[8.188rem] mq450:box-border mq750:min-w-full mq1050:pt-[12.563rem] mq1050:pb-[12.563rem] mq1050:box-border">
        <div className="h-[64rem] w-[35.313rem] relative [background:linear-gradient(163.07deg,_#201658,_rgba(29,_36,_202,_0.74)_49.56%,_rgba(152,_171,_238,_0.4)_89.67%,_rgba(249,_232,_201,_0))] hidden max-w-full" />
        <div className="h-[15.188rem] flex flex-col items-center justify-start py-[0rem] px-[2.375rem] box-border relative gap-[4.813rem_0rem]">
          <img
            className="w-[calc(100%_-_12px)] h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0.75rem] rounded-31xl max-w-full overflow-hidden max-h-full z-[1]"
            loading="eager"
            alt=""
            src="/rectangle-279.svg"
          />
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.438rem]">
            <h3
              className="m-0 relative text-inherit font-bold font-inherit cursor-pointer z-[2] mq450:text-[1.25rem]"
              onClick={onLOGINTextClick}
            >
              LOGIN
            </h3>
          </div>
          <h3 className="m-0 relative text-inherit font-semibold font-inherit text-label-color-light-primary z-[2] mq450:text-[1.25rem]">
            SIGN IN
          </h3>
        </div>
      </div>
      <div className="h-[51.5rem] w-[21.875rem] flex flex-col items-start justify-start min-w-[21.875rem] max-w-full text-[3.5rem] text-primary-2 lg:flex-1 mq450:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.563rem_0rem] max-w-full mq450:gap-[2.563rem_0rem]">
          <div className="w-[20.938rem] flex flex-col items-center justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full">
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.438rem]">
              <img
                className="h-[13.5rem] w-[13.5rem] relative overflow-hidden shrink-0 object-cover"
                loading="eager"
                alt=""
                src="/iconfinder-vector-65-09-473792-11@2x.png"
              />
            </div>
            <h1 className="m-0 self-stretch h-[4.563rem] relative text-inherit font-black font-inherit flex items-center justify-center shrink-0 mq450:text-[2.125rem] mq1050:text-[2.813rem]">
              UTCards
            </h1>
          </div>
          <FrameComponent7 />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
