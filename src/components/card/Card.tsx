import React from "react";
import IconButton from "../base/IconButton";
import { RiEditBoxLine } from "react-icons/ri";

interface ICard {
  title: string;
  description: string;
  color: string;
}

const Card: React.FC<ICard> = ({ title, description, color }): JSX.Element => {
  return (
    <div
      className={`w-64 mt-4 px-4 py-4 flex-col bg-white mb-2 rounded-r-md shadow-md text-sm border-l-2 border-l-${color}-500/50`}
    >
      <div className="flex justify-between items-center">
        <h6 className="font-bold">{title}</h6>
        <IconButton icon={() => <RiEditBoxLine size={20} />} />
      </div>
      <p className="break-words text-gray-600 word-break ">{description}</p>
    </div>
  );
};

export default Card;
