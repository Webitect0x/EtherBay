"use client";

import { FaRegCircleCheck } from "react-icons/fa6";
import FrameNefrex from "../templates/frames/frame-nefrex";

const SuccessToast = ({ message }: { message: string }) => {
  return (
    <FrameNefrex classNames="success relative h-[3rem] w-[24rem]">
      <div className="mt-3 flex items-center justify-center gap-2 text-white">
        <FaRegCircleCheck className="relative z-10 text-2xl" />
        <span>{message}</span>
      </div>
    </FrameNefrex>
  );
};

export default SuccessToast;
