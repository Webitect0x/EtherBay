import { useRef } from "react";
import {
  FrameSVGUnderline,
  useFrameSVGAssemblingAnimation,
} from "@arwes/react-frames";

interface FrameUnderlineProps {
  children: React.ReactNode;
  absolute?: boolean;
  squareSize?: number;
  classNames?: string;
}

const FrameUnderline = ({
  children,
  absolute,
  classNames,
  squareSize = 15,
}: FrameUnderlineProps) => {
  const svgRef = useRef(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div className={`${classNames} ${absolute ? "absolute" : "relative"}`}>
      <FrameSVGUnderline
        className="menu-bar"
        inverted={true}
        squareSize={squareSize}
        elementRef={svgRef}
        onRender={onRender}
      />
      {children}
    </div>
  );
};

export default FrameUnderline;
