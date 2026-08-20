"use client";

import AnimatedBackground from "./AnimatedBackground";
import Image from "next/image";
import pfp from "../src/pfp.jpg";
import bootnt from "../src/BOOT-NT.png";
import klair from "../src/KLAIR.png";
import slair from "../src/SLAIR.png";
import meteoric from "../src/meteoric.png";

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
      <main className="relative justify-center items-center flex py-24 mx-auto my-8 w-[calc(100vw-64px)] h-[calc(100vh-64px)] backdrop-blur-sm [--webkit-backdrop-filter:blur(4px)] bg-gray-600/5 rounded-2xl border-[#2e2e2e] border-2">
        <div className="flex gap-2 absolute top-5 left-5">
          <div className="bg-[#ff5f57] w-5 h-5 rounded-full"></div>
          <div className="bg-[#febd2b] w-5 h-5 rounded-full"></div>
          <div className="bg-[#2cc93c] w-5 h-5 rounded-full"></div>
        </div>
        <div className="absolute top-5 left-auto right-auto font-extrabold">
          &gt; portfolio
        </div>
        <div className="absolute top-15 left-5 w-[calc(100vw-105px)] bg-gray-400/10 h-2 rounded-full"></div>
        <div className="flex items-center m-auto p-20 flex-col gap-5 bg-gray-800/10 backdrop-blur-sm [--webkit-backdrop-filter:blur(4px)] border-[#2e2e2e] border-2 rounded-2xl w-[90vw] max-h-full overflow-y-auto overflow-x-hidden">
          <div className="shrink-0 bg-gray-500/70 rounded-full w-40 h-40 overflow-hidden border-[#2e2e2e] border-2">
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
          <div className="shrink-0 font-medium text-md bg-gray-900/70 pl-10 pr-10 pt-5 pb-5 rounded-xl text-[#0FBF3E] w-[calc(100vw-30vw)] lg:w-[calc(100vw-70vw)] md:w-[calc(100vw-60vw)] sm:w-[calc(100vw-60vw)] border-[#2e2e2e] border-2">
            <h1 className="text-xl underline mb-3 text-blue-300">
              # Who am I?
            </h1>
            <h2>
              &gt; Hi There! I'm Adeebur, aka domos000, a student from India who
              likes technology! <br /> &gt; I know HTML, CSS, Python, Next.JS
              and TailwindCSS. <br /> &gt; I'm currently learning C and I like
              Arch btw :3
            </h2>
          </div>
          <div className="shrink-0 font-medium text-md bg-gray-900/70 pl-10 pr-10 pt-5 pb-5 rounded-xl text-[#0FBF3E] w-[calc(100vw-30vw)] lg:w-[calc(100vw-70vw)] md:w-[calc(100vw-60vw)] sm:w-[calc(100vw-60vw)] border-[#2e2e2e] border-2">
            <h1 className="text-xl underline mb-3 text-blue-300">
              # My Hobbies!
            </h1>
            <h2>
              &gt; I really like coding and staying chronically online lol.{" "}
              <br /> &gt; I like to stay updated with the latest technologies.{" "}
              <br /> &gt; I also really like to doomscroll :3
            </h2>
          </div>
          <h1 className="shrink-0 font-semibold text-3xl text-blue-300 underline p-2 rounded-xl cursor-default">
            # My Projects:
          </h1>
          <div className="shrink-0 flex flex-row bg-gray-900/70 p-5 rounded-xl border-[#2e2e2e] border-2 gap-5 w-[calc(100vw-20vw)] lg:w-[calc(100vw-20vw)] md:w-[calc(100vw-30vw)] sm:w-[calc(100vw-40vw)] overflow-x-auto">
            <div className="relative shrink-0 bg-gray-500 w-[60vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] h-[30vh] rounded-3xl border-[#3e3e3e] p-5 border-2 overflow-hidden">
              <Image
                src={klair}
                width={1920}
                height={1080}
                alt="KLAIR"
                className="absolute top-0 left-0 z-0 object-cover w-full h-full"
              />
              <h1 className="absolute z-5 bottom-5 text-xl font-bold bg-gray-900/30 p-2 rounded-xl backdrop-blur-sm">
                ~/KLAIR &#9679;{" "}
                <a
                  href="https://github.com/adeebur-x64/KLAIR"
                  className="hover:underline hover:text-[#0FBF3E] underline"
                >
                  GitHub
                </a>{" "}
                &#9679;{" "}
                <a
                  href="https://youtu.be/V7R2fUJKHmI"
                  className="hover:underline hover:text-[#FF0000] underline"
                >
                  Youtube
                </a>
              </h1>
            </div>
            <div className="relative shrink-0 bg-gray-500 w-[60vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] h-[30vh] rounded-3xl border-[#3e3e3e] p-5 border-2 overflow-hidden">
              <Image
                src={slair}
                width={1920}
                height={1080}
                alt="SLAIR"
                className="absolute top-0 left-0 z-0 object-cover w-full h-full"
              />
              <h1 className="absolute z-5 bottom-5 text-xl font-bold bg-gray-900/30 p-2 rounded-xl backdrop-blur-sm">
                ~/SLAIR &#9679;{" "}
                <a
                  href="https://github.com/adeebur-x64/SLAIR"
                  className="hover:underline hover:text-[#0FBF3E] underline"
                >
                  GitHub
                </a>
              </h1>
            </div>
            <div className="relative shrink-0 bg-gray-500 w-[60vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] h-[30vh] rounded-3xl border-[#3e3e3e] p-5 border-2 overflow-hidden">
              <Image
                src={meteoric}
                width={1920}
                height={1080}
                alt="meteoric"
                className="absolute top-0 left-0 z-0 object-cover w-full h-full"
              />
              <h1 className="absolute z-5 bottom-5 text-xl font-bold bg-gray-900/30 p-2 rounded-xl backdrop-blur-sm">
                meteoric &#9679;{" "}
                <a
                  href="https://github.com/adeebur-x64/meteoric"
                  className="hover:underline hover:text-[#0FBF3E] underline"
                >
                  GitHub
                </a>
              </h1>
            </div>
            <div className="relative shrink-0 bg-gray-500 w-[60vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] h-[30vh] rounded-3xl border-[#3e3e3e] p-5 border-2 overflow-hidden">
              <h1 className="absolute z-5 bottom-5 text-xl font-bold bg-gray-900/30 p-2 rounded-xl backdrop-blur-sm">
                collectif &#9679;{" "}
                <a
                  href="https://github.com/adeebur-x64/collectif"
                  className="hover:underline hover:text-[#0FBF3E] underline"
                >
                  GitHub
                </a>
              </h1>
            </div>
            <div className="relative shrink-0 bg-gray-500 w-[60vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] h-[30vh] rounded-3xl border-[#3e3e3e] p-5 border-2 overflow-hidden">
              <Image
                src={bootnt}
                width={1920}
                height={1080}
                alt="BOOT:NT"
                className="absolute top-0 left-0 z-0 object-cover w-full h-full"
              />
              <h1 className="absolute z-5 bottom-5 text-xl font-bold bg-gray-900/30 p-2 rounded-xl backdrop-blur-sm">
                BOOT:NT &#9679;{" "}
                <a
                  href="https://github.com/adeebur-x64/BOOT-NT"
                  className="hover:underline hover:text-[#0FBF3E] underline"
                >
                  GitHub
                </a>{" "}
                &#9679;{" "}
                <a
                  href="https://youtu.be/_s97sfBjCfY"
                  className="hover:underline hover:text-[#FF0000] underline"
                >
                  Youtube
                </a>
              </h1>
            </div>
          </div>
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
      </main>
    </>
  );
}
