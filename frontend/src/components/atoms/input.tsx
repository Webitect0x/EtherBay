"use client";

import { useRef, ChangeEventHandler } from "react";
import {
  FrameSVGOctagon,
  useFrameSVGAssemblingAnimation,
} from "@arwes/react-frames";
import classNames from "classnames";

interface InputProps {
  size: string;
  text?: string;
  value?: string;

  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ size, text, value, required, onChange }: InputProps) => {
  const svgRef = useRef(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  const styles = classNames({
    "w-[6rem]": size === "s",
    "w-[14rem]": size === "m",
  });

  return (
    <div
      className={`${styles} relative flex h-[2rem] justify-center font-bold`}
    >
      <FrameSVGOctagon
        squareSize={16}
        elementRef={svgRef}
        onRender={onRender}
      />
      <input
        required={required}
        className="bg-transparent outline-none"
        placeholder={text}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
