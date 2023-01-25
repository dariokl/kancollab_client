import React, { ButtonHTMLAttributes } from "react";
import { IconType } from "../../types/iconType";

interface IButton {
  icon: IconType;
  title?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const IconButton: React.FC<IButton> = ({
  icon,
  onClick,
  type = "button",
  title,
}) => {
  return (
    <button
      title={title}
      type={type}
      className="flex justify-center items-center h-8 w-8 hover:bg-gray-200 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {icon && React.createElement(icon)}
    </button>
  );
};

export default IconButton;
