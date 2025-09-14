"use client";

import Button from "@/app/ui/atom/Button";
import TextField from "@/app/ui/molecule/TextField";
import React from "react";

export default function SignupPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl">Sign up</h1>
      </div>
      <div>
        <TextField label={{ htmlFor: "userId", title: "ID" }} />
        <TextField label={{ htmlFor: "userId", title: "PASSWORD" }} />
        <TextField label={{ htmlFor: "userId", title: "PASSWORD CHECK" }} />
        <TextField label={{ htmlFor: "userId", title: "USERNAME" }} />
      </div>
      <div className="text-center mt-5">
        <Button clickHandler={() => console.log("dd")}>Submit</Button>
      </div>
    </div>
  );
}
