import React from "react";
import { IconType } from "../../types/iconType";

interface IButton {
  icon: IconType;
  onClick?: () => void;
}

const IconButton: React.FC<IButton> = ({ icon, onClick }) => {
  return (
    <button
      className="flex justify-center items-center h-8 w-8 hover:bg-gray-200 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {icon && React.createElement(icon)}
    </button>
  );
};

export default IconButton;
