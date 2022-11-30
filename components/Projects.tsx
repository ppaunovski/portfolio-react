import React from "react";
import Project from "./Project";
import Students_pal_preview from "../img/Students_pal_preview.png";
import Hulu_clone_preview from "../img/hulu_clone_preview.png";
import Coming_soon_preview from "../img/Coming_soon_preview.png";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center">
      <h3 className="absolute ml-[20px] top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        Projects
      </h3>
      <h4 className="absolute top-32 text-xs text-gray-500">
        Click the image to preview live version
      </h4>

      <div className="h-screen relative p-6 mt-32 max-w-[80vw] sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[500px] overflow-x-scroll overflow-y-hidden flex snap-x snap-mandatory">
        <Project
          title="FINKI Student's Pal"
          images={Students_pal_preview}
          description="Social media like project, made with React as a front-end framework, Firebase as a database, Tailwind for beauty and many more. Started as a faculty project and still isn't finished."
          link="https://ppaunovski.github.io/students-pal"
        />

        <Project
          title="Hulu clone"
          images={Hulu_clone_preview}
          description="Hulu clone made with React and Next.js. Using Tailwing for styles and tmdb api for movie updates."
          link="https://hulu-clone-blond-ten.vercel.app/"
        />

        <Project
          title="More coming soon..."
          images={Coming_soon_preview}
          description="Visit my GitHub page for some other projects."
          link="https://github.com/ppaunovski"
        />
      </div>
    </div>
  );
}

export default Projects;
