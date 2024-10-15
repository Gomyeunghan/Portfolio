interface StackProps {}

const Stack: React.FC<StackProps> = () => {
  return (
    <div className="border-Point text-Nomal border-4  bg-Primary rounded-xl basis-1/3">
      <div className="bg-Secondery text-Normal inline-block relative -top-4 left-20 rounded-xl px-10 py-2 text-xl font-bold border-4 border-Nomal">
        React
      </div>
      <p className="p-10 pb-10">
        zustand라이브러리를 사용한 상태관리 경험이 있습니다. 등등
      </p>
    </div>
  );
};

export default Stack;
