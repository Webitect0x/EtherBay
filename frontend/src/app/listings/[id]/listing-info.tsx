import { BiMessageDetail } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineReport } from "react-icons/md";
import Link from "next/link";
import FrameOctagon from "@/components/templates/frames/frame-octagon";
import Button from "@/components/atoms/button";
import AmountCard from "@/components/pages/listings/amount-card";
import Element from "@/components/atoms/element";
import RatingCard from "@/components/pages/listings/rating-card";
import Flex from "@/components/organisms/flex";

const ListingInfo = ({ listing }: any) => {
  return (
    <div className="w-[40rem] p-6">
      <FrameOctagon>
        <div className="p-5">
          <h1 className="mt-2 text-3xl font-bold">{listing?.title}</h1>
          <Flex between>
            <div className="p-2">
              <div className="mb-2 mt-3">
                <div className="text-xs italic">Category</div>
                <h2 className="text-sm">Digital/Ebooks</h2>
              </div>

              <div className="m-1 py-2">
                <span className="text-xs">Sold by</span>
                <Link href="" className="text-lg font-bold">
                  {listing?.vendor?.username}
                </Link>
              </div>

              <RatingCard />
              <AmountCard price={listing?.price} />

              <div className=" mt-4 space-y-2">
                <Link href={`/messages/chat/new/${listing?.vendor.username}`}>
                  <Element icon={<BiMessageDetail />}>Message Vendor</Element>
                </Link>
                <Element icon={<MdOutlineReport />}>Report Listing</Element>
                <Element icon={<FaRegStar />}>Favorite Listing</Element>
              </div>
            </div>

            <div className="lg:pr-[3rem]">
              <div className="p-2 font-thin">Shipping Options</div>
              <div className="space-y-5">
                <Button size="l" text="Add to Cart" />
                <Button size="l" text="Buy Now" />
              </div>
              <div className="mt-7">
                <div>Escrow Period 5 days</div>
                <div>Created 5 days ago</div>
                <div>Available Stock 4</div>
                <div>Ships From United States</div>
                <div>Domestic Shipping Only</div>
              </div>
            </div>
          </Flex>
        </div>
      </FrameOctagon>
    </div>
  );
};

export default ListingInfo;
