import FrameOctagon from "@/components/templates/frames/frame-octagon";

const Review = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="relative h-[10rem] w-[20rem]">
        Reviews
        <FrameOctagon className="relative">One</FrameOctagon>
      </div>
      <div className="relative h-[10rem] w-[20rem]">
        Reviews
        <FrameOctagon className="relative">One</FrameOctagon>
      </div>
      <div className="relative h-[10rem] w-[20rem]">
        Reviews
        <FrameOctagon className="relative">One</FrameOctagon>
      </div>
    </div>
  );
};

export default Review;
