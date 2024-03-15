import FrameOctagon from "@/components/templates/frames/frame-octagon";
import Button from "@/components/atoms/button";
import Flex from "@/components/organisms/flex";

const OrderCard = () => {
  return (
    <Flex className="mt-2">
      <FrameOctagon className="h-[5rem]">
        <div className="mt-2 space-y-3 p-5">
          <div>Order ID - "sdsda-2323"</div>
          <div>Transaction Hash: </div>
          <div>Order Amount: $20</div>
          <Button size="m" text="Order Details" />
        </div>
      </FrameOctagon>
    </Flex>
  );
};

export default OrderCard;
