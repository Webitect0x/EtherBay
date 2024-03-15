"use client";

import SideBar from "@/components/templates/sidebar";
import FrameCorners from "@/components/templates/frames/frame-corners";
import useSWR from "swr";
import ListingCard from "@/app/listings/[id]/listing-card";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/api/listings/show",
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="w-full">
      <FrameCorners classNames="screen-size float-right mx-auto relative mr-1">
        <div className="mt-3 flex h-[82vh] flex-wrap items-center justify-center overflow-scroll">
          {data?.data?.map((listing: any) => (
            <ListingCard listingData={listing} />
          ))}
        </div>
      </FrameCorners>
      <SideBar />
    </main>
  );
}
