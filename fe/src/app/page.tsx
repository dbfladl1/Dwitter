import { Jua } from "next/font/google";
import InputComment from "./ui/molecule/InputComment";
import Nav from "./ui/organism/Nav";
import Posts from "./ui/organism/Posts";

const jua = Jua({
  subsets: ["latin"],
  weight: "400",
});

export default function Home({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
