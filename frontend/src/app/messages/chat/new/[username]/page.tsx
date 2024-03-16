"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { currentUser } from "@/api/current-user";
import { joinChannel } from "@/channels/room";
import { fetchUser } from "@/api/fetch-user";
import FrameCorners from "@/components/templates/frames/frame-corners";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import FrameOctagon from "@/components/templates/frames/frame-octagon";
import { useRouter } from "next/navigation";

import useSWR from "swr";

const NewChatPage = ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const [message, setMessage] = useState("");
  const { id, user: userData } = currentUser();
  const { user } = fetchUser(username);
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    `http://localhost:4000/api/messages/${user?.data.id}`,
  );

  if (data) {
    router.push(`/messages/chat/${data.data.channel_id}`);
  }

  const sendMessage = () => {
    const newSessionId = crypto.randomUUID();

    const channel = joinChannel();

    channel.push("new_msg", {
      message: {
        content: message,
        channel_id: newSessionId,
        sender_id: id,
        receiver_id: user.data.id,
      },
    });

    console.log(message);

    router.push(`/messages/chat/${newSessionId}`);
  };

  return (
    <FrameCorners classNames="h-[89vh] mt-3 m-1">
      <div className="mx-auto w-[20rem] pt-[5rem]">
        <FrameOctagon className="m-2 mx-auto">
          <div className="p-5">
            <h1 className="mb-6 text-2xl font-bold">New Chat</h1>
            <div className="mx-auto flex flex-col items-center justify-center gap-6">
              <Input size="m" text={username} />
              <textarea
                onChangeCapture={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
                value={message}
              ></textarea>
              <Button onClick={sendMessage} text="send Message" size="l" />
            </div>
          </div>
        </FrameOctagon>
      </div>
    </FrameCorners>
  );
};

export default NewChatPage;
