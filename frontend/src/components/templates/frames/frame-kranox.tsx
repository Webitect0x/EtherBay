import {
  FrameSVGKranox,
  useFrameSVGAssemblingAnimation,
} from "@arwes/react-frames";
import { useRef, MutableRefObject } from "react";

interface FrameKranoxProps {
  children: React.ReactNode;
  ref?: MutableRefObject<null>;
}

const FrameKranox = ({ children, ref }: FrameKranoxProps) => {
  const svgRef = useRef(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div
      ref={ref}
      // className="absolute left-[50%] top-[50%] flex h-[30rem] w-[30rem] translate-x-[-50%] translate-y-[-50%]"
    >
      <FrameSVGKranox
        elementRef={svgRef}
        onRender={onRender}
        padding={4}
        strokeWidth={1}
        squareSize={12}
        smallLineLength={12}
        largeLineLength={48}
      />
      {children}
    </div>
  );
};

export default FrameKranox;
