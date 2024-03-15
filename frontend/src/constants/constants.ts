import { Socket } from "phoenix";

export const BASEURL = "http://localhost:4000/api";
export const socket = new Socket("ws://localhost:4000/socket");
socket.connect();
