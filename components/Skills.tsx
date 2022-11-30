import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="relative h-screen flex justify-center items-center flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto">
      <h3 className="absolute ml-[20px] top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        Skills
      </h3>
      {/* <h4 className="absolute top-36 uppercase tracking-[3px] text-gray-600 text-sm">
        Hover over a skill for currency profieciency
      </h4> */}
      <div className="grid grid-cols-4 gap-5">
        <Skill
          image="https://cdn-icons-png.flaticon.com/512/174/174854.png"
          percent={90}
        />
        <Skill
          image="https://cdn-icons-png.flaticon.com/512/732/732190.png"
          percent={70}
        />
        <Skill
          image="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
          percent={70}
        />
        <Skill
          image="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          percent={70}
        />
        <Skill
          image="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
          percent={50}
        />
        <Skill
          image="https://cdn-icons-png.flaticon.com/512/732/732222.png"
          percent={80}
        />
        <Skill
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
          percent={80}
        />
        <Skill
          image="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
          percent={80}
        />
      </div>
    </motion.div>
  );
}

export default Skills;
