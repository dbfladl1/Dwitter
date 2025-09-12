"use client";

import React, { useEffect } from "react";
import Dweet from "../molecule/Post";
import { useDweetStore } from "@/store/useDweetStore";

export default function Dweets() {
  const dweets = useDweetStore((state) => state.dweets);
  const fetchDweets = useDweetStore((state) => state.fetchDweets);


  useEffect(() => {
    fetchDweets();
  }, []);

  return (
    <section className="mt-5">
      {dweets.map(dweet => <Dweet key={dweet.id} dweet={dweet}/>)}
    </section>
  );
}
