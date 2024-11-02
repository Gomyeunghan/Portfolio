import React from "react";
import AdressCard from "./AdressCard";

interface IntroduceProps {}

const Introduce: React.FC<IntroduceProps> = () => {
  return (
    <div className="h-screen px-8 md:px-36 flex flex-col justify-center items-center">
      <section className="bg-white p-6 md:p-10 rounded-3xl w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl text-Point border-b-2 border-b-Point pb-2 md:pb-4">
          React
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 pt-8 md:pt-10 items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-50 rounded-full overflow-hidden">
            <img
              src="/beauty_1728734334504-removebg-preview.png"
              alt="profile"
              className="object-contain object-center w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left w-full">
            <AdressCard
              text="rhaudgks04@gmail.com"
              link="rhaudgks04@gmail.com"
            />
            <AdressCard
              text="GITHUB"
              link="https://github.com/Gomyeunghan/Portfolio"
            />
            <AdressCard
              text="블로그"
              link="https://velog.io/@rhaudgks12/posts"
            />
          </div>
        </div>
        <p className="text-center p-4 md:p-10 leading-6 md:leading-8 mt-4 text-sm md:text-base text-black">
          안녕하세요.
          <br />
          <strong className="text-lg md:text-xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-Point via-blue-500 to-Primary">
            프론트엔드 개발자 고명한
          </strong>
          입니다. <br />
          저는 사용자 경험을 최우선으로 하며, 직관적이고 편리한 UI/UX를 제공하는
          프론트엔드 개발자가 되고자 합니다. <br />
          최신 기술을 꾸준히 학습하고, 문제 해결 능력을 키워나가며, 팀과의
          협업을 통해 더 나은 결과를 만들어내는 것을 목표로 하고 있습니다.
          <br />
          <strong className="text-lg md:text-xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-Point via-blue-500 to-Primary">
            끊임없이 성장하며 사용자와 팀에 가치를 제공하는 개발자로 발전할
            것입니다.
          </strong>
        </p>
      </section>
    </div>
  );
};

export default Introduce;
