import { motion, useScroll, useTransform } from "framer-motion";
import MeteorEffect from "./components/MeteorEffect";
import StackList from "./components/StackList";
import ProjectCardList from "./components/ProjectCardList";
import Career from "./components/Career";
import Introduce from "./components/Introduce";

function App() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, window.innerHeight, window.innerHeight * 2],
    ["#222831 ", "#222831", "#181818"] // 검은색에서 흰색으로 변경
  );
  const opacity = useTransform(
    scrollY,
    [0, window.innerHeight, window.innerHeight * 2],
    ["1 ", "1", "0"]
  );
  const careerData = [
    { compony: "아이위즈", year: "2020.01.01" },
    { compony: "아이위즈", year: "2020.01.01" },
    { compony: "아이위즈", year: "2020.01.01" },
    { compony: "아이위즈", year: "2020.01.01" },
    { compony: "아이위즈", year: "2020.01.01" },
  ];

  return (
    <motion.div
      className="relative min-h-screen z-20"
      style={{ backgroundColor }}
    >
      <div className="fixed top-0 left-0 w-full h-full z-0 ">
        <MeteorEffect direction="right" angle={45} />
        <motion.div
          className="text-Point  flex justify-center p-20 w-full h-screen items-center bg-main bg-no-repeat bg-center"
          style={{ opacity }}
        >
          <motion.h1
            className="font-extrabold text-9xl"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            Hello world
          </motion.h1>
        </motion.div>
      </div>
      <div className=" min-h-screen"> </div>
      <div className="relative z-10">
        <Introduce />
        <StackList />
        <ProjectCardList />
        <Career careerData={careerData} />
      </div>
    </motion.div>
  );
}

export default App;
