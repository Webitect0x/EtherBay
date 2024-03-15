"use client";

import { currentUser } from "@/api/current-user";
import FrameCorners from "@/components/templates/frames/frame-corners";
import FrameOctagon from "@/components/templates/frames/frame-octagon";
import Button from "@/components/atoms/button";
import Link from "next/link";

type Message = {
  content: string;
  id: string;
  channel_id: string;
  receiver_id: string;
  sender_id: string;
};

const InboxPage = () => {
  const { user } = currentUser();

  const messagesReceived = user?.data.messages_received.data;

  return (
    <FrameCorners classNames="relative h-[84vh] mt-3 m-1">
      <FrameOctagon classNames="w-[40rem] mx-auto h-[45rem]">
        <div className="text-center">
          <div className="flex items-center justify-between p-7">
            <h1 className="pt-2 text-2xl font-bold">Inbox</h1>
            <Button size="l" text="New Message" />
          </div>
          <div className="mx-auto flex items-center justify-center">
            {messagesReceived?.map((message: Message, index: number) => (
              <Link href={`/messages/chat/${message.channel_id}`}>
                <FrameCorners cornerLength={7} classNames="w-[25rem] h-[3rem]">
                  <div key={index}>ADMIN {message.content}</div>
                </FrameCorners>
              </Link>
            ))}
          </div>
        </div>
      </FrameOctagon>
    </FrameCorners>
  );
};

export default InboxPage;
