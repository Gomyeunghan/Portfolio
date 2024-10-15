import React, { useState } from "react";
import Bedge from "./Bedge";

interface ProjectCardProps {
  title: string;
  description: string;
  img?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "hh",
  description = "hh",
  img,
}) => {
  const [isHover, setIsHover] = useState(false);

  function handleMouseOver() {
    setIsHover(true);
  }
  function handleMouseOut() {
    setIsHover(false);
  }

  const commonStyles = "bg-Secondery w-full h-full p-10 relative";

  return (
    <div className="text-Nomal w-full h-full p-10">
      <div
        className={commonStyles}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {/* Non-hover content */}
        <div
          className={`${
            isHover ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300 absolute inset-0 flex flex-col justify-between`}
        >
          <div className="flex flex-col gap-4 p-14">
            {img && (
              <img src={img} alt="이미지" className="w-full h-auto mb-4" />
            )}
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <span>{description}</span>
          </div>
          <div className="flex mt-4 p-14 gap-2">
            <Bedge technology="React" />
            <Bedge technology="React" />
            <Bedge technology="React" />
            <Bedge technology="React" />
            <Bedge technology="React" />
          </div>
        </div>

        {/* Hover content */}
        <div
          className={`${
            isHover ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 absolute inset-0 p-10 flex flex-col justify-center items-center shadow-[1px_35px_60px_1px_rgba(1,1,1,1.3)] -translate-y-2`}
        >
          <h3 className="text-xl font-bold mb-6">{title}</h3>
          <button className="bg-Primary text-white px-4 py-2 rounded mb-4">
            깃헙 바로가기
          </button>
          <button className="bg-Primary text-white px-4 py-2 rounded">
            배포주소 바로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
