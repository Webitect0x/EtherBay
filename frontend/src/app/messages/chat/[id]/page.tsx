"use client";

import FrameCorners from "@/components/templates/frames/frame-corners";
import FrameOctagon from "@/components/templates/frames/frame-octagon";
import Button from "@/components/atoms/button";
import useSWR from "swr";

const Chat = ({ params: { id } }: { params: { id: string } }) => {
  console.log(id);
  const { data, error, isLoading } = useSWR(
    `http://localhost:4000/api/messages/chat/${id}`,
  );

  console.log(data);

  const messages = data?.data;

  return (
    <FrameCorners classNames="relative h-[84vh] mt-3 m-1">
      <FrameOctagon classNames="w-[40rem] mx-auto h-[45rem]">
        <div className="">
          <div className="p-7">
            <Button size="s" text="<-" />
            <h1 className="pt-2 text-2xl font-bold">Chat with Username</h1>
          </div>
          <div className="mx-auto flex items-center justify-center">
            {messages?.map((message: any) => <div>{message.content}</div>)}
          </div>
        </div>
      </FrameOctagon>
    </FrameCorners>
  );
};

export default Chat;
