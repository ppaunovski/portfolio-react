import React from "react";
import { motion } from "framer-motion";
import Almanah_picture from "../img/алманах.jpg";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" absolute ml-[20px] top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
        <motion.img
          className=" hidden sm:block mt-20 mb-6 flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 lg:w-[300px] lg:h-[450px]"
          src={Almanah_picture.src}
          alt="Almahan img"
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        />

        <div className="mt-24 sm:mt-0 md:mt-10 space-y-2 sm:space-y-4 md:space-y-8 px-0 md:px-10">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Here&apos;s a{" "}
            <span className="underline decoration-[#39FF14]/40">little</span>{" "}
            background
          </h4>
          <p className="text-sm ">
            My name is Pavel, and I&apos;m a Computer Science Student at FINKI
            based in Skopje, Macedonia. In my spare time I like to improve my
            skills in coding, so I experiment with React, JavaScript and
            Tailwind trying to make responsive websites or webapps.
            <br></br>
            <br></br>
            In my very few years of coding I have worked with C and C++ where I
            learnt about the fundamentals of coding. Right now I&apos;m getting
            myself familiar with Java and it&apos;s functional programming
            paradigm, as well as broadening my knowlenge about the OOP paradigm.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
