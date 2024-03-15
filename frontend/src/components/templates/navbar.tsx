"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Button from "../atoms/button";
import MenuBar from "../molecules/menubar";
import useSWR from "swr";
import FramesLines from "./frames/frame-lines";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/api/accounts/current",
  );

  return (
    <FramesLines classNames="relative h-[4rem]">
      <nav className="flex h-full items-center justify-between">
        <Link
          href="/"
          className="cursor-pointer pl-4 text-2xl font-bold italic"
        >
          EtherBay
        </Link>
        {data ? (
          <div className="flex items-center gap-5">
            <Button size="s" text="0 ETH" as="link" link="/login" />
            <FiMenu
              onClick={() => setShowMenu(!showMenu)}
              className="mr-4 cursor-pointer text-2xl"
            />
            {showMenu ? <MenuBar setShowMenu={setShowMenu} /> : null}
          </div>
        ) : (
          <div className="flex gap-3 pr-4">
            <Button size="s" text="Login" as="link" link="/login" />
            <Button size="s" text="Register" as="link" link="/register" />
          </div>
        )}
      </nav>
    </FramesLines>
  );
};

export default Navbar;
