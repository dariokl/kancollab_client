import React, { ButtonHTMLAttributes } from "react";
import { IconType } from "../../types/iconType";

interface IButton {
  icon: IconType;
  title?: string;
  type?: "button" | "submit";
  twind?: string;
  text?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IButton> = ({
  icon,
  onClick,
  type = "button",
  title,
  twind,
  text,
}) => {
  return (
    <button
      title={title}
      type={type}
      className={`${
        twind ? twind : "w-8 hover:bg-gray-200"
      } flex justify-center items-center h-8 rounded-lg cursor-pointer`}
      onClick={onClick}
    >
      {icon && React.createElement(icon)}
      {text}
    </button>
  );
};

export default IconButton;
