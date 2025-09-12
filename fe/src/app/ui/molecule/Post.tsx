import React from "react";
import LinkTag from "../atom/LinkTag";
import UserName from "../atom/UserName";
import CreatedDate from "../atom/CreatedDate";
import Text from "../atom/Text";
import { DweetsAttr } from "@/lib/interface/dweets";

export default function Post({ dweet }: { dweet: DweetsAttr }) {
  return (
    <div className=" bg-[#242424] border border-white rounded-sm p-3 xl:p-5 mb-4">
      <div className="flex gap-2 grow items-center">
        <UserName>{dweet.nickname}</UserName>
        <LinkTag userId={dweet.userId}></LinkTag>
        <CreatedDate date={dweet.createdAt}/>
      </div>
      <Text>{dweet.text}</Text>
    </div>
  );
}
