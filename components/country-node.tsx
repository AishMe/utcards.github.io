import type { NextPage } from "next";

const CountryNode: NextPage = () => {
  return (
    <section className="w-[70.938rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.438rem] box-border max-w-full text-left text-[1.5rem] text-label-color-light-primary font-lekton">
      <b className="relative z-[1] mq450:text-[1.188rem]">02</b>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_4.375rem] max-w-full text-[2rem] lg:gap-[0rem_4.375rem] mq750:gap-[0rem_4.375rem]">
        <div className="flex flex-col items-start justify-start pt-[0.688rem] px-[0rem] pb-[0rem]">
          <h2 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            SHIPPING DETAILS
          </h2>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.438rem_0rem] min-w-[32.875rem] max-w-full text-[1.75rem] font-kurale mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.875rem_0rem] max-w-full">
            <h3 className="m-0 relative text-inherit font-normal font-inherit z-[3] mq450:text-[1.375rem]">
              Shipping address
            </h3>
            <div className="self-stretch flex flex-col items-center justify-center relative max-w-full font-lekton">
              <div className="self-stretch rounded-6xs box-border flex flex-row items-center justify-start py-[1.313rem] px-[1.5rem] max-w-full z-[1] border-[1px] border-solid border-dimgray">
                <div className="h-[4.375rem] w-[50.563rem] relative rounded-6xs box-border hidden max-w-full border-[1px] border-solid border-dimgray" />
                <b className="relative z-[2] mq450:text-[1.375rem]">
                  Nieuwezijds Voorburgwal 334-3
                </b>
              </div>
              <div className="my-0 mx-[!important] absolute top-[-1rem] left-[1.188rem] bg-whitesmoke-200 flex flex-row items-center justify-end py-[0.25rem] pr-[0rem] pl-[0.375rem] whitespace-nowrap z-[2] text-[1.25rem] text-dimgray font-button-medium-18p">
                <div className="h-[2rem] w-[9.438rem] relative bg-whitesmoke-200 hidden" />
                <div className="relative z-[1]">Street address</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.438rem] box-border gap-[0.875rem_0rem] max-w-full font-lekton">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1.813rem] max-w-full mq750:flex-wrap">
              <div className="flex-1 flex flex-row items-start justify-start gap-[0rem_0.375rem] max-w-full mq750:flex-wrap mq750:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[2.625rem_0rem] min-w-[11.125rem] mq450:gap-[2.625rem_0rem]">
                  <div className="self-stretch flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] gap-[1.375rem_0rem]">
                    <div className="w-[15.625rem] flex flex-col items-center justify-center relative">
                      <div className="self-stretch rounded-6xs flex flex-row items-center justify-start py-[1.313rem] px-[1.5rem] whitespace-nowrap z-[1] border-[1px] border-solid border-dimgray">
                        <div className="h-[4.375rem] w-[15.625rem] relative rounded-6xs box-border hidden border-[1px] border-solid border-dimgray" />
                        <b className="relative z-[2]">1012 PW</b>
                      </div>
                      <div className="my-0 mx-[!important] absolute top-[-1rem] left-[1.563rem] bg-whitesmoke-200 flex flex-row items-center justify-center py-[0.25rem] pr-[0rem] pl-[0.125rem] whitespace-nowrap z-[2] text-[1.25rem] text-dimgray font-button-medium-18p">
                        <div className="h-[2rem] w-[5.438rem] relative bg-whitesmoke-200 hidden" />
                        <div className="relative z-[1]">Zip code</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.625rem] text-[1.25rem] text-dimgray font-kurale">
                      <img
                        className="h-[0.938rem] w-[0.938rem] relative z-[1]"
                        loading="eager"
                        alt=""
                        src="/vector-21.svg"
                      />
                      <div className="relative z-[1] mq450:text-[1rem]">
                        Add different billing address
                      </div>
                    </div>
                  </div>
                  <h3 className="m-0 relative text-inherit font-normal font-kurale z-[1] mq450:text-[1.375rem]">
                    Shipping method
                  </h3>
                </div>
                <div className="w-[15.625rem] flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border">
                  <div className="self-stretch flex flex-col items-center justify-center relative">
                    <div className="self-stretch rounded-6xs flex flex-row items-center justify-start py-[1.313rem] px-[1.438rem] z-[1] border-[1px] border-solid border-dimgray">
                      <div className="h-[4.375rem] w-[15.625rem] relative rounded-6xs box-border hidden border-[1px] border-solid border-dimgray" />
                      <b className="relative z-[2] mq450:text-[1.375rem]">
                        Amsterdam
                      </b>
                    </div>
                    <div className="w-[2.688rem] my-0 mx-[!important] absolute top-[-1rem] left-[1.5rem] bg-whitesmoke-200 flex flex-row items-center justify-center py-[0.25rem] pr-[0.188rem] pl-[0.063rem] box-border z-[2] text-[1.25rem] text-dimgray font-button-medium-18p">
                      <div className="h-[2rem] w-[2.688rem] relative bg-whitesmoke-200 hidden" />
                      <div className="relative z-[1] mq450:text-[1rem]">
                        City
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[15.625rem] flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch flex flex-col items-center justify-center relative">
                  <div className="self-stretch rounded-6xs flex flex-row items-center justify-between py-[1.313rem] pr-[1.563rem] pl-[1.438rem] gap-[1.25rem] z-[1] border-[1px] border-solid border-dimgray">
                    <div className="h-[4.375rem] w-[15.625rem] relative rounded-6xs box-border hidden border-[1px] border-solid border-dimgray" />
                    <b className="relative z-[2] mq450:text-[1.375rem]">
                      England
                    </b>
                    <img
                      className="h-[0.844rem] w-[1.25rem] relative z-[2]"
                      alt=""
                      src="/vector-31.svg"
                    />
                  </div>
                  <div className="my-0 mx-[!important] absolute top-[-1rem] left-[1.5rem] bg-whitesmoke-200 flex flex-row items-center justify-center py-[0.25rem] pr-[0.25rem] pl-[0.125rem] z-[2] text-[1.25rem] text-dimgray font-button-medium-18p">
                    <div className="h-[2rem] w-[5.125rem] relative bg-whitesmoke-200 hidden" />
                    <div className="relative z-[1] mq450:text-[1rem]">
                      Country
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1.813rem] max-w-full text-[1.5rem] font-koho mq750:flex-wrap">
              <div className="flex-[0.7982] rounded-6xs bg-aliceblue-400 box-border flex flex-row items-center justify-between py-[1.875rem] pr-[1.563rem] pl-[5.875rem] min-w-[15.813rem] gap-[1.25rem] max-w-full z-[1] border-[1px] border-solid border-blue-300 mq450:flex-wrap mq450:pl-[1.25rem] mq450:box-border mq450:flex-1">
                <div className="h-[6.938rem] w-[24.375rem] relative rounded-6xs bg-aliceblue-400 box-border hidden max-w-full border-[1px] border-solid border-blue-300" />
                <img
                  className="h-[5.125rem] w-[7.063rem] relative object-cover hidden"
                  alt=""
                  src="/postnllogo-1@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="h-[1.875rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                    <div className="mb-[-0.062rem] relative font-medium z-[2] mq450:text-[1.188rem]">
                      PostNL
                    </div>
                  </div>
                  <div className="relative text-[1rem] font-medium text-dimgray z-[2]">
                    Delivery: Today
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[1.375rem] text-blue-300">
                  <div className="flex flex-row items-start justify-start gap-[0rem_0.313rem]">
                    <div className="relative font-medium whitespace-nowrap z-[1] mq450:text-[1.125rem]">
                      $0.99
                    </div>
                    <img
                      className="h-[1.938rem] w-[1.938rem] relative min-h-[1.938rem] z-[1]"
                      loading="eager"
                      alt=""
                      src="/button.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-6xs box-border flex flex-row items-center justify-start py-[1.875rem] pr-[1.563rem] pl-[1.625rem] gap-[2.625rem] min-w-[15.813rem] max-w-full z-[1] border-[1px] border-solid border-dimgray mq450:flex-wrap mq450:gap-[2.625rem]">
                <div className="h-[6.938rem] w-[24.375rem] relative rounded-6xs box-border hidden max-w-full border-[1px] border-solid border-dimgray" />
                <div className="flex-1 flex flex-row items-center justify-start gap-[0rem_0.688rem] min-w-[8.188rem]">
                  <img
                    className="h-[2.375rem] w-[3.563rem] relative object-cover z-[1]"
                    loading="eager"
                    alt=""
                    src="/7fd278b510f34cafb0e391c526031c83-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="h-[1.875rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                      <div className="mb-[-0.062rem] relative font-medium z-[1] mq450:text-[1.188rem]">
                        FedEx
                      </div>
                    </div>
                    <div className="relative text-[1rem] font-medium text-dimgray z-[1]">
                      Delivery: Tomorrow
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0rem_0.313rem] text-[1.375rem] text-dimgray">
                  <div className="relative font-medium whitespace-nowrap z-[1] mq450:text-[1.125rem]">
                    $0.99
                  </div>
                  <img
                    className="h-[1.938rem] w-[1.938rem] relative min-h-[1.938rem] z-[1]"
                    loading="eager"
                    alt=""
                    src="/vector-41.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1.813rem] max-w-full text-[1.5rem] font-koho mq750:flex-wrap">
            <div className="flex-[0.8102] rounded-6xs box-border flex flex-row items-center justify-start pt-[1.938rem] pb-[1.813rem] pr-[1.563rem] pl-[5.875rem] gap-[2.625rem] min-w-[15.813rem] max-w-full z-[1] border-[1px] border-solid border-dimgray mq450:flex-wrap mq450:gap-[2.625rem] mq450:pl-[1.25rem] mq450:box-border mq450:flex-1">
              <div className="h-[6.938rem] w-[24.375rem] relative rounded-6xs box-border hidden max-w-full border-[1px] border-solid border-dimgray" />
              <img
                className="h-[5.125rem] w-[7.063rem] relative object-cover hidden"
                alt=""
                src="/postnllogo-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[5.438rem]">
                <div className="h-[1.875rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                  <div className="mb-[-0.062rem] relative font-medium z-[2] mq450:text-[1.188rem]">
                    UPS
                  </div>
                </div>
                <div className="relative text-[1rem] font-medium text-dimgray z-[2]">
                  Delivery: Tomorrow
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0rem_0.313rem] text-[1.375rem] text-dimgray">
                <div className="relative font-medium whitespace-nowrap z-[1] mq450:text-[1.125rem]">
                  $0.99
                </div>
                <img
                  className="h-[1.938rem] w-[1.938rem] relative min-h-[1.938rem] z-[1]"
                  loading="eager"
                  alt=""
                  src="/vector-41.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-6xs box-border flex flex-row items-center justify-start py-[1.813rem] pr-[1.563rem] pl-[1.938rem] gap-[1rem] min-w-[15.813rem] max-w-full z-[1] border-[1px] border-solid border-dimgray mq450:flex-wrap">
              <div className="h-[6.938rem] w-[24.375rem] relative rounded-6xs box-border hidden max-w-full border-[1px] border-solid border-dimgray" />
              <img
                className="h-[2.938rem] w-[2.938rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/vector-6.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.563rem] pl-[0rem] box-border min-w-[6.5rem]">
                <div className="h-[1.875rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                  <div className="mb-[-0.062rem] relative font-medium z-[1] mq450:text-[1.188rem]">
                    In Person
                  </div>
                </div>
                <div className="relative text-[1.125rem] font-medium text-dimgray z-[1]">
                  Delivery: Tomorrow
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0rem_0.313rem] text-[1.375rem] text-dimgray">
                <div className="relative font-medium whitespace-nowrap z-[1] mq450:text-[1.125rem]">
                  $0.99
                </div>
                <img
                  className="h-[1.938rem] w-[1.938rem] relative min-h-[1.938rem] z-[1]"
                  loading="eager"
                  alt=""
                  src="/vector-41.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryNode;
