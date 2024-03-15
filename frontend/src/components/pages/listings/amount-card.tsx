import { FaEthereum } from "react-icons/fa";
import FrameOctagon from "@/components/templates/frames/frame-octagon";
import Text from "@/components/atoms/text";

const AmountCard = ({
  price,
  classNames,
}: {
  price: number;
  classNames?: string;
}) => {
  return (
    <div className={`${classNames} w-[9rem]`}>
      <FrameOctagon squareSize={5}>
        <div className="pt-1">
          <Text bold size="xs" center as="p">
            $ {price}
          </Text>

          <div className="flex justify-center pb-1">
            <FaEthereum className="text-sm text-blue-500" />
            <Text size="xs" center>
              0.0045 ETH
            </Text>
          </div>
        </div>
      </FrameOctagon>
    </div>
  );
};

export default AmountCard;
