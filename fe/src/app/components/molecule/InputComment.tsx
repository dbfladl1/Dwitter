"use client";

import React, { useContext, useState } from "react";
import InputText from "../atom/Textarea";
import Button from "../atom/Button";
import { DweetService } from "@/lib/api/dweets";
import { CommentContext } from "@/context/commentContext";

export default function InputComment() {
  const dweet = new DweetService();

  const [text, setText] = useState("");
  const commentSubmit = (text: string) => {
    if (!text.trim()) {
      alert("Please enter a comment.");
      return;
    } 
    dweet.post({ text, userId: "yurim" });
    setText("");
  };

  return (
    <CommentContext.Provider value={{ text, setText }}>
      <section className="flex w-full items-stretch mt-10 bg gap-2 md:gap-3">
        <div className="flex-8">
          <InputText />
        </div>
        <div>
          <Button clickHandler={() => commentSubmit(text)}>Post</Button>
        </div>
      </section>
    </CommentContext.Provider>
  );
}
