import React from "react";

export default function Nav() {
  return (
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
  );
}
