import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const CheckoutButtonGroup: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/accounts");
  }, [router]);

  return (
    <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[5.063rem] box-border max-w-full text-left text-[2rem] text-label-color-light-primary font-button-medium-18p mq675:pl-[2.5rem] mq675:box-border">
      <div className="w-[30.125rem] flex flex-col items-center justify-start gap-[2.938rem_0rem] max-w-full mq675:gap-[2.938rem_0rem]">
        <div className="self-stretch flex flex-col items-center justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border gap-[1.813rem_0rem] max-w-full">
          <div className="w-[24.625rem] flex flex-row items-start justify-start py-[0rem] pr-[1.063rem] pl-[0rem] box-border max-w-full">
            <div className="flex-1 flex flex-col items-center justify-center max-w-full">
              <div className="self-stretch rounded-8xs box-border flex flex-row items-center justify-between pt-[1.188rem] pb-[1.063rem] pr-[2.438rem] pl-[1.25rem] relative gap-[1.25rem] max-w-full z-[1] border-[1px] border-solid border-dimgray mq450:flex-wrap">
                <b className="relative font-lekton mq450:text-[1.188rem] mq825:text-[1.625rem]">
                  SCALE+91
                </b>
                <div className="relative text-[1.125rem] font-semibold text-blue-200">
                  Apply
                </div>
                <div className="h-[4.431rem] w-[23.538rem] relative rounded-8xs box-border hidden max-w-full z-[2] border-[1px] border-solid border-dimgray" />
                <div className="my-0 mx-[!important] absolute top-[-0.75rem] left-[0.813rem] flex flex-row items-center justify-center py-[0.188rem] pr-[0.438rem] pl-[0.5rem] z-[2] text-[0.938rem] text-dimgray">
                  <div className="h-[1.613rem] w-[7.844rem] relative bg-white hidden" />
                  <div className="relative z-[1]">Discount Code</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[1.438rem] text-dimgray mq450:flex-wrap">
            <div className="w-[11rem] flex flex-col items-start justify-start gap-[2.063rem_0rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                <div className="relative font-medium mq450:text-[1.125rem]">
                  Subtotal
                </div>
                <div className="relative font-medium mq450:text-[1.125rem]">
                  Shipping Cost
                </div>
                <div className="relative font-medium mq450:text-[1.125rem]">
                  Discount (20%)
                </div>
              </div>
              <div className="relative font-medium mq450:text-[1.125rem]">
                Total
              </div>
            </div>
            <div className="w-[7.813rem] flex flex-col items-end justify-start gap-[2.25rem_0rem] text-label-color-light-primary font-lekton">
              <div className="w-[6.688rem] flex flex-col items-end justify-start gap-[0.625rem_0rem]">
                <div className="w-[4.813rem] relative font-medium font-roboto inline-block whitespace-nowrap mq450:text-[1.125rem]">
                  ₹200
                </div>
                <div className="w-[4.625rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
                  <div className="h-[1.688rem] flex-1 relative inline-block mq450:text-[1.125rem]">
                    <b>+</b>
                    <span className="font-medium font-roboto">₹</span>
                    <b>50</b>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0rem] text-blue-200">
                  <div className="h-[1.669rem] flex-1 relative inline-block whitespace-nowrap mq450:text-[1.125rem]">
                    <b>-</b>
                    <span className="font-medium font-roboto">₹</span>
                    <b>52.18</b>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0rem] text-[1.688rem] font-roboto">
                <div className="flex-1 relative font-medium whitespace-nowrap mq450:text-[1.375rem]">
                  ₹198.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[2rem] pl-[1.25rem] box-border max-w-full text-white font-lekton">
          <div
            className="rounded-lg bg-blue-100 shadow-[0px_0px_20px_5px_#1a16f3] flex flex-row items-center justify-start pt-[1.625rem] pb-[1.688rem] pr-[10.375rem] pl-[8.438rem] box-border max-w-full cursor-pointer mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border"
            onClick={onGroupContainerClick}
          >
            <div className="h-[5.688rem] w-[26.844rem] relative rounded-lg bg-blue-100 shadow-[0px_0px_20px_5px_#1a16f3] hidden max-w-full" />
            <b className="h-[2.375rem] relative inline-block z-[1] mq450:text-[1.188rem] mq825:text-[1.625rem]">
              Checkout
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutButtonGroup;
