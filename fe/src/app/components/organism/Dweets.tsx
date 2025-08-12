"use client";

import React, { useEffect, useState } from "react";
import Dweet from "../molecule/Dweet";
import { DweetService } from "@/lib/api/dweets";
import { DweetsAttr } from "@/lib/interface/dweets";
import { useDweetStore } from "@/store/useDweetStore";

export default function Dweets() {
  const dweets = useDweetStore((state) => state.dweets);
  const fetchDweets = useDweetStore((state) => state.fetchDweets);


  useEffect(() => {
    fetchDweets();
  }, [dweets]);

  return (
    <section className="mt-5">
      {dweets.map(dweet => <Dweet key={dweet.id} dweet={dweet}/>)}
    </section>
  );
}
