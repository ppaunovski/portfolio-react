import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Almanah_picture from "../img/алманах.jpg";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Pavel",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="z-20 items-center justify-center w-100 h-100">
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover mt-24"
          src={Almanah_picture.src}
        />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 tracking-[5px] pb-2">
            Computer Science Student
          </h2>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold px-10">
            <span>{text}</span>
            <Cursor />
          </h1>
        </div>

        <div className="z-30">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
