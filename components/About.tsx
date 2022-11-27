import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
        <motion.img
          className=" hidden sm:block mt-20 mb-6 flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 lg:w-[300px] lg:h-[450px]"
          //src="https://scontent.fskp4-2.fna.fbcdn.net/v/t1.6435-9/86488521_3831297816888306_4805186462754537472_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3iSK25-D__sAX8cPc4b&_nc_ht=scontent.fskp4-2.fna&oh=00_AT8beZ3_QVFwzHIYvAlVD8WTQmSQeAdN_kd5iLhLRY-udw&oe=6362BD0C"
          src="https://firebasestorage.googleapis.com/v0/b/social-app-6644b.appspot.com/o/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%B0%D1%9A%D0%B5%2F%D0%B0%D0%BB%D0%BC%D0%B0%D0%BD%D0%B0%D1%85.jpgf42c53e2-606e-4b78-a325-02a5101d3362?alt=media&token=f2734198-4e24-4dc0-82d3-567f0453cd0c"
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
