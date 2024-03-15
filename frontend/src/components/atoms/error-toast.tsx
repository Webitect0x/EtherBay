"use client";

import { BiErrorAlt } from "react-icons/bi";
import FrameNefrex from "../templates/frames/frame-nefrex";

const ErrorToast = ({ message }: { message: string }) => {
  return (
    <FrameNefrex classNames="error relative h-[3rem] w-[24rem]">
      <div className="mt-3 flex items-center justify-center gap-2 text-white">
        <BiErrorAlt className="relative z-10 text-2xl" />
        <span>{message}</span>
      </div>
    </FrameNefrex>
  );
};

export default ErrorToast;
