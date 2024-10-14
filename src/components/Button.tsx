interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      className="flex bg-Nomal p-4 text-Primary rounded-3xl justify-between gap-10 items-center w-48 cursor-pointer"
      type="button"
      onClick={handleClick}
    >
      Button
      <svg
        width="11"
        height="18"
        viewBox="0 0 11 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <path
          id="Vector"
          d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

export default Button;
