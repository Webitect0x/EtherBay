"use client";

import { ChangeEvent, useState } from "react";
import FrameCorners from "@/components/templates/frames/frame-corners";
import FrameOctagon from "@/components/templates/frames/frame-octagon";
import Button from "@/components/atoms/button";
import { joinChannel } from "@/channels/room";
import useSWR from "swr";

const Chat = ({ params: { id } }: { params: { id: string } }) => {
  const [message, setMessage] = useState("");
  const { data, error, isLoading } = useSWR(
    `http://localhost:4000/api/messages/chat/${id}`,
  );

  console.log(data);

  const messages = data?.data;

  const sendMessage = () => {
    const channel = joinChannel();

    channel.push("new_msg", {
      message: {
        content: message,
        channel_id: id,
        sender_id: messages[0].sender_id,
        receiver_id: messages[0].receiver_id,
      },
    });
  };

  return (
    <FrameCorners classNames="relative h-[84vh] mt-3 m-1">
      <FrameOctagon classNames="w-[40rem] mx-auto h-[45rem]">
        <div className="">
          <div className="p-7">
            <Button size="s" text="<-" />
            <h1 className="pt-2 text-2xl font-bold">Chat with Username</h1>
          </div>
          <div className="mx-auto flex flex-col items-center justify-center">
            {messages?.map((message: any) => (
              <div className="">Webitect {message.content}</div>
            ))}
          </div>
        </div>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
        />
        <Button size="l" text="Send Message" onClick={sendMessage} />
      </FrameOctagon>
    </FrameCorners>
  );
};

export default Chat;
