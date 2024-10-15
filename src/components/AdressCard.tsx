interface AdressCardProps {
  text: string;
  link: string;
  onClick?: () => void;
}

const AdressCard: React.FC<AdressCardProps> = ({ text, link, onClick }) => {
  return (
    <div
      className="bg-Primary text-Point p-6 rounded-2xl flex justify-center hover:bg-Point hover:text-Primary transition "
      onClick={onClick}
    >
      <a href={link} className="text-xl">
        {" "}
        {text}
      </a>
    </div>
  );
};

export default AdressCard;
