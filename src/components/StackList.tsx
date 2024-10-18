import Stack from "./Stack";
import { motion } from "framer-motion";

interface StackListProps {}

const StackList: React.FC<StackListProps> = () => {
  return (
    <div className="bg-inherit h-lvh flex flex-wrap gap-9 justify-center p-20 w-full">
      <Stack />
      <Stack />
      <Stack />
      <Stack />
    </div>
  );
};

export default StackList;
