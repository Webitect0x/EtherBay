import { Channel } from "phoenix";
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
    console.log(resp);
  });

  return channel;
};
