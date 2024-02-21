import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();

  const onSIGNINTextClick = useCallback(() => {
    router.push("/sign-in");
  }, [router]);

  const onSignInAppleFrameClick = useCallback(() => {
    router.push("/main-dashboard");
  }, [router]);

  return (
    <div className="w-full relative rounded-3xs bg-white overflow-hidden flex flex-row items-center justify-start gap-[0rem_16.625rem] tracking-[normal] text-center text-[1.563rem] text-label-color-light-primary font-montserrat lg:flex-wrap lg:gap-[0rem_16.625rem] mq450:gap-[0rem_16.625rem] mq750:gap-[0rem_16.625rem]">
      <div className="h-[64rem] w-[39.375rem] [background:linear-gradient(164.84deg,_#201658,_rgba(29,_36,_202,_0.74)_49.56%,_rgba(152,_171,_238,_0.4)_89.67%,_rgba(249,_232,_201,_0))] flex flex-row items-start justify-end py-[13.125rem] px-[0rem] box-border min-w-[39.375rem] max-w-full lg:flex-1 mq750:pt-[8.5rem] mq750:pb-[8.5rem] mq750:box-border mq750:min-w-full">
        <div className="h-[64rem] w-[39.375rem] relative [background:linear-gradient(164.84deg,_#201658,_rgba(29,_36,_202,_0.74)_49.56%,_rgba(152,_171,_238,_0.4)_89.67%,_rgba(249,_232,_201,_0))] hidden max-w-full" />
        <div className="flex flex-col items-center justify-start pt-[6.938rem] px-[2.375rem] pb-[0rem] relative gap-[4.813rem_0rem]">
          <img
            className="w-[calc(100%_-_12px)] h-[calc(100%_-_5px)] absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0.313rem] left-[0.75rem] rounded-31xl max-w-full overflow-hidden max-h-full z-[1]"
            loading="eager"
            alt=""
            src="/rectangle-279.svg"
          />
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.438rem]">
            <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-[1.25rem]">
              LOGIN
            </h3>
          </div>
          <h3
            className="m-0 relative text-inherit font-semibold font-inherit text-white cursor-pointer z-[2] mq450:text-[1.25rem]"
            onClick={onSIGNINTextClick}
          >
            SIGN IN
          </h3>
        </div>
      </div>
      <div className="h-[51.25rem] w-[22.75rem] flex flex-col items-start justify-start min-w-[22.75rem] max-w-full text-[3.5rem] text-primary-2 lg:flex-1 mq450:min-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[3.25rem_0rem] mq450:gap-[3.25rem_0rem]">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.688rem] pl-[1.563rem]">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem]">
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
          </div>
          <form
            className="m-0 self-stretch rounded-11xl bg-lavender-200 shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-col items-center justify-center py-[1.875rem] px-[1.25rem] gap-[1.25rem_0rem] cursor-pointer mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border"
            onClick={onSignInAppleFrameClick}
          >
            <div className="self-stretch h-[2.563rem] rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] box-border flex flex-row items-center justify-start p-[0.625rem] whitespace-nowrap border-[1px] border-solid border-gray-1100">
              <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto text-gray-1000 text-center">
                User Name
              </div>
            </div>
            <div className="self-stretch h-[2.625rem] rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] box-border flex flex-row items-center justify-start py-[0.625rem] px-[0.5rem] border-[1px] border-solid border-gray-1100">
              <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-extrabold font-roboto text-gray-1000 text-center">
                ******
              </div>
            </div>
            <div className="w-[13.375rem] rounded-11xl bg-blue-200 shadow-[0px_11px_49px_rgba(24,_20,_243,_0.63)] [backdrop-filter:blur(4px)] box-border flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] border-[1px] border-solid border-gray-1100">
              <div className="w-[2.875rem] relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-extrabold font-roboto text-white text-center inline-block">
                Login
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-[1.25rem] px-[1.375rem] gap-[0.938rem_0rem]">
              <div className="rounded-81xl [background:linear-gradient(180deg,_rgba(24,_20,_243,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[0px_10px_30px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center py-[0.875rem] px-[2.438rem] gap-[0rem_0.438rem] whitespace-nowrap border-[1px] border-solid border-blue-200">
                <img
                  className="h-[1.063rem] w-[1rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/google-1.svg"
                />
                <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto text-label-color-light-primary text-left">
                  Continue with Google
                </div>
              </div>
              <div className="w-[16.25rem] rounded-81xl [background:linear-gradient(180deg,_rgba(24,_20,_243,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[0px_10px_30px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden flex flex-row items-center justify-start py-[0.875rem] px-[2.5rem] gap-[0rem_0.625rem] border-[1px] border-solid border-blue-200">
                <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-semibold font-default-bold-body text-label-color-light-primary text-left">
                  􀣺
                </div>
                <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto text-label-color-light-primary text-left">
                  Continue with Apple
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
