import FrameOctagon from "@/components/templates/frames/frame-octagon";
import React from "react";
import VendorStatus from "./vendor-status";
import Text from "@/components/atoms/text";
import Button from "@/components/atoms/button";
import Flex from "@/components/organisms/flex";

interface AccountStatusProps {
  username: string;
  inserted_at: string;
  account_status: string;
}

const AccountStatus = ({
  username,
  inserted_at,
  account_status,
}: AccountStatusProps) => {
  return (
    <FrameOctagon className="w-[20rem]">
      <Flex col>
        <Text bold size="3xl">
          {username}
        </Text>
        <div className="ml-[2rem] pl-2 pt-2">
          <p>Account Creation {inserted_at}</p>
          <p>Account Status {account_status}</p>
          <p>Total Amount Purchased $20</p>
        </div>

        <div className="ml-5">
          <h1 className="mt-2 text-xl font-thin">Vendor Stats</h1>
          <VendorStatus />
        </div>

        <div className="p-5">
          <Button
            as="link"
            link="/listings/create"
            size="l"
            text="Become a Vendor"
          />
        </div>
      </Flex>
    </FrameOctagon>
  );
};

export default AccountStatus;
