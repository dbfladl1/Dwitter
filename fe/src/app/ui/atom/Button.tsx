import React from "react";

export default function Button({
  children,
  clickHandler,
}: {
  children: React.ReactNode;
  clickHandler: () => void;
}) {
  return (
    <button
      onClick={clickHandler}
      className="bg-[var(--main)] cursor-pointer p-2 px-3 md:px-10 rounded-sm"
    >
      {children}
    </button>
  );
}
