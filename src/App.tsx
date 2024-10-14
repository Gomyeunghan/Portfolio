import { motion } from "framer-motion";
import MeteorEffect from "./components/MeteorEffect";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div>
      <div className=" text-Point bg-Primary flex justify-center p-20 w-full h-lvh items-center bg-main bg-no-repeat bg-center">
        <MeteorEffect direction="right" angle={45} />
        <motion.h1
          className="font-extrabold text-9xl"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          Hello world
        </motion.h1>
      </div>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
