import { useRef } from "react";
import {
  FrameSVGNefrex,
  useFrameSVGAssemblingAnimation,
} from "@arwes/react-frames";

interface FrameNefrexProps {
  children: React.ReactNode;
  classNames?: string;
}

const FrameNefrex = ({ children, classNames }: FrameNefrexProps) => {
  const svgRef = useRef(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div className={`relative ${classNames}`}>
      <FrameSVGNefrex elementRef={svgRef} onRender={onRender} />
      {children}
    </div>
  );
};

export default FrameNefrex;
