import Stack from "./Stack";

interface StackListProps {}

export interface StackProps {
  technology: { stack: string; description: string };
}
export interface StackProps {
  technology: Technology;
}
type Technology = StackProps["technology"];

const StackList: React.FC<StackListProps> = () => {
  const technologyStacks: Technology[] = [
    {
      stack: "React",
      description:
        "사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리. React, React Router, Supabase를 사용해 CRUD 및 채팅 기능이 가능한 팀 프로젝트를 구현한 경험이 있습니다.",
    },
    {
      stack: "TypeScript",
      description:
        "React 프로젝트 종료후 propstyeps 라이브러리가 19버젼부터 지원이 안된다는것을 알고 타입스크립트의 중요성을 알아 학습중입니다.",
    },
    {
      stack: "JavaScript",
      description:
        "웹 페이지의 동적 요소를 구현하기 위한 프로그래밍 언어로 50% 정도 이해하고 사용 가능. 바닐라 자바스크립트를 사용하여 Tving OTT 플랫폼 클론 코딩 팀 프로젝트 경험이 있습니다.",
    },
    {
      stack: "HTML",
      description:
        "웹접근성과 웹표준을 기반으로 마크업을 하려고 노력하며, 시멘틱 테그와 사용자경험을 역지사지로 생각하여 개발합니다.",
    },
    {
      stack: "CSS",
      description:
        "웹 페이지의 스타일과 레이아웃을 정의하기 위한 스타일링 언어로 50% 정도 이해하고 사용 가능하며, Sass,Tailwind-css 사용 가능합니다.",
    },
    {
      stack: "Next.js",
      description:
        "React 기반 애플리케이션을 빠르고 쉽게 개발하기위해 현재 학습중입니다.",
    },
  ];

  return (
    <div className="bg-inherit flex flex-wrap gap-9 justify-center p-20 w-full max-md:flex-col">
      {technologyStacks.map((teck, index) => {
        return <Stack technology={teck} key={index} />;
      })}
    </div>
  );
};

export default StackList;
