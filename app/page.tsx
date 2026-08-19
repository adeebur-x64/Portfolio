"use client";

import AnimatedBackground from "./AnimatedBackground";
import Image from "next/image";
import pfp from "../src/pfp.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
              width={2560}
              height={1440}
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="font-semibold text-3xl bg-gray-500/30 p-2 rounded-xl hover:underline hover:decoration-solid hover:text-blue-300 cursor-default">
            adeebur_x64.efi
          </h1>
          <div className="font-medium text-md bg-gray-900/70 pl-10 pr-10 pt-5 pb-5 rounded-xl text-[#0FBF3E] w-[calc(100vw-30vw)] lg:w-[calc(100vw-70vw)] md:w-[calc(100vw-60vw)] sm:w-[calc(100vw-60vw)] border-[#2e2e2e] border-2">
            <h2>
              &gt; Hi There! I'm Adeebur, aka domos000, a student from India who
              likes technology! <br /> &gt; I know HTML, CSS, Python, Next.JS
              and TailwindCSS. <br /> &gt; I'm currently learning C and I like
              Arch btw :3
            </h2>
          </div>
          <div className="flex absolute bottom-10 left-auto right-auto gap-5 text-lg sm:gap-5 md:gap-5 lg:gap-10">
            <div className="hover:text-[#0FBF3E] cursor-pointer">
              <a href="https://github.com/adeebur-x64">
                <FontAwesomeIcon icon={faGithub} />{" "}
                <p className="hidden sm:inline-flex hover:underline">GitHub</p>
              </a>
            </div>
            <div className="hover:text-[#FF0000] hover:underline cursor-pointer">
              <a href="https://www.youtube.com/@domos000">
                <FontAwesomeIcon icon={faYoutube} />{" "}
                <p className="hidden sm:inline-flex hover:underline">YouTube</p>
              </a>
            </div>
            <div className="hover:text-[#1DA1F2] hover:underline cursor-pointer">
              <a href="https://www.x.com/domos000">
                <FontAwesomeIcon icon={faXTwitter} />{" "}
                <p className="hidden sm:inline-flex hover:underline">
                  Twitter / X
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
