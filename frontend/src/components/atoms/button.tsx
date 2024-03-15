"use client";

import classNames from "classnames";
import Link from "next/link";
import FrameOctagon from "../templates/frames/frame-octagon";

interface ButtonProps {
  size: string;
  text: string;
  type?: "button" | "submit" | "reset";
  link?: string;
  onClick?: () => void;
  as?: "button" | "link";
}

const Button = ({
  size,
  text,
  type,
  link,
  onClick,
  as = "button",
}: ButtonProps) => {
  const styles = classNames({
    "w-[6rem]": size === "s",
    "w-[8rem]": size === "m",
    "w-[13rem]": size === "l",
  });

  return (
    <FrameOctagon
      squareSize={16}
      classNames={`${styles} font-bold relative h-[2rem] flex justify-center`}
    >
      {as === "link" ? (
        <Link className="mt-1" href={link ? link : "/"}>
          {text}
        </Link>
      ) : (
        <button onClick={onClick} type={type}>
          {text}
        </button>
      )}
    </FrameOctagon>
  );
};

export default Button;
