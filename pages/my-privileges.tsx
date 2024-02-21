import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header1 from "../components/header1";
import Dashboardframecontainer from "../components/dashboardframecontainer";

const MyPrivileges: NextPage = () => {
  const router = useRouter();

  const onService1IconClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  const onServicesTextClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  const onSettingsSolid1Click = useCallback(() => {
    router.push("/setting-page2");
  }, [router]);

  const onSettingTextClick = useCallback(() => {
    router.push("/setting-page2");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[0.063rem_0rem] tracking-[normal]">
      <div className="w-[15.625rem] h-[64rem] relative bg-ghostwhite hidden z-[0]" />
      <div className="w-[21.875rem] h-[0.063rem] relative hidden max-w-full z-[1]" />
      <Header1 />
      <main className="self-stretch h-[57.688rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.563rem] box-border relative gap-[0rem_2.438rem] max-w-full mq825:gap-[0rem_2.438rem]">
        <Dashboardframecontainer
          user31="/user-3-1.svg"
          economicInvestment1="/economicinvestment-1.svg"
          creditCard1="/creditcard-1.svg"
          loan1="/loan-1.svg"
          service1="/service-1.svg"
          econometrics1="/econometrics-11.svg"
          settingsSolid1="/settings-solid-11.svg"
          homeFrameGap="2.438rem 0rem"
          twoFactorAuthenticationColor="#b1b1b1"
          propColor="#b1b1b1"
          propColor1="#b1b1b1"
          propColor2="#b1b1b1"
          propColor3="#b1b1b1"
          propColor4="#1814f3"
          propColor5="#b1b1b1"
          onService1IconClick={onService1IconClick}
          onServicesTextClick={onServicesTextClick}
          onSettingsSolid1Click={onSettingsSolid1Click}
          onSettingTextClick={onSettingTextClick}
        />
        <img
          className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] bottom-[25.125rem] left-[0rem]"
          loading="eager"
          alt=""
          src="/rectangle-17.svg"
        />
        <footer className="self-stretch flex-1 bg-whitesmoke-100 box-border flex flex-row items-start justify-center py-[4.625rem] px-[0rem] max-w-[calc(100%_-_209px)] text-center text-[2.5rem] text-steelblue font-button-medium-18p border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px] mq675:pt-[3rem] mq675:pb-[3rem] mq675:box-border mq825:max-w-full">
          <div className="h-[57.688rem] w-[74.375rem] relative bg-whitesmoke-100 box-border hidden max-w-full border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px]" />
          <div className="w-[69.375rem] rounded-6xl bg-white flex flex-row items-center justify-center pt-[15.063rem] px-[15.063rem] pb-[15.125rem] box-border max-w-full z-[2] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq675:pt-[9.813rem] mq675:pb-[9.813rem] mq675:box-border mq825:pl-[7.5rem] mq825:pr-[7.5rem] mq825:box-border">
            <div className="h-[33.188rem] w-[69.375rem] relative rounded-6xl bg-white hidden max-w-full" />
            <h1 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-[1.5rem] mq825:text-[2rem]">
              COMMING SOON...!
            </h1>
          </div>
        </footer>
      </main>
      <div className="w-[0.063rem] h-full absolute my-0 mx-[!important] top-[0rem] bottom-[0rem] left-[15.563rem] bg-aliceblue-300 z-[3]" />
    </div>
  );
};

export default MyPrivileges;
