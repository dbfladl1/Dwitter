import React from "react";
import InputComment from "@/app/ui/molecule/InputComment";
import Nav from "@/app/ui/organism/Nav";
import Posts from "@/app/ui/organism/Posts";

export default function DweetPage() {
  return (
    <div>
      <Nav />
      <InputComment />
      <Posts />
    </div>
  );
}
