"use client";

import React from "react";
import InputText from "../atom/Textarea";
import Button from "../atom/Button";

export default function InputComment() {
  const commentSubmit = () => {};
  return (
    <section className="flex w-full items-stretch mt-10 bg gap-2 md:gap-3">
      <div className="flex-8">
        <InputText />
      </div>
      <div className="">
        <Button clickHandler={commentSubmit}>Post</Button>
      </div>
    </section>
  );
}
