import type { NextPage } from "next";
import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input, Button } from "antd";
import { useRouter } from "next/router";
import SaveButton from "./save-button";

const GroupComponent: NextPage = () => {
  const router = useRouter();

  const onEditProfileTextClick = useCallback(() => {
    router.push("/setting-page2");
  }, [router]);

  const onPreferencesTextClick = useCallback(() => {
    router.push("/setting-page1");
  }, [router]);

  return (
    <div className="w-[69.375rem] rounded-6xl bg-white flex flex-col items-center justify-start pt-[2.313rem] px-[1.875rem] pb-[1.875rem] box-border gap-[1.75rem] max-w-full z-[2] text-left text-[1.063rem] text-darkslateblue-100 font-button-medium-18p mq675:pt-[1.5rem] mq675:pb-[1.25rem] mq675:box-border">
      <div className="w-[69.375rem] h-[33.188rem] relative rounded-6xl bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.563rem] box-border gap-[0.5rem_0rem] max-w-full text-[1rem] text-steelblue">
        <div className="w-[26.125rem] flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq675:flex-wrap">
            <div
              className="relative font-medium cursor-pointer z-[1]"
              onClick={onEditProfileTextClick}
            >
              Edit Profile
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem]">
              <div
                className="relative font-medium cursor-pointer z-[1]"
                onClick={onPreferencesTextClick}
              >
                Preferences
              </div>
            </div>
            <div className="relative font-medium text-blue-200 z-[1]">
              Security
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.188rem] relative">
          <div className="absolute top-[0.125rem] left-[0rem] bg-whitesmoke-300 w-[65.625rem] h-[0.063rem] z-[1]" />
          <div className="absolute top-[0rem] left-[19.688rem] rounded-t-3xs rounded-b-none bg-blue-200 w-[7.125rem] h-[0.188rem] z-[2]" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <SaveButton
          twoFactorAuthentication="Two-factor Authentication"
          enableOrDisableTwoFactorA="Enable or disable two factor authentication"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="w-[31.875rem] flex flex-col items-start justify-start gap-[1.375rem_0rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem_0rem] max-w-full">
            <div className="relative font-medium z-[1]">Change Password</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.688rem_0rem] max-w-full text-[1rem] text-gray-300">
              <div className="relative z-[1]">Current Password</div>
              <Input.Password
                className="bg-[transparent] self-stretch font-button-medium-18p text-[0.938rem] text-steelblue max-w-full z-[1]"
                name="password"
                id="password"
                placeholder="**********"
                bordered={true}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.688rem_0rem] max-w-full text-[1rem] text-gray-300">
            <div className="relative z-[1]">New Password</div>
            <Input.Password
              className="bg-[transparent] self-stretch font-button-medium-18p text-[0.938rem] text-steelblue max-w-full z-[1]"
              name="newpassword"
              id="newpassword"
              placeholder="**********"
              bordered={true}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end">
        <Button
          className="w-[11.875rem] z-[1]"
          size="large"
          shape="round"
          style={{ width: "190px" }}
          type="primary"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default GroupComponent;
