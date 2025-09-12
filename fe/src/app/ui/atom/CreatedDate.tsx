import { formatTimeAgo } from "@/lib/utils/formatTime";
import React, { useEffect } from "react";

export default function CreatedDate({ date }: { date: Date }) {
  const [createdDate, setCreateDate] = React.useState<string>("");
  useEffect(() => {
    setCreateDate(formatTimeAgo(date));
  }, []);

  return <div className="text-sm">{createdDate}</div>;
}
