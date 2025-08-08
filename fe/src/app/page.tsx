import { Jua } from "next/font/google";
import InputComment from "./components/molecule/InputComment";
import Nav from "./components/organism/Nav";
import Posts from "./components/organism/Dweets";
import { DweetService } from "../lib/api/dweets";

const jua = Jua({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const dweet = new DweetService();
  return (
    <div className={`${jua.className} bg-[#111] text-white min-h-lvh`}>
      <div className="w-full md:max-w-[48rem] xl:max-w-[80rem] m-auto p-2 md:p-3">
        <Nav />
        <InputComment />
        <Posts />
      </div>
    </div>
  );
}
