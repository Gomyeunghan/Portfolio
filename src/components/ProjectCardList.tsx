import ProjectCard from "./ProjectCard";

interface ProjectCardList {}

const ProjectCardList: React.FC<ProjectCardList> = () => {
  const projectData = [
    {
      title: "파티구함",
      description: "스터디 구인하는 플렛폼",
      bedge: ["React", "Zustand", "React-router"],
      githubLink: "https://github.com/Gomyeunghan/we-are-final-family",
      deployLink: "https://we-are-final-family-bay.vercel.app/",
    },
    {
      title: "타잉(티빙클론코딩)",
      description:
        "바닐라 자바스크립트 + Sass pocketbase 를 활용해 ott 플렛폼인 티빙을 클론코딩 하였습니다.",
      bedge: ["HTML", "SCSS", "JavaScript"],
      githubLink: "https://github.com/Gomyeunghan/5jorago-vanilla-project",
      deployLink: "https://5joragotaing.netlify.app/",
    },
    {
      title: "Hello World!",
      description: "타입스크립트 리엑트를 사용해 자기소개서 포토폴리오 제작",
      bedge: ["TypeScript", "tailwindCss", "React"],
      githubLink: "https://github.com/Gomyeunghan/Portfolio",
      deployLink: "https://portfolio-lyart-omega-94.vercel.app/",
    },
    {
      title: "Hello World!!",
      description: "타입스크립트 리엑트를 사용해 자기소개서 포토폴리오 제작",
      bedge: ["TypeScript", "tailwindCss", "React"],
    },
  ];

  return (
    <div className="flex w-full relative flex-wrap gap-6 justify-center max-md:flex-col">
      {projectData.map((data, index) => {
        return (
          <ProjectCard
            title={data.title}
            description={data.description}
            bedge={data.bedge}
            key={index}
            githubLink={data.githubLink}
            deployLink={data.deployLink}
          />
        );
      })}
    </div>
  );
};

export default ProjectCardList;
