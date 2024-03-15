import { FaRegStar } from "react-icons/fa";

const RatingCard = () => {
  return (
    <div className="my-1 ml-1 flex items-center gap-1">
      <span className="mt-1">5</span>
      <FaRegStar className="text-yellow-500" />
      <FaRegStar className="text-yellow-500" />
      <FaRegStar className="text-yellow-500" />
      <FaRegStar className="text-yellow-500" />
      <FaRegStar className="text-yellow-500" />
    </div>
  );
};

export default RatingCard;
