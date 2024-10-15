import React from "react";
import AdressCard from "./AdressCard";

interface IntroduceProps {}

const Introduce: React.FC<IntroduceProps> = () => {
  return (
    <div className="h-lvh px-36">
      <section className="bg-white p-10 m-12 rounded-3xl">
        <h2 className="text-Point border-b-2 border-b-Point p-4 text-3xl">
          React
        </h2>
        <div className="flex pt-10 gap-20">
          <div className="bg-gray-50 basis-1/3 rounded-full overflow-hidden aspect-square">
            <img
              src="https://i.namu.wiki/i/vQpNtHExAd6aKFEfpcxJQ2kVVbkrIPrSrrIDo1tFuWvAWCK7Kj1BpmndwZEc8xKeh_NNQM0arWVxwZWsPDjxjpakdW5H2_FFGlCNDhTA01t76affk6mzjXEYm5y0cDsDXAf0abEGp0WsgUHIaancQA.webp"
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex flex-col basis-2/3 gap-20 justify-center">
            <AdressCard
              text="rhaudgks04@gmail.com"
              link="rhaudgks04@gmail.com"
            ></AdressCard>
            <AdressCard
              text="GITHUB"
              link="https://github.com/Gomyeunghan/Portfolio"
            ></AdressCard>
            <AdressCard
              text="블로그"
              link="https://velog.io/@rhaudgks12/posts"
            ></AdressCard>
          </div>
        </div>
        <p className="text-center w-full p-10 leading-8 mt-4 text-l font-normal text-black">
          안녕하세요.
          <br />
          <strong className="text-xl text-transparent  bg-clip-text font-bold bg-gradient-to-r from-Point via-blue-500 to-Primary">
            프론트앤드 개발자 고명한
          </strong>
          입니다. <br />
          저는 사용자 경험을 최우선으로 하며, 직관적이고 편리한 UI/UX를 제공하는
          프론트엔드 개발자가 되고자 합니다. <br />
          최신 기술을 꾸준히 학습하고, 문제 해결 능력을 키워나가며, 팀과의
          협업을 통해 더 나은 결과를 만들어내는 것을 목표로 하고 있습니다.
          <br />
          <strong className="text-xl text-transparent  bg-clip-text font-bold bg-gradient-to-r from-Point via-blue-500 to-Primary">
            끊임없이 성장하며 사용자와 팀에 가치를 제공하는 개발자로 발전할
            것입니다.
          </strong>
        </p>
      </section>
    </div>
  );
};

export default Introduce;
