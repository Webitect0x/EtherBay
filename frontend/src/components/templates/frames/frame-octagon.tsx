"use client";

import { useRef } from "react";
import {
  FrameSVGOctagon,
  useFrameSVGAssemblingAnimation,
  FrameSVGOctagonProps,
} from "@arwes/react-frames";

interface FrameOctagonProps extends FrameSVGOctagonProps {
  children: React.ReactNode;
  classNames?: string;
}

const FrameOctagon = ({
  children,
  classNames,
  rightTop,
  rightBottom,
  leftBottom,
  squareSize = 10,
}: FrameOctagonProps) => {
  const svgRef = useRef(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div className={`relative ${classNames}`}>
      <FrameSVGOctagon
        rightTop={rightTop}
        rightBottom={rightBottom}
        leftBottom={leftBottom}
        squareSize={squareSize}
        elementRef={svgRef}
        onRender={onRender}
      />
      {children}
    </div>
  );
};

export default FrameOctagon;
