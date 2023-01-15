import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

interface IToggleButtonIcon {
  isOpen: boolean;
  onClick: () => void;
}

const ToggleButtonIcon: React.FC<IToggleButtonIcon> = ({
  isOpen,
  onClick,
}): JSX.Element => {
  return (
    <div
      className="h-5 w-5 flex justify-center rounded-md hover:bg-gray-300"
      onClick={onClick}
    >
      {isOpen ? <IoIosArrowRoundDown /> : <IoIosArrowRoundUp />}
    </div>
  );
};

export default ToggleButtonIcon;
