"use client";

import { fetchListing } from "@/api/fetch-listing";
import FrameCorners from "@/components/templates/frames/frame-corners";
import Image from "next/image";
import Review from "./review";
import FrameNefrex from "@/components/templates/frames/frame-nefrex";
import ListingInfo from "./listing-info";
import Flex from "@/components/organisms/flex";

const ListingPage = ({ params: { id } }: { params: { id: string } }) => {
  const { listing, isLoading } = fetchListing(id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <FrameCorners classNames="h-[84vh] mt-5">
      <div className=" h-[80vh] overflow-auto">
        <Flex wrap center>
          <FrameNefrex classNames="h-[23rem] w-[26rem] mt-5">
            <div className="flex justify-center p-4">
              <Image
                src={listing?.image_url}
                width={260}
                height={20}
                alt="test"
              />
            </div>
          </FrameNefrex>
          <ListingInfo listing={listing} />
        </Flex>

        <div className="ml-[8rem] mt-[5rem]">
          <h1 className="text-3xl font-bold">Reviews</h1>
          <Review />
        </div>
      </div>
    </FrameCorners>
  );
};

export default ListingPage;
