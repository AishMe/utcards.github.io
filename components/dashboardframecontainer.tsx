import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DashboardframecontainerType = {
  user31?: string;
  economicInvestment1?: string;
  creditCard1?: string;
  loan1?: string;
  service1?: string;
  econometrics1?: string;
  settingsSolid1?: string;

  /** Style props */
  homeFrameGap?: CSSProperties["gap"];
  twoFactorAuthenticationColor?: CSSProperties["color"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propColor5?: CSSProperties["color"];

  /** Action props */
  onHome2IconClick?: () => void;
  onDashboardTextClick?: () => void;
  onTransfer1IconClick?: () => void;
  onTransactionsTextClick?: () => void;
  onUser31Click?: () => void;
  onAccountsTextClick?: () => void;
  onEconomicInvestment1IconClick?: () => void;
  onInvestmentsTextClick?: () => void;
  onCreditCard1IconClick?: () => void;
  onCreditCardsTextClick?: () => void;
  onLoan1IconClick?: () => void;
  onLoansTextClick?: () => void;
  onService1IconClick?: () => void;
  onServicesTextClick?: () => void;
  onEconometrics1IconClick?: () => void;
  onMyPrivilegesTextClick?: () => void;
  onSettingsSolid1Click?: () => void;
  onSettingTextClick?: () => void;
};

const Dashboardframecontainer: NextPage<DashboardframecontainerType> = ({
  user31,
  economicInvestment1,
  creditCard1,
  loan1,
  service1,
  econometrics1,
  settingsSolid1,
  homeFrameGap,
  twoFactorAuthenticationColor,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  onHome2IconClick,
  onDashboardTextClick,
  onTransfer1IconClick,
  onTransactionsTextClick,
  onUser31Click,
  onAccountsTextClick,
  onEconomicInvestment1IconClick,
  onInvestmentsTextClick,
  onCreditCard1IconClick,
  onCreditCardsTextClick,
  onLoan1IconClick,
  onLoansTextClick,
  onService1IconClick,
  onServicesTextClick,
  onEconometrics1IconClick,
  onMyPrivilegesTextClick,
  onSettingsSolid1Click,
  onSettingTextClick,
}) => {
  const dashboardSettingsStyle: CSSProperties = useMemo(() => {
    return {
      gap: homeFrameGap,
    };
  }, [homeFrameGap]);

  const accountsStyle: CSSProperties = useMemo(() => {
    return {
      color: twoFactorAuthenticationColor,
    };
  }, [twoFactorAuthenticationColor]);

  const investmentsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const creditCardsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const loansStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const servicesStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const myPrivilegesStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const settingStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  return (
    <div className="w-full flex flex-col items-start justify-start pt-[1.875rem] px-[0rem] pb-[0rem] text-left text-[1.125rem] text-darkgray font-button-medium-18p mq800:hidden">
      <div
        className="flex flex-col items-start justify-start gap-[2.438rem_0rem]"
        style={dashboardSettingsStyle}
      >
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
          <div className="flex flex-row items-end justify-start gap-[0rem_1.625rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src="/home-2.svg"
              onClick={onHome2IconClick}
            />
            <div
              className="relative font-medium"
              onClick={onDashboardTextClick}
            >
              Dashboard
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
          <div className="flex flex-row items-end justify-start gap-[0rem_1.625rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src="/transfer-1.svg"
              onClick={onTransfer1IconClick}
            />
            <div
              className="relative font-medium"
              onClick={onTransactionsTextClick}
            >
              Transactions
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
          <div className="flex flex-row items-start justify-start gap-[0rem_1.625rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src={user31}
              onClick={onUser31Click}
            />
            <div
              className="relative font-medium"
              style={accountsStyle}
              onClick={onAccountsTextClick}
            >
              Accounts
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
          <div className="flex flex-row items-end justify-start gap-[0rem_1.625rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src={economicInvestment1}
              onClick={onEconomicInvestment1IconClick}
            />
            <div
              className="relative font-medium"
              style={investmentsStyle}
              onClick={onInvestmentsTextClick}
            >
              Investments
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
          <div className="flex flex-row items-center justify-start gap-[0rem_1.625rem]">
            <img
              className="h-[1.625rem] w-[1.625rem] relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src={creditCard1}
              onClick={onCreditCard1IconClick}
            />
            <div
              className="relative font-medium"
              style={creditCardsStyle}
              onClick={onCreditCardsTextClick}
            >
              Credit Cards
            </div>
          </div>
        </div>
        <div className="w-[6.75rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
          <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src={loan1}
              onClick={onLoan1IconClick}
            />
            <div
              className="relative font-medium"
              style={loansStyle}
              onClick={onLoansTextClick}
            >
              Loans
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
          <div className="flex flex-row items-end justify-start gap-[0rem_1.688rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src={service1}
              onClick={onService1IconClick}
            />
            <div
              className="relative font-medium"
              style={servicesStyle}
              onClick={onServicesTextClick}
            >
              Services
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem]">
          <div className="flex flex-row items-end justify-start gap-[0rem_1.688rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src={econometrics1}
              onClick={onEconometrics1IconClick}
            />
            <div
              className="relative font-medium"
              style={myPrivilegesStyle}
              onClick={onMyPrivilegesTextClick}
            >
              My Privileges
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0rem_1.813rem] text-blue-200">
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
            loading="eager"
            alt=""
            src={settingsSolid1}
            onClick={onSettingsSolid1Click}
          />
          <div
            className="relative font-medium"
            style={settingStyle}
            onClick={onSettingTextClick}
          >
            Setting
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardframecontainer;
