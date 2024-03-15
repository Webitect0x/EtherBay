"use client";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import FrameUnderline from "../templates/frames/frame-underline";

const MenuBar = ({
  setShowMenu,
}: {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const listItems = [
    "Account",
    "Messages",
    "Favorites",
    "Orders",
    "Cart",
    "Settings",
  ];

  return (
    <FrameUnderline
      absolute
      classNames="menu-bar h-[15rem] top-[4rem] w-[10rem] z-10"
    >
      <div className="relative">
        <ul className="space-y-2 p-6">
          {listItems.map((item) => (
            <li key={item} onClick={() => setShowMenu(false)}>
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </FrameUnderline>
  );
};

export default MenuBar;
