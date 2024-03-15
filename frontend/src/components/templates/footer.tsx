"use client";

import FramesLines from "./frames/frame-lines";

const Footer = () => {
  return (
    <footer className="">
      <FramesLines classNames="relative float-end w-[100%] h-[2rem] mt-2">
        <div className="ml-4 mt-2 text-xs font-thin">Version: Alpha</div>
      </FramesLines>
    </footer>
  );
};

export default Footer;
