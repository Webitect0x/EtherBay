"use client";

import Button from "../atoms/button";
import FrameOctagon from "./frames/frame-octagon";

const SideBar = () => {
  return (
    <FrameOctagon
      rightTop={false}
      rightBottom={false}
      squareSize={15}
      classNames="lg:block fixed hidden h-[84vh] w-[15rem] mt-5 ml-1"
    >
      test
    </FrameOctagon>
  );
};

export default SideBar;
