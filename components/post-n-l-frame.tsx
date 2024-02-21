import type { NextPage } from "next";

const PostNLFrame: NextPage = () => {
  return (
    <section className="w-[70.938rem] flex flex-row flex-wrap items-start justify-start gap-[0rem_4.375rem] max-w-full text-left text-[1.5rem] text-label-color-light-primary font-lekton lg:gap-[0rem_4.375rem] mq750:gap-[0rem_4.375rem]">
      <div className="flex flex-col items-start justify-start gap-[0.688rem_0rem]">
        <b className="relative z-[1] mq450:text-[1.188rem]">01</b>
        <h2 className="m-0 relative text-[2rem] font-bold font-inherit z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
          PERSONAL DETAILS
        </h2>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border min-w-[32.875rem] max-w-full mq750:min-w-full">
        <form className="m-0 self-stretch flex flex-row items-end justify-start gap-[0rem_1.813rem] max-w-full mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.375rem] px-[0rem] pb-[0rem] box-border gap-[2.438rem_0rem] min-w-[15.813rem] max-w-full mq450:gap-[2.438rem_0rem]">
            <div className="self-stretch flex flex-col items-center justify-center relative max-w-full">
              <div className="self-stretch rounded-6xs box-border flex flex-row items-center justify-start py-[1.313rem] px-[1.5rem] max-w-full z-[1] border-[1px] border-solid border-dimgray">
                <div className="h-[4.375rem] w-[24.375rem] relative rounded-6xs box-border hidden max-w-full border-[1px] border-solid border-dimgray" />
                <b className="relative text-[1.75rem] font-lekton text-label-color-light-primary text-left z-[2] mq450:text-[1.375rem]">
                  John
                </b>
              </div>
              <div className="my-0 mx-[!important] absolute top-[-1.375rem] left-[1.188rem] bg-whitesmoke-200 flex flex-row items-end justify-center pt-[0.563rem] pb-[0rem] pr-[0.063rem] pl-[0.25rem] whitespace-nowrap z-[2]">
                <div className="h-[2rem] w-[7rem] relative bg-whitesmoke-200 hidden" />
                <div className="relative text-[1.25rem] font-button-medium-18p text-dimgray text-left z-[1]">
                  First Name
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center relative max-w-full">
              <div className="self-stretch rounded-6xs box-border flex flex-row items-center justify-start py-[1.313rem] px-[1.375rem] max-w-full z-[1] border-[1px] border-solid border-dimgray">
                <div className="h-[4.375rem] w-[24.375rem] relative rounded-6xs box-border hidden max-w-full border-[1px] border-solid border-dimgray" />
                <b className="relative text-[1.75rem] font-lekton text-label-color-light-primary text-left whitespace-nowrap z-[2] mq450:text-[1.375rem]">
                  johnhammond@gmail.com
                </b>
              </div>
              <div className="my-0 mx-[!important] absolute top-[-1rem] left-[1.188rem] bg-whitesmoke-200 flex flex-row items-center justify-center py-[0.25rem] pr-[0rem] pl-[0.25rem] whitespace-nowrap z-[2]">
                <div className="h-[2rem] w-[8.75rem] relative bg-whitesmoke-200 hidden" />
                <div className="relative text-[1.25rem] font-button-medium-18p text-dimgray text-left z-[1]">
                  Email address
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.063rem] px-[0rem] pb-[0rem] box-border gap-[2.438rem_0rem] min-w-[15.813rem] max-w-full mq450:gap-[2.438rem_0rem]">
            <div className="self-stretch flex flex-col items-center justify-center relative max-w-full">
              <div className="self-stretch rounded-6xs box-border flex flex-row items-center justify-start py-[1.313rem] px-[1.438rem] max-w-full z-[1] border-[1px] border-solid border-dimgray">
                <div className="h-[4.375rem] w-[24.375rem] relative rounded-6xs box-border hidden max-w-full border-[1px] border-solid border-dimgray" />
                <b className="relative text-[1.75rem] font-lekton text-label-color-light-primary text-left z-[2] mq450:text-[1.375rem]">
                  Hammond
                </b>
              </div>
              <div className="my-0 mx-[!important] absolute top-[-1.062rem] left-[1.188rem] bg-whitesmoke-200 flex flex-row items-center justify-center py-[0.25rem] pr-[0.125rem] pl-[0.25rem] whitespace-nowrap z-[2]">
                <div className="h-[2rem] w-[7rem] relative bg-whitesmoke-200 hidden" />
                <div className="relative text-[1.25rem] font-button-medium-18p text-dimgray text-left z-[1]">
                  Last Name
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_0.188rem] mq450:flex-wrap">
              <div className="rounded-6xs flex flex-row items-center justify-start py-[1.313rem] pr-[1.188rem] pl-[1.125rem] gap-[0.313rem] z-[1] border-[1px] border-solid border-dimgray">
                <div className="h-[4.375rem] w-[5.625rem] relative rounded-6xs box-border hidden border-[1px] border-solid border-dimgray" />
                <b className="relative text-[1.75rem] font-lekton text-label-color-light-primary text-left z-[1] mq450:text-[1.375rem]">
                  +1
                </b>
                <img
                  className="h-[0.719rem] w-[1.25rem] relative z-[1]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className="flex-1 rounded-6xs box-border flex flex-row items-center justify-start py-[1.313rem] px-[1.75rem] relative min-w-[8.75rem] z-[1] border-[1px] border-solid border-dimgray">
                <div className="h-[4.375rem] w-[18.563rem] relative rounded-6xs box-border hidden z-[0] border-[1px] border-solid border-dimgray" />
                <b className="relative text-[1.75rem] font-lekton text-label-color-light-primary text-left z-[2] mq450:text-[1.375rem]">
                  8134164938
                </b>
                <div className="my-0 mx-[!important] absolute top-[-1rem] left-[-4.625rem] bg-whitesmoke-200 flex flex-row items-center justify-center py-[0.25rem] pr-[0rem] pl-[0.25rem] whitespace-nowrap z-[2]">
                  <div className="h-[2rem] w-[9.063rem] relative bg-whitesmoke-200 hidden" />
                  <div className="relative text-[1.25rem] font-button-medium-18p text-dimgray text-left z-[1]">
                    Phone number
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PostNLFrame;
