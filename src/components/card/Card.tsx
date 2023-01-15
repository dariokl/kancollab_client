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
      className={`w-54 mt-4 px-4 py-4 flex-col bg-white mb-2 rounded-r-md shadow-md text-sm border-l-2 border-l-${color}-500/50`}
    >
      <div className="flex justify-between items-center">
        <h6 className="font-bold">{title}</h6>
        <IconButton icon={() => <RiEditBoxLine size={20} />} />
      </div>
      <p className="break-words text-gray-600 word-break ">
        {description.length > 65
          ? description.slice(0, 64) + "..."
          : description}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <img
          className="w-6 h-6 rounded-full"
          src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
          alt="Rounded avatar"
        />
        <div
          className={`flex justift-center items-center bg-${color}-100 w-18 h-6 rounded-md`}
        >
          {color === "green" ? (
            <p className="px-2 text-xs">Done</p>
          ) : (
            <p className="px-2 text-xs">2 days left</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
