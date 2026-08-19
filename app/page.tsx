"use client";

import AnimatedBackground from "./AnimatedBackground";
import Image from "next/image";
import pfp from "../src/pfp.jpg";

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <main className="justify-center items-center flex p-auto m-auto w-[calc(100vw-64px)] h-[calc(100vh-64px)] backdrop-blur-sm bg-gray-600/5 rounded-2xl border-[#2e2e2e] border-2">
        <div className="flex gap-2 absolute top-5 left-5">
          <div className="bg-[#ff5f57] w-5 h-5 rounded-full"></div>
          <div className="bg-[#febd2b] w-5 h-5 rounded-full"></div>
          <div className="bg-[#2cc93c] w-5 h-5 rounded-full"></div>
        </div>
        <div className="absolute top-5 left-auto right-auto font-extrabold">
          &gt; portfolio
        </div>
        <div className="absolute top-15 left-5 w-[calc(100vw-105px)] bg-gray-400/10 h-2 rounded-full"></div>
        <div className="flex items-center m-auto flex-col gap-5">
          <div className="bg-gray-500/70 rounded-full w-40 h-40 overflow-hidden border-[#2e2e2e] border-2">
            <Image
              src={pfp}
              width={3840}
              height={2160}
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="font-semibold text-3xl bg-gray-500/30 p-2 rounded-xl hover:underline hover:decoration-solid hover:text-blue-300 cursor-default">
            adeebur_x64.efi
          </h1>
          <div className="flex absolute bottom-10 left-auto right-auto gap-10 text-lg">
            <a href="https://github.com/adeebur-x64">GitHub</a>
            <a href="https://www.youtube.com/@domos000">YouTube</a>
            <a href="https://www.x.com/domos000">Twitter / X</a>
          </div>
        </div>
      </main>
    </>
  );
}
