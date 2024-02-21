import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header2 from "../components/header2";
import Dashboardframecontainer from "../components/dashboardframecontainer";
import GroupComponent3 from "../components/group-component3";
import GroupComponent2 from "../components/group-component2";

const Services: NextPage = () => {
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

  const onUser31Click = useCallback(() => {
    router.push("/accounts");
  }, [router]);

  const onAccountsTextClick = useCallback(() => {
    router.push("/accounts");
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

  const onMyPrivilegesTextClick = useCallback(() => {
    router.push("/my-privileges");
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
      <Header2 services="Services" />
      <div className="w-[0.063rem] h-full absolute my-0 mx-[!important] top-[0rem] bottom-[0rem] left-[15.563rem] bg-aliceblue-300 z-[3]" />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.563rem] box-border relative gap-[0rem_2.438rem] max-w-full mq750:gap-[0rem_2.438rem]">
        <Dashboardframecontainer
          user31="/user-3-1.svg"
          economicInvestment1="/economicinvestment-1.svg"
          creditCard1="/creditcard-1.svg"
          loan1="/loan-1.svg"
          service1="/service-11.svg"
          econometrics1="/econometrics-1.svg"
          settingsSolid1="/settings-solid-11.svg"
          homeFrameGap="2.438rem 0rem"
          twoFactorAuthenticationColor="#b1b1b1"
          propColor="#b1b1b1"
          propColor1="#b1b1b1"
          propColor2="#b1b1b1"
          propColor3="#1814f3"
          propColor4="#b1b1b1"
          propColor5="#b1b1b1"
          onHome2IconClick={onHome2IconClick}
          onDashboardTextClick={onDashboardTextClick}
          onTransfer1IconClick={onTransfer1IconClick}
          onTransactionsTextClick={onTransactionsTextClick}
          onUser31Click={onUser31Click}
          onAccountsTextClick={onAccountsTextClick}
          onEconomicInvestment1IconClick={onEconomicInvestment1IconClick}
          onInvestmentsTextClick={onInvestmentsTextClick}
          onCreditCard1IconClick={onCreditCard1IconClick}
          onCreditCardsTextClick={onCreditCardsTextClick}
          onLoan1IconClick={onLoan1IconClick}
          onLoansTextClick={onLoansTextClick}
          onMyPrivilegesTextClick={onMyPrivilegesTextClick}
          onSettingsSolid1Click={onSettingsSolid1Click}
          onSettingTextClick={onSettingTextClick}
        />
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] top-[24.813rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200" />
        <section className="flex-1 bg-whitesmoke-100 box-border flex flex-col items-center justify-start pt-[1.875rem] px-[1.875rem] pb-[3.375rem] gap-[1.5rem_0rem] max-w-[calc(100%_-_209px)] text-left text-[1.25rem] text-gray-300 font-button-medium-18p border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px] mq450:pb-[1.438rem] mq450:box-border mq1050:pt-[1.25rem] mq1050:pb-[2.188rem] mq1050:box-border mq1050:max-w-full">
          <div className="w-[74.375rem] h-[57.688rem] relative bg-whitesmoke-100 box-border hidden max-w-full border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px]" />
          <div className="flex flex-row items-start justify-start gap-[1.875rem] max-w-full z-[1] mq1125:flex-wrap">
            <div className="rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] px-[3.25rem] box-border gap-[1.375rem] max-w-full mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="h-[7.5rem] w-[21.875rem] relative rounded-6xl bg-white hidden max-w-full" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-373.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <div className="relative font-semibold z-[1] mq450:text-[1rem]">
                  Life Insurance
                </div>
                <div className="relative text-[1rem] text-steelblue z-[1]">
                  Unlimited protection
                </div>
              </div>
            </div>
            <div className="rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[3.938rem] pl-[4rem] box-border gap-[1.375rem] max-w-full mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="h-[7.5rem] w-[21.875rem] relative rounded-6xl bg-white hidden max-w-full" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-374.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <div className="relative font-semibold z-[1] mq450:text-[1rem]">
                  Shopping
                </div>
                <div className="relative text-[1rem] text-steelblue z-[1]">
                  Buy. Think. Grow.
                </div>
              </div>
            </div>
            <div className="rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[3.875rem] pl-[3.938rem] box-border gap-[1.375rem] max-w-full mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="h-[7.5rem] w-[21.875rem] relative rounded-6xl bg-white hidden max-w-full" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-375.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <div className="relative font-semibold z-[1] mq450:text-[1rem]">
                  Safety
                </div>
                <div className="relative text-[1rem] text-steelblue z-[1]">
                  We are your allies
                </div>
              </div>
            </div>
          </div>
          <div className="w-[69.375rem] flex flex-col items-start justify-start gap-[1.75rem_0rem] max-w-full text-[1.375rem] text-primary-2">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.125rem]">
              Bank Services List
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem_0rem] max-w-full">
              <GroupComponent3 />
              <GroupComponent2
                briefcase1="/briefcase-1.svg"
                checkingAccounts="Checking accounts"
              />
              <GroupComponent2
                briefcase1="/group.svg"
                checkingAccounts="Savings accounts"
                propOverflowX="unset"
                propBackgroundColor="#ffe0eb"
                propPadding="1.125rem 1.125rem 1.063rem 1.188rem"
                propBackgroundColor1="#ffe0eb"
                propWidth="1.419rem"
                propOverflow="unset"
                propPadding1="unset"
                propPadding2="unset"
                propPadding3="unset"
                propBorder="1px solid #1814f3"
                propColor="#1814f3"
                propBorder1="1px solid #1814f3"
              />
              <GroupComponent2
                briefcase1="/user-3-2.svg"
                checkingAccounts="Debit and credit cards"
                propOverflowX="unset"
                propBackgroundColor="#e7edff"
                propPadding="1.125rem 1.063rem 1.063rem 1.125rem"
                propBackgroundColor1="#e7edff"
                propWidth="1.563rem"
                propOverflow="hidden"
                propPadding1="0rem 0.563rem 0rem 0rem"
                propPadding2="0rem 0.563rem 0rem 0rem"
                propPadding3="0rem 0.438rem 0rem 0rem"
                propBorder="1px solid #718ebf"
                propColor="#718ebf"
                propBorder1="1px solid #718ebf"
              />
              <GroupComponent2
                briefcase1="/shield-1.svg"
                checkingAccounts="Life Insurance"
                propOverflowX="auto"
                propBackgroundColor="#dcfaf8"
                propPadding="1.125rem 1.063rem 1.063rem 1.125rem"
                propBackgroundColor1="#dcfaf8"
                propWidth="1.563rem"
                propOverflow="hidden"
                propPadding1="unset"
                propPadding2="unset"
                propPadding3="unset"
                propBorder="1px solid #718ebf"
                propColor="#718ebf"
                propBorder1="1px solid #718ebf"
              />
              <GroupComponent3 />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
