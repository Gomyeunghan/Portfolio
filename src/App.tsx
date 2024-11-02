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
    [0, window.innerHeight, window.innerHeight * 2, window.innerHeight * 4],
    ["#222831 ", "#222831", "#222831", "#FFFFFF"] // 검은색에서 흰색으로 변경
  );
  const opacity = useTransform(
    scrollY,
    [0, window.innerHeight, window.innerHeight * 2, window.innerHeight * 4],
    ["1 ", "1", "0", "0"]
  );
  const careerData = [
    { compony: "한국맥도날드유한회사(A)", year: "2016. 04 ~ 2016. 07" },
    { compony: "강화작은영화관사회적협동조합", year: "2016. 08 ~ 2016. 08" },
    { compony: "강화군청(민원지적과-지가조사팀)", year: "2017. 01 ~ 2017. 08" },
    { compony: "(주)우리엔유", year: "2020. 04 ~ 2020. 05" },
    { compony: "투썸플레이스인천강화점", year: "2020. 08 ~ 2021. 06" },
    { compony: "주식회사아이위즈", year: "2021. 09 ~ 2023. 05" },
    { compony: "주식회사더블유아이엘", year: "2023. 06 ~ 2024. 03" },
  ];

  return (
    <motion.div
      className="relative min-h-screen z-20 overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="fixed top-0 left-0 w-full h-full z-0 ">
        <motion.div style={{ opacity }}>
          <MeteorEffect direction="right" angle={45} />
        </motion.div>

        <motion.div
          className="text-Point w-full h-screen items-center bg-main bg-no-repeat bg-center"
          style={{ opacity }}
          animate={{ y: [-20, 20, -20] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        ></motion.div>
      </div>
      <motion.div
        className="font-extrabold text-9xl flex justify-center items-center h-lvh w-full text-Point fixed"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <motion.h1
          className="whitespace-nowrap max-md:text-6xl"
          style={{ opacity }}
        >
          Hello world
        </motion.h1>
      </motion.div>

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
