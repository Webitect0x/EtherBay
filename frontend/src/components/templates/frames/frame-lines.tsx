import { useRef } from "react";
import {
  FrameSVGLines,
  useFrameSVGAssemblingAnimation,
} from "@arwes/react-frames";

interface FrameLinesProps {
  children: React.ReactNode;
  classNames?: string;
}

const FramesLines = ({ children, classNames }: FrameLinesProps) => {
  const svgRef = useRef(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div className={classNames}>
      <FrameSVGLines
        className="w-[5rem]"
        elementRef={svgRef}
        onRender={onRender}
      />
      {children}
    </div>
  );
};

export default FramesLines;
