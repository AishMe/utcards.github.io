import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header3 from "../components/header3";
import Dashboardframecontainer from "../components/dashboardframecontainer";
import Apple from "../components/apple";

const Accounts: NextPage = () => {
  const router = useRouter();

  const onHome2IconClick = useCallback(() => {
    router.push("/main-dashboard");
  }, [router]);

  const onDashboardTextClick = useCallback(() => {
    router.push("/main-dashboard");
  }, [router]);

  const onTransfer1IconClick = useCallback(() => {
    router.push("/transaction");
  }, [router]);

  const onTransactionsTextClick = useCallback(() => {
    router.push("/transaction");
  }, [router]);

  const onEconomicInvestment1IconClick = useCallback(() => {
    router.push("/investments");
  }, [router]);

  const onInvestmentsTextClick = useCallback(() => {
    router.push("/investments");
  }, [router]);

  const onCreditCard1IconClick = useCallback(() => {
    router.push("/credit-cards");
  }, [router]);

  const onCreditCardsTextClick = useCallback(() => {
    router.push("/credit-cards");
  }, [router]);

  const onLoan1IconClick = useCallback(() => {
    router.push("/loan");
  }, [router]);

  const onLoansTextClick = useCallback(() => {
    router.push("/loan");
  }, [router]);

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

  const onGroupContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[0.063rem_0rem] tracking-[normal]">
      <div className="w-[15.625rem] h-[64rem] relative bg-ghostwhite hidden" />
      <div className="w-[21.875rem] h-[0.063rem] relative hidden max-w-full" />
      <div className="w-[74.375rem] h-[0.063rem] relative bg-aliceblue-300 hidden max-w-full" />
      <Header3
        loans="Accounts"
        uTCardsPadding="0.625rem 0rem 0rem"
        loansPadding="0.25rem 0rem 0rem"
        maskGroupWidth="20.875rem"
        rectangleDivPadding="0rem 0rem 0.25rem"
      />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.563rem] box-border relative gap-[0rem_2.438rem] max-w-full shrink-0 mq750:gap-[0rem_2.438rem]">
        <Dashboardframecontainer
          user31="/user-3-11.svg"
          economicInvestment1="/economicinvestment-1.svg"
          creditCard1="/creditcard-1.svg"
          loan1="/loan-1.svg"
          service1="/service-1.svg"
          econometrics1="/econometrics-1.svg"
          settingsSolid1="/settings-solid-11.svg"
          homeFrameGap="2.375rem 0rem"
          twoFactorAuthenticationColor="#1814f3"
          propColor="#b1b1b1"
          propColor1="#b1b1b1"
          propColor2="#b1b1b1"
          propColor3="#b1b1b1"
          propColor4="#b1b1b1"
          propColor5="#b1b1b1"
          onHome2IconClick={onHome2IconClick}
          onDashboardTextClick={onDashboardTextClick}
          onTransfer1IconClick={onTransfer1IconClick}
          onTransactionsTextClick={onTransactionsTextClick}
          onEconomicInvestment1IconClick={onEconomicInvestment1IconClick}
          onInvestmentsTextClick={onInvestmentsTextClick}
          onCreditCard1IconClick={onCreditCard1IconClick}
          onCreditCardsTextClick={onCreditCardsTextClick}
          onLoan1IconClick={onLoan1IconClick}
          onLoansTextClick={onLoansTextClick}
          onService1IconClick={onService1IconClick}
          onServicesTextClick={onServicesTextClick}
          onSettingsSolid1Click={onSettingsSolid1Click}
          onSettingTextClick={onSettingTextClick}
        />
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] top-[8.875rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200" />
        <section className="flex-1 bg-whitesmoke-100 box-border flex flex-col items-center justify-start pt-[1.875rem] px-[1.875rem] pb-[2.063rem] gap-[1.438rem_0rem] max-w-[calc(100%_-_209px)] z-[1] text-left text-[1rem] text-steelblue font-button-medium-18p border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px] mq1050:pt-[1.25rem] mq1050:pb-[1.313rem] mq1050:box-border mq1050:max-w-full mq450:pb-[1.25rem] mq450:box-border">
          <div className="w-[74.375rem] h-[57.875rem] relative bg-whitesmoke-100 box-border hidden max-w-full border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px]" />
          <div className="flex flex-row items-start justify-center gap-[0rem_1.875rem] max-w-full mq1125:flex-wrap">
            <div className="rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[2.438rem] pl-[2.25rem] gap-[0.938rem] z-[2]">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-494.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                <div className="relative z-[1]">My Balance</div>
                <div className="relative text-[1.563rem] font-semibold text-gray-300 whitespace-nowrap z-[1] mq450:text-[1.25rem]">
                  $12,750
                </div>
              </div>
            </div>
            <div className="rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[2.75rem] pl-[2.563rem] gap-[0.938rem] z-[2] mq450:pr-[1.25rem] mq450:box-border">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-400.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                <div className="relative z-[1]">Income</div>
                <div className="relative text-[1.563rem] font-semibold text-gray-300 whitespace-nowrap z-[1] mq450:text-[1.25rem]">
                  $5,600
                </div>
              </div>
            </div>
            <div className="rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[2.688rem] pl-[2.563rem] gap-[0.938rem] z-[2] mq450:pr-[1.25rem] mq450:box-border">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                alt=""
                src="/group-402.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                <div className="relative z-[1]">Expense</div>
                <div className="relative text-[1.563rem] font-semibold text-gray-300 whitespace-nowrap z-[1] mq450:text-[1.25rem]">
                  $3,460
                </div>
              </div>
            </div>
            <div className="rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[2.375rem] pl-[2.438rem] gap-[0.938rem] z-[2]">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-401.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                <div className="relative z-[1]">Total Saving</div>
                <div className="relative text-[1.563rem] font-semibold text-gray-300 whitespace-nowrap z-[1] mq450:text-[1.25rem]">
                  $7,920
                </div>
              </div>
            </div>
          </div>
          <div className="w-[69.375rem] flex flex-row items-start justify-center gap-[0rem_1.875rem] max-w-full text-[1.375rem] text-darkslateblue-100 mq1050:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem_0rem] min-w-[29.625rem] max-w-full mq750:min-w-full">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
                Last Transaction
              </h3>
              <div className="w-[45.625rem] rounded-6xl bg-white overflow-x-auto flex flex-col items-center justify-start py-[1.563rem] pr-[1.75rem] pl-[1.563rem] box-border gap-[0.625rem] max-w-full z-[2] text-[1rem] text-gray-300">
                <div className="w-[45.625rem] h-[14.688rem] relative rounded-6xl bg-white hidden" />
                <div className="w-[42.313rem] flex flex-row items-center justify-start gap-[0rem_2.719rem] text-steelblue">
                  <div className="flex flex-row items-center justify-start gap-[0rem_1.563rem] max-w-full">
                    <img
                      className="h-[3.438rem] w-[3.438rem] relative z-[1]"
                      loading="eager"
                      alt=""
                      src="/group-328.svg"
                    />
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] gap-[0.438rem_0rem] text-gray-300">
                      <div className="relative font-medium z-[1]">
                        Spotify Subscription
                      </div>
                      <div className="relative text-[0.938rem] text-steelblue z-[1]">
                        25 Jan 2021
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.125rem] pl-[0rem]">
                      <div className="relative z-[1]">Shopping</div>
                    </div>
                    <div className="relative z-[1]">1234 ****</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.563rem] pl-[0rem]">
                    <div className="relative z-[1]">Pending</div>
                  </div>
                  <div className="relative font-medium text-indianred text-right z-[1]">
                    -$150
                  </div>
                </div>
                <div className="w-[42.313rem] flex flex-row items-center justify-start gap-[0rem_4.563rem]">
                  <div className="flex flex-row items-center justify-start gap-[0rem_1.563rem]">
                    <img
                      className="h-[3.438rem] w-[3.438rem] relative z-[1]"
                      loading="eager"
                      alt=""
                      src="/group-327.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                      <div className="relative font-medium z-[1]">
                        Mobile Service
                      </div>
                      <div className="relative text-[0.938rem] text-steelblue z-[1]">
                        25 Jan 2021
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-steelblue">
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.813rem] pl-[0rem]">
                      <div className="relative z-[1]">Service</div>
                    </div>
                    <div className="relative z-[1]">1234 ****</div>
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem]">
                      <div className="relative z-[1]">Completed</div>
                    </div>
                    <div className="relative font-medium text-indianred text-right z-[1]">
                      -$340
                    </div>
                  </div>
                </div>
                <div className="w-[42.313rem] flex flex-row items-center justify-between gap-[1.25rem]">
                  <div className="flex flex-row items-center justify-start gap-[0rem_1.563rem]">
                    <div className="h-[3.438rem] w-[3.438rem] relative rounded-xl bg-mistyrose z-[1]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-mistyrose w-full h-full hidden" />
                      <img
                        className="absolute top-[0.938rem] left-[0.938rem] w-[1.563rem] h-[1.563rem] overflow-hidden z-[1]"
                        loading="eager"
                        alt=""
                        src="/user2-1.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                      <div className="relative font-medium z-[1]">
                        Emilly Wilson
                      </div>
                      <div className="relative text-[0.938rem] text-steelblue z-[1]">
                        25 Jan 2021
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] box-border gap-[0rem_2.688rem] max-w-full text-steelblue">
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.438rem] pl-[0rem]">
                      <div className="relative z-[1]">Transfer</div>
                    </div>
                    <div className="relative z-[1]">1234 ****</div>
                    <div className="relative z-[1]">Completed</div>
                    <div className="relative font-medium text-aquamarine text-right z-[1]">
                      +$780
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1.938rem] max-w-full mq750:flex-wrap mq750:gap-[0rem_1.938rem]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem_0rem] min-w-[14.188rem] max-w-full">
                  <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">{`Debit & Credit Overview`}</h3>
                  <div className="self-stretch rounded-6xl bg-white overflow-hidden flex flex-col items-end justify-start pt-[0.875rem] px-[0rem] pb-[1.313rem] box-border gap-[1.813rem_0rem] max-w-full z-[2] text-[1rem] text-label-color-light-primary font-roboto">
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.25rem]">
                      <div className="w-[16.625rem] flex flex-row items-start justify-start gap-[0rem_0.688rem]">
                        <div className="h-[1.125rem] w-[1.125rem] relative rounded-8xs bg-royalblue shadow-[0px_0px_15px_rgba(17,_52,_133,_0.5)_inset]" />
                        <div className="flex-1 relative">
                          <span className="font-extrabold">$7,560</span>
                          <span className="font-button-medium-18p text-steelblue">
                            {" "}
                            Debit
                          </span>
                        </div>
                        <div className="h-[1.125rem] w-[1.125rem] relative rounded-8xs bg-palevioletred shadow-[0px_0px_15px_rgba(172,_13,_108,_0.5)_inset]" />
                        <div className="flex-1 relative">
                          <span className="font-extrabold">$5,420</span>
                          <span className="font-button-medium-18p text-steelblue">
                            {" "}
                            Credit
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[20.438rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border max-w-full text-center text-[0.875rem] text-steelblue font-button-medium-18p">
                      <div className="w-[39.25rem] flex flex-col items-start justify-start gap-[0.563rem_0rem] max-w-[192%] shrink-0">
                        <div className="self-stretch flex flex-row items-end justify-center gap-[0rem_1rem] mq750:flex-wrap">
                          <div className="h-[13.125rem] flex flex-col items-start justify-start">
                            <div className="w-[1.875rem] flex-1 relative rounded-3xs bg-orange z-[1]" />
                            <div className="w-[1.875rem] h-[3.563rem] relative rounded-3xs bg-blue-100" />
                          </div>
                          <div className="h-[15.938rem] flex flex-col items-start justify-start">
                            <div className="w-[1.875rem] flex-1 relative rounded-3xs bg-orange z-[1]" />
                            <div className="w-[1.875rem] h-[7.375rem] relative rounded-3xs bg-blue-100" />
                          </div>
                          <div className="h-[5.625rem] flex flex-col items-start justify-start">
                            <div className="w-[1.875rem] h-[2rem] relative rounded-3xs bg-orange z-[1]" />
                            <div className="w-[1.875rem] flex-1 relative rounded-3xs bg-blue-100" />
                          </div>
                          <div className="h-[9.875rem] w-[1.875rem] relative rounded-3xs bg-blue-100" />
                          <div className="h-[13.25rem] w-[1.875rem] relative rounded-3xs bg-blue-100" />
                          <div className="h-[8.188rem] flex flex-col items-start justify-start">
                            <div className="w-[1.875rem] h-[1.813rem] relative rounded-3xs bg-orange" />
                            <div className="w-[1.875rem] flex-1 relative rounded-3xs bg-blue-100 z-[1]" />
                          </div>
                          <div className="h-[13.375rem] w-[1.875rem] relative rounded-3xs bg-orange" />
                          <img
                            className="h-[15.938rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[12.438rem] min-h-[15.938rem]"
                            loading="eager"
                            alt=""
                            src="/-httpsapplottiefilescomanimationee8a33f5cc244d79984ae699e422884e@2x.png"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.313rem]">
                          <div className="flex flex-row items-start justify-center gap-[0rem_1.25rem] mq450:flex-wrap">
                            <div className="relative">Sat</div>
                            <div className="relative">Sun</div>
                            <div className="relative">Mon</div>
                            <div className="relative">Tue</div>
                            <div className="relative">Wed</div>
                            <div className="relative">Thu</div>
                            <div className="relative mq450:w-full">Fri</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border min-w-[14.188rem] max-w-full">
                  <div className="self-stretch h-[18.625rem] flex flex-col items-start justify-start gap-[1.125rem_0rem]">
                    <h3 className="m-0 h-[1.038rem] relative text-inherit font-semibold font-inherit inline-block shrink-0 z-[2] mq450:text-[1.125rem]">
                      New Cards
                    </h3>
                    <div className="self-stretch flex-1 rounded-6xl bg-white overflow-hidden flex flex-col items-center justify-end py-[2.563rem] pr-[1.25rem] pl-[1.313rem] gap-[1.25rem_0rem] z-[2] text-center text-[1.313rem] text-white">
                      <div
                        className="h-[4.188rem] rounded-3xs bg-blue-200 shadow-[0px_0px_20px_5px_#1814f3] flex flex-row items-center justify-center pt-[1.375rem] pb-[1.563rem] pr-[1.438rem] pl-[1.75rem] box-border whitespace-nowrap cursor-pointer"
                        onClick={onGroupContainerClick}
                      >
                        <div className="h-[4.188rem] w-[9.938rem] relative rounded-3xs bg-blue-200 shadow-[0px_0px_20px_5px_#1814f3] hidden" />
                        <b className="self-stretch relative flex items-center justify-center z-[1]">
                          New Card
                        </b>
                      </div>
                      <div className="h-[4.188rem] rounded-3xs bg-blue-200 shadow-[0px_0px_20px_5px_#1814f3] flex flex-row items-center justify-end pt-[1.375rem] pb-[1.563rem] pr-[1.563rem] pl-[2rem] box-border whitespace-nowrap">
                        <div className="h-[4.188rem] w-[10rem] relative rounded-3xs bg-blue-200 shadow-[0px_0px_20px_5px_#1814f3] hidden" />
                        <b className="self-stretch relative flex items-center justify-center z-[1]">
                          Add Card
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[21.875rem] flex flex-col items-start justify-start gap-[1.25rem_0rem] min-w-[21.875rem] max-w-full mq750:min-w-full mq1050:flex-1">
              <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
                  My Card
                </h3>
                <div className="relative text-[1.063rem] font-semibold text-primary-2 text-right z-[2]">
                  See All
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border max-w-full text-[0.75rem] text-white font-lato">
                <div className="flex-1 rounded-6xl [background:linear-gradient(107.38deg,_#2d60ff,_#539bff)] flex flex-col items-center justify-start pt-[1.5rem] px-[0rem] pb-[0rem] box-border gap-[2.5rem] max-w-full z-[2] mq450:gap-[2.5rem]">
                  <div className="self-stretch h-[14.688rem] relative rounded-6xl [background:linear-gradient(107.38deg,_#2d60ff,_#539bff)] hidden" />
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.5rem] pl-[1.625rem] shrink-0">
                    <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                      <div className="h-[6.375rem] flex flex-col items-start justify-start gap-[1.813rem_0rem] min-w-[5.625rem] mq450:flex-1">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative z-[1]">Balance</div>
                          <div className="relative text-[1.25rem] font-semibold whitespace-nowrap z-[1] mq450:text-[1rem]">
                            $5,756
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem_0rem] text-gray-2000">
                          <div className="relative z-[1]">CARD HOLDER</div>
                          <div className="relative text-[0.938rem] font-semibold text-white whitespace-nowrap z-[1]">
                            Eddy Cusuma
                          </div>
                        </div>
                      </div>
                      <div className="w-[8.938rem] flex flex-col items-end justify-start gap-[2rem_0rem] min-w-[8.938rem] text-gray-2000 mq450:flex-1">
                        <img
                          className="w-[2.175rem] h-[2.175rem] relative object-cover z-[1]"
                          loading="eager"
                          alt=""
                          src="/chip-card@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                            <div className="relative z-[1]">VALID THRU</div>
                            <div className="relative text-[0.938rem] font-semibold text-white z-[1]">
                              12/22
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] flex flex-row items-center justify-between py-[1.25rem] pr-[1.5rem] pl-[1.625rem] box-border gap-[1.25rem] max-w-full shrink-0 whitespace-nowrap z-[1] text-[1.375rem]">
                    <div className="h-[4.375rem] w-[21.875rem] relative rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] hidden max-w-full" />
                    <div className="relative font-semibold z-[2]">
                      3778 **** **** 1234
                    </div>
                    <img
                      className="h-[1.875rem] w-[2.75rem] relative z-[2]"
                      alt=""
                      src="/group-17.svg"
                    />
                  </div>
                </div>
              </div>
              <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
                Invoices Sent
              </h3>
              <div className="self-stretch rounded-6xl bg-white flex flex-col items-center justify-start pt-[1.875rem] pb-[1.938rem] pr-[1.75rem] pl-[1.563rem] box-border gap-[1.313rem] max-w-full z-[2] text-[1rem] text-darkgray mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                <div className="w-[21.875rem] h-[22.75rem] relative rounded-6xl bg-white hidden max-w-full" />
                <Apple
                  apple21="/apple-2-1.svg"
                  appleStore="Apple Store"
                  hAgo="5h ago"
                  emptyFrame="$450"
                />
                <Apple
                  apple21="/user2-1-1.svg"
                  appleStore="Michael"
                  hAgo="2 days ago"
                  emptyFrame="$160"
                  propBackgroundColor="#fff5d9"
                  propBackgroundColor1="#fff5d9"
                />
                <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
                  <div className="w-[10.375rem] flex flex-row items-center justify-start gap-[0rem_1.25rem]">
                    <div className="flex flex-col items-start justify-start gap-[1.313rem_0rem]">
                      <div className="rounded-xl bg-lavender-100 flex flex-row items-center justify-center pt-[1.125rem] pb-[1.063rem] pr-[1.063rem] pl-[1.125rem] z-[1]">
                        <div className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-lavender-100 hidden" />
                        <img
                          className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 z-[2]"
                          alt=""
                          src="/playstation-1.svg"
                        />
                      </div>
                      <div className="rounded-xl bg-mistyrose flex flex-row items-center justify-center pt-[1.125rem] pb-[1.063rem] pr-[1.063rem] pl-[1.125rem] z-[1]">
                        <div className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-mistyrose hidden" />
                        <img
                          className="h-[1.563rem] w-[1.563rem] relative z-[2]"
                          loading="eager"
                          alt=""
                          src="/user2-1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2.313rem_0rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                        <div className="relative font-medium whitespace-nowrap z-[1]">
                          Playstation
                        </div>
                        <div className="relative text-[0.938rem] text-steelblue z-[1]">
                          5 days ago
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                        <div className="relative font-medium z-[1]">
                          William
                        </div>
                        <div className="relative text-[0.938rem] text-steelblue z-[1]">
                          10 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start py-[1.25rem] px-[0rem] gap-[3.875rem_0rem] text-right text-steelblue">
                    <div className="relative whitespace-nowrap z-[1]">
                      $1085
                    </div>
                    <div className="relative whitespace-nowrap z-[1]">$90</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[66.375rem] w-[0.063rem] absolute my-0 mx-[!important] top-[-6.312rem] left-[15.563rem] bg-aliceblue-300 z-[2]" />
      </main>
    </div>
  );
};

export default Accounts;
