import AmountCard from "../../../components/pages/listings/amount-card";
import { FaRegStar } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Flex from "@/components/organisms/flex";
import FrameUnderline from "@/components/templates/frames/frame-underline";
import RatingCard from "@/components/pages/listings/rating-card";

const ListingCard = ({ listingData }: any) => {
  const { id, image_url, title, price, listing_type, vendor } = listingData;

  return (
    <Link
      href={`/listings/${id}`}
      className="mb-[2rem] ml-5 flex w-[15rem] cursor-pointer flex-col"
      key={id}
    >
      <FrameUnderline classNames="p-5 h-[23rem]">
        <Flex center>
          <Image src={image_url} width={125} height={100} alt="test" />
        </Flex>

        <h1 className="mb-3 mt-2 text-center text-2xl font-bold">{title}</h1>
        <AmountCard price={price} classNames="mx-auto" />
        <RatingCard />

        <div className="mt-4 flex justify-between">
          <div>
            <div className="text-xs">Shipping from</div>
            <div>United States</div>
          </div>

          <div>
            <div className="text-xs">Vendor</div>
            <div className="text-lg">{vendor?.username}</div>
          </div>
        </div>
      </FrameUnderline>
    </Link>
  );
};

export default ListingCard;
