import React, { useState } from "react";
import { motion } from "framer-motion";
import Bedge from "./Bedge";

interface ProjectCardProps {
  title: string;
  description: string;
  img?: string;
  bedge: string[];
  githubLink?: string;
  deployLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  img,
  bedge,
  githubLink,
  deployLink,
}) => {
  const [isHover, setIsHover] = useState(false);

  // 뷰포트 및 호버 애니메이션 설정 병합
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 200, // 왼쪽에서 시작
      scale: 1, // 약간 축소된 상태에서 시작
    },
    visible: {
      opacity: 1,
      x: 0, // 원래 위치로 이동
      scale: 1, // 원래 크기로 확대
      transition: {
        duration: 0.5, // 애니메이션 지속 시간
        ease: "easeOut", // 부드러운 감속 효과
      },
    },
    initial: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    initial: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hover: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const hoverContentVariants = {
    initial: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      // 뷰포트 및 호버 애니메이션 variants 통합
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }} // 뷰포트의 20%가 보일 때 애니메이션 트리거
      // 호버 애니메이션 설정
      className="flex flex-col bg-Secondery justify-between w-[calc(50%-24px)] p-10 rounded-xl h-[calc(50lvh)] cursor-pointer overflow-hidden max-md:w-3/4 max-md:justify-center max-md:flex max-md:m-auto"
      whileHover="hover"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      {/* 이전 코드와 동일 */}
      {!isHover ? (
        <motion.div
          key="default-content"
          variants={contentVariants}
          initial="initial"
          animate={!isHover ? "initial" : "hover"}
          exit="hover"
          className="flex flex-col h-full"
        >
          <div className="text-Nomal flex-grow">
            <h2 className="font-bold text-2xl">{title}</h2>
            <img src={img} alt="" className="w-full object-cover mt-4" />
            <p className="pt-5">{description}</p>
          </div>
          <div className="flex gap-5 mt-4">
            {bedge.map((item, index) => (
              <Bedge technology={item} key={index} />
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="hover-content"
          variants={hoverContentVariants}
          initial="initial"
          animate={isHover ? "hover" : "initial"}
          exit="initial"
          className="flex justify-between flex-col items-center w-full h-full"
        >
          <div className="flex justify-center flex-col text-Nomal items-center w-full">
            <h3 className="text-xl font-bold mb-6">{title}</h3>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-inherit text-white py-2 rounded mb-4 border-white border-2 px-12 hover:bg-white hover:text-Secondery transition w-full text-center whitespace-nowrap"
            >
              GitHub 바로가기
            </a>
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-inherit text-white py-2 rounded mb-4 border-white border-2 px-12 hover:bg-white hover:text-Secondery transition w-full text-center whitespace-nowrap"
            >
              배포주소 바로가기
            </a>
          </div>
          {/* <div className="flex gap-5 mt-4 justify-center">
            {bedge.map((item, index) => (
              <Bedge technology={item} key={index} />
            ))}
          </div> */}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
