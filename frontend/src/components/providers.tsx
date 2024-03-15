"use client";

import { SWRConfig } from "swr";
import { PropsWithChildren } from "react";
import GetDataSource from "@/utils/get-data-source";
import { Animator } from "@arwes/react-animator";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Animator active={true}>
      <SWRConfig value={{ fetcher: GetDataSource }}>{children}</SWRConfig>
    </Animator>
  );
};

export default Providers;
