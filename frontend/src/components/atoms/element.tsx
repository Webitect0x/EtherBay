import React, { ReactNode } from "react";
import FrameCorners from "../templates/frames/frame-corners";
import Text from "./text";

interface ElementProps {
  children: ReactNode;
  icon: ReactNode;
}

const Element = ({ children, icon }: ElementProps) => {
  return (
    <FrameCorners
      cornerLength={3}
      classNames="relative w-[9rem] h-[1.5rem] py-1 p-2"
    >
      <div className="mb-2 flex cursor-pointer gap-2 text-center">
        {icon}
        <Text size="xs">{children}</Text>
      </div>
    </FrameCorners>
  );
};

export default Element;
