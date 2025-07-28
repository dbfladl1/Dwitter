import { Jua } from "next/font/google";
import InputText from "./components/atom/Textarea";
import Button from "./components/atom/Button";
import InputComment from "./components/molecule/InputComment";
import Post from "./components/molecule/Post";
import Nav from "./components/organism/Nav";
import Posts from "./components/organism/Posts";

const jua = Jua({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className={`${jua.className} bg-[#111] text-white min-h-lvh`}>
      <div className="w-full md:max-w-[48rem] xl:max-w-[80rem] m-auto p-2 md:p-3">
        <Nav />
        <InputComment></InputComment>
        <Posts />
      </div>
    </div>
  );
}
