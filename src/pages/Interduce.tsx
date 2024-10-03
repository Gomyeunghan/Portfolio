interface CustomSVGProps extends React.SVGProps<SVGSVGElement> {
  cached?: string; // 사용자 정의 속성 추가
}

const CustomSVG: React.FC<CustomSVGProps> = () => {
  return <div className="h-lvh"> </div>;
};

export default CustomSVG;
