import React, { ReactNode } from "react";
import FrameOctagon from "@/components/templates/frames/frame-octagon";
import Text from "@/components/atoms/text";

interface CardProps {
  children: ReactNode;
  classNames?: string;
  icon?: ReactNode;
}

const Card = ({ children, classNames, icon }: CardProps) => {
  return (
    <div className={`${classNames} w-[9rem]`}>
      <FrameOctagon squareSize={5}>
        <div className="pt-1">
          <Text bold size="xs" center as="p">
            $ {children}
          </Text>
        </div>

        <div className="flex items-center justify-center gap-1 pb-2">
          <FaEthereum className="text-sm text-blue-500" />
          <Text size="xs" center>
            0.0045 ETH
          </Text>
        </div>
      </FrameOctagon>
    </div>
  );
};

export default Card;
