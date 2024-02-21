import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const FrameComponent7: NextPage = () => {
  const router = useRouter();

  const onFrameContainer3Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="self-stretch rounded-11xl bg-lavender-200 shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[1.563rem] px-[1rem] pb-[1.625rem] gap-[1.875rem_0rem] text-center text-[1.688rem] text-label-color-light-primary font-roboto mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.625rem]">
        <h3 className="m-0 relative text-inherit tracking-[-0.41px] leading-[1.375rem] font-bold font-inherit mq450:text-[1.375rem] mq450:leading-[1.125rem]">
          Login
        </h3>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[1.25rem_0rem]">
        <div className="self-stretch rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] flex flex-row items-center justify-start pt-[0.625rem] px-[0.625rem] pb-[0.563rem] whitespace-nowrap border-[1px] border-solid border-gray-1100">
          <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto text-gray-1000 text-center">
            User Name
          </div>
        </div>
        <div className="self-stretch rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] flex flex-row items-center justify-start pt-[0.625rem] px-[0.625rem] pb-[0.563rem] whitespace-nowrap border-[1px] border-solid border-gray-1100">
          <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto text-gray-1000 text-center">
            Email Address
          </div>
        </div>
        <div className="self-stretch rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] flex flex-row items-center justify-start pt-[0.625rem] px-[0.625rem] pb-[0.563rem] border-[1px] border-solid border-gray-1100">
          <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-extrabold font-roboto text-gray-1000 text-center">
            ******
          </div>
        </div>
        <div
          className="self-stretch rounded-11xl bg-blue-200 shadow-[0px_11px_49px_rgba(24,_20,_243,_0.63)] [backdrop-filter:blur(4px)] flex flex-row items-center justify-center py-[0.625rem] pr-[1.25rem] pl-[1.313rem] whitespace-nowrap cursor-pointer border-[1px] border-solid border-gray-1100"
          onClick={onFrameContainer3Click}
        >
          <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-extrabold font-roboto text-label-color-light-primary text-center">
            Create account
          </div>
        </div>
        <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-blue-400" />
      </form>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.625rem] text-left text-[0.938rem]">
        <div className="relative tracking-[-0.41px] leading-[1.375rem]">
          <span>Already have an Account?</span>
          <span className="font-black"> Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
