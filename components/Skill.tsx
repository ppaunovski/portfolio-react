import React from "react";

type Props = {
  image: string;
  percent: string;
};

function Skill({ image, percent }: Props) {
  return (
    <div className="group relative flex cursor-pointer w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28">
      <div className="flex justify-center rounded-full items-center w-full h-full border-2">
        <img
          className=" scale-75 rounded-3xl filter group-hover:grayscale transition duration-300 ease-in-out"
          src={image}
        />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">{percent}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
