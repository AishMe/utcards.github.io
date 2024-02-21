import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FedExButton from "../components/fed-ex-button";
import PostNLFrame from "../components/post-n-l-frame";
import CountryNode from "../components/country-node";
import FrameComponent1 from "../components/frame-component1";

const LandingPage: NextPage = () => {
  const router = useRouter();

  const onLandingPageContainerClick = useCallback(() => {
    router.push("/i-phone13-pro-max");
  }, [router]);

  return (
    <div
      className="w-full relative overflow-hidden flex flex-col items-start justify-start gap-[3.375rem_0rem] bg-cover bg-no-repeat bg-[top] tracking-[normal] cursor-pointer mq750:gap-[3.375rem_0rem]"
      onClick={onLandingPageContainerClick}
    >
      <FedExButton />
      <main className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-start pt-[3.875rem] px-[3.875rem] pb-[4.063rem] box-border gap-[3.625rem_0rem] max-w-full lg:pt-[2.5rem] lg:px-[1.938rem] lg:pb-[2.625rem] lg:box-border mq750:gap-[3.625rem_0rem] mq750:pt-[1.625rem] mq750:pb-[1.688rem] mq750:box-border">
        <div className="w-[85.438rem] h-[87.188rem] relative bg-whitesmoke-200 hidden max-w-full" />
        <PostNLFrame />
        <CountryNode />
        <FrameComponent1 />
      </main>
    </div>
  );
};

export default LandingPage;
