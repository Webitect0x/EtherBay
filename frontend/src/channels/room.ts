"use client";

import { useState } from "react";
import { socket } from "../constants/constants";

export const joinChannel = () => {
  const channel = socket.channel("chat:*", {});

  channel
    .join()
    .receive("ok", (resp) => {
      console.log("Joined successfully", resp);
    })
    .receive("error", (resp) => {
      console.log("Unable to join", resp);
    });

  channel.on("new_msg", (resp) => {
    // @ts-ignore
    setMessages([...messages, resp]);
  });

  return channel;
};
