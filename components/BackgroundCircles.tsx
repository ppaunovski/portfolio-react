import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.5, 0.1, 1],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center z-0"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-96 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-96 " />
      <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-96 " />
      <div className="absolute border border-[#39FF14] rounded-full h-[550px] w-[550px] mt-96 opacity-20 animate-pulse" />
      {/* <div className="absolute border border-[#333333] rounded-full h-[650px] w-[650px] mt-52 " /> */}
    </motion.div>
  );
}

export default BackgroundCircles;
