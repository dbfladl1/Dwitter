import React from "react";

export default function Button({
  children,
  clickHandler,
  color = "main",
}: {
  children: React.ReactNode;
  clickHandler?: () => void;
  color?: string;
}) {
  return (
    <button
      onClick={clickHandler}
      className={`${
        color === "main" ? "bg-[var(--main)]" : "bg-[var(--sub)]"
      } cursor-pointer p-2 px-3 md:px-10 rounded-sm`}
    >
      {children}
    </button>
  );
}
