import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  link: string;
  images: StaticImageData;
  description: string;
};

function Project({ title, link, images, description }: Props) {
  console.log(images);

  return (
    <div className="h-full p-6 w-[80vw] sm:w-[70vw] md:w-[50vw] lg:w-[500px] snap-center flex flex-col justify-center items-center">
      <div className="mb-2">
        <a href={link} target="_blank">
          <img
            src={images.src}
            alt="Preview of project"
            className="w-full h-48 sm:h-60 md:h-64 lg:h-72"
          />
        </a>
        <h4 className="text-center text-lg">{title}</h4>
        <p className="w-[80vw] sm:w-[70vw] md:w-[50vw] lg:w-[500px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Project;
