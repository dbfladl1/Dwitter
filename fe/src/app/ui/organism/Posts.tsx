"use client";

import React, { useEffect, useState } from "react";
import Dweet from "../molecule/Post";
import { useDweetStore } from "@/store/useDweetStore";
import Modal from "../molecule/Modal";
import Login from "./Login";

export default function Dweets() {
  const dweets = useDweetStore((state) => state.dweets);
  const status = useDweetStore((state) => state.status);
  const fetchDweets = useDweetStore((state) => state.fetchDweets);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (status === "unauthorized") {
      setModal(true);

      return;
    }
    fetchDweets();
  }, [status]);

  return (
    <section className="mt-5">
      {status === "unauthorized" && (
        <Modal
          open={modal}
          onOpenChange={function (v: boolean): void {
            throw new Error("Function not implemented.");
          }}
        >
          <Login />
        </Modal>
      )}
      {dweets && dweets.map((dweet) => <Dweet key={dweet.id} dweet={dweet} />)}
    </section>
  );
}
