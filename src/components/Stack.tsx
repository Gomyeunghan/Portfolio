import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StackProps } from "./StackList";

const Stack: React.FC<StackProps> = ({ technology }) => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  console.log(isInView);

  return (
    <motion.div
      className="border-Point text-Nomal border-4  bg-Primary rounded-xl basis-1/3  w-1/2 relative max-md:w-full"
      ref={scrollRef}
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <div className="bg-Secondery text-Normal inline-block relative -top-4 left-20 rounded-xl px-10 py-2 text-xl font-bold border-4 border-Nomal">
        {technology.stack}
      </div>
      <p className="p-10 pb-10">{technology.description}</p>
    </motion.div>
  );
};

export default Stack;
