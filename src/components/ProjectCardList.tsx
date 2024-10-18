import ProjectCard from "./ProjectCard";

interface ProjectCardList {}

const ProjectCardList: React.FC<ProjectCardList> = () => {
  return (
    <div className="flex gap-4 w-full h-lvh">
      <ProjectCard
        title="파티구함"
        description="쉬운 스터디 모임을 위한 플렛폼"
      />
      <ProjectCard
        title="파티구함"
        description="쉬운 스터디 모임을 위한 플렛폼"
      />
    </div>
  );
};

export default ProjectCardList;
