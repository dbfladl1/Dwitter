import { Jua } from "next/font/google";
import InputText from "./components/atom/Textarea";
import Button from "./components/atom/Button";
import InputComment from "./components/molecule/InputComment";
import Post from "./components/molecule/Post";

const jua = Jua({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className={`${jua.className} bg-[#111] text-white min-h-lvh`}>
      <div className="w-full md:max-w-[48rem] xl:max-w-[80rem] m-auto p-2 md:p-3">
        <section className="text-center md:text-left md:flex md:justify-between">
          <header className="text-xl md:text-3xl xl:text-4xl">Dwitter</header>
          <nav>
            <ul className="justify-between md:justify-baseline flex gap-10 p-2">
              <li>
                <a href="./">All dweet</a>
              </li>
              <li>
                <a href="./">My dweet</a>
              </li>
              <li>
                <a href="./">Logout</a>
              </li>
            </ul>
          </nav>
        </section>
        <InputComment></InputComment>
        <section className="mt-5">
          <Post></Post>
          <Post></Post>
        </section>
      </div>
    </div>
  );
}
