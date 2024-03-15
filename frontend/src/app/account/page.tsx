"use client";

import { currentUser } from "@/api/current-user";
import FrameCorners from "@/components/templates/frames/frame-corners";
import AccountStatus from "./account-status";
import OrderHistory from "./order-history";

const AccountPage = () => {
  const { account_status, bio, inserted_at, username, isLoading } =
    currentUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    <FrameCorners classNames="h-[85vh] mt-5">
      <div className="pl-[2rem] pt-[3rem]">
        <div className="w-[40rem]">
          <AccountStatus
            username={username}
            inserted_at={inserted_at}
            account_status={account_status}
          />
        </div>
      </div>
      <OrderHistory />
    </FrameCorners>
  );
};

export default AccountPage;
