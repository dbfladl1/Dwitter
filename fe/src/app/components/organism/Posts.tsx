"use client";

import React, { useEffect } from "react";
import Post from "../molecule/Post";
import { Dweets } from "@/app/lib/api/dweets";

export default function Posts() {
  const dweet = new Dweets();
  useEffect(() => {
    console.log("ddd")
    dweet.get()
  }, []);
  return (
    <section className="mt-5">
      <Post></Post>
      <Post></Post>
    </section>
  );
}
