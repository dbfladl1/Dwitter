import React from "react";
import LinkTag from "../atom/LinkTag";
import UserName from "../atom/UserName";
import SubText from "../atom/SubText";
import Text from "../atom/Text";

export default function Post() {
  return (
    <div className=" bg-[#242424] border border-white rounded-sm p-3 xl:p-5 mb-4">
      <div className="flex gap-2 grow items-center">
        <UserName></UserName>
        <LinkTag></LinkTag>
        <SubText></SubText>
      </div>
      <Text></Text>
    </div>
  );
}
