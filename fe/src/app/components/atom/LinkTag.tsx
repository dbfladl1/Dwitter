import React from "react";
import { useDweetStore } from "@/store/useDweetStore";

export default function LinkTag({ userId }: { userId: string }) {
  const fetchDweets = useDweetStore((s) => s.fetchDweets);

  return (
    <div
      className="text-[var(--main)] cursor-pointer"
      onClick={() => fetchDweets({userId})}
    >
      @{userId}
    </div>
  );
}
