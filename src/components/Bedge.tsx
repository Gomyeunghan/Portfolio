interface BedgeProps {
  technology: string;
}

const Bedge: React.FC<BedgeProps> = ({ technology }) => {
  return (
    <span className="bg-Primary text-Point rounded-2xl p-2 text-sm font-thin">
      {technology}
    </span>
  );
};

export default Bedge;
