import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CareerItems {
  compony?: string;
  year?: string;
}

interface CareerProps {
  careerData: CareerItems[];
}

const CareerItem: React.FC<{ data: CareerItems; index: number }> = ({
  data,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.li
      ref={ref}
      className="p-2 text-lg border-b-[1px] border-Point mr-[50%] flex justify-between items-center"
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {data.compony} <span className="text-xs">{data.year}</span>
    </motion.li>
  );
};

const Career: React.FC<CareerProps> = ({ careerData }) => {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, {
    once: false,
    amount: 0.1,
  });

  return (
    <motion.div
      className="p-10 bg-inherit scroll-none"
      ref={containerRef}
      initial={{ opacity: 0, x: -400 }}
      animate={{
        opacity: isContainerInView ? 1 : 0,
        x: isContainerInView ? 0 : -400,
        transition: {
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1],
          delay: 0.1,
        },
      }}
    >
      <div className="text-Point font-bold leading-normal [text-shadow:_5px_5px_0_white] text-7xl rounded-3xl bg-Secondery inline px-24 py-2">
        Career
      </div>
      <ul className="border-l-8 border-Point pb-20 mx-10 mt-10 px-5">
        {careerData.map((data, index) => (
          <CareerItem key={index} data={data} index={index} />
        ))}
      </ul>
      <div className="-mt-36 mx-10">
        <span className="border-4 border-Point w-10 h-1 -rotate-45 block relative top-32 right-1"></span>
        <span className="border-4 border-Point w-10 h-1 rotate-45 block relative top-[120px] right-7"></span>
      </div>
    </motion.div>
  );
};

export default Career;
