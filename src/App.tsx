import { motion } from "framer-motion";
import Star from "./components/Star";

function App() {
  return (
    <div className=" text-Point bg-Primary flex justify-center p-20 w-full h-lvh items-center bg-main bg-no-repeat bg-center">
      <Star />
      <motion.h1
        className="font-extrabold text-9xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        Hello world
      </motion.h1>
    </div>
  );
}

export default App;
