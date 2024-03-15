import { useRef } from "react";
import {
  FrameSVGCorners,
  useFrameSVGAssemblingAnimation,
} from "@arwes/react-frames";

interface FrameCornersProps {
  children: React.ReactNode;
  cornerLength?: number;
  classNames?: string;
}

const FrameCorners = ({
  children,
  cornerLength = 8,
  classNames,
}: FrameCornersProps) => {
  const svgRef = useRef(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div className={`relative ${classNames}`}>
      <FrameSVGCorners
        elementRef={svgRef}
        onRender={onRender}
        strokeWidth={1}
        cornerLength={cornerLength}
      />
      {children}
    </div>
  );
};

export default FrameCorners;
