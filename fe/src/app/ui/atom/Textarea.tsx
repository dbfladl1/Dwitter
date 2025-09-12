import { CommentContext } from "@/context/commentContext";
import React, { useContext } from "react";

export default function Textarea() {
  const { text, setText } = useContext(CommentContext);
  return (
    <textarea
      className="w-full bg-white text-black rounded-sm h-10 resize-none p-2"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
