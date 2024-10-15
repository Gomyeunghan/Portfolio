import { ReactNode } from "react";

interface CarrerItems {
  compony?: string;
  year?: string;
}

interface CareerProps {
  careerData: CarrerItems[];
}

const Career: React.FC<CareerProps> = ({ careerData }) => {
  return (
    <div className="bg-white p-10 h-lvh ">
      <div className="text-Point font-bold leading-normal [text-shadow:_5px_5px_0_white] text-7xl rounded-3xl bg-Secondery inline px-24 py-2">
        Carrer
      </div>
      <ul className="border-l-8 border-Point pb-20 mx-10 mt-10 px-5 ">
        {careerData.map<ReactNode>((data, index) => {
          return (
            <li
              className="p-2 text-lg border-b-[1px] border-Point mr-[50%] flex justify-between items-center"
              key={index}
            >
              {data.compony} <span className="text-xs">{data.year}</span>
            </li>
          );
        })}
      </ul>
      <div className="-mt-36 mx-10">
        <span className="border-4 border-Point w-10 h-1 -rotate-45 block relative top-32 right-1"></span>
        <span className="border-4 border-Point w-10 h-1 rotate-45 block relative top-[120px] right-7"></span>
      </div>
    </div>
  );
};

export default Career;
