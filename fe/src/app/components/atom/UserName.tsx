import React from "react";

export default function UserName({ children }: { children: string }) {
  return <h2 className="text-lg">{children}</h2>;
}