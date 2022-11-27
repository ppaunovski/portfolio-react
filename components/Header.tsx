import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

function Header({}: Props) {
  return (
    <header className="overflow-hidden sticky top-0 flex flex-row items-start justify-between px-5 max-w-7xl mx-auto bg-[#252525] z-40 h-12">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row justify-center items-center"
      >
        <SocialIcon
          url="https://github.com/ppaunovski"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.facebook.com/pavel.paun/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://twitter.com/PaunovskiPavel"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row justify-center items-center"
      >
        <SocialIcon
          url="mailto:paunovskipavel@gmail.com?subject=Mail from Portfolio Page"
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <a href="mailto:paunovskipavel@gmail.com?subject=Mail from Portfolio Page">
          <p className="hidden sm:inline-flex uppercase text-sm text-gray-500 tracking-widest">
            Get In Touch
          </p>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
