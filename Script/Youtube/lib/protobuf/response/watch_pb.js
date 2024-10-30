// @generated by protoc-gen-es v1.7.2
// @generated from file response/watch.proto (package youtube.response.watch, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Player } from "./player_pb.js";
import { Next } from "./next_pb.js";

/**
 * @generated from message youtube.response.watch.Watch
 */
export const Watch = proto3.makeMessageType(
  "youtube.response.watch.Watch",
  () => [
    { no: 1, name: "contents", kind: "message", T: Content, repeated: true },
  ],
);

/**
 * @generated from message youtube.response.watch.Content
 */
export const Content = proto3.makeMessageType(
  "youtube.response.watch.Content",
  () => [
    { no: 2, name: "player", kind: "message", T: Player },
    { no: 3, name: "next", kind: "message", T: Next },
  ],
);
