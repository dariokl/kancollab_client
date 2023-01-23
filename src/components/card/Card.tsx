import React from "react";

import IconButton from "../base/IconButton";
import { MdOutlineOpenInNew } from "react-icons/md";

interface ICard {
  title: string;
  description: string;
  color: string;
  priority: number;
  assigneeMail: string;
  assigneeAvatar: string;
}

const Card: React.FC<ICard> = ({
  title,
  description,
  color,
  priority,
  assigneeMail,
  assigneeAvatar,
}): JSX.Element => {
  const priorityArray = Array.from({ length: 3 }, (x) => x);

  const priorityValue = () => {
    switch (priority) {
      case 1:
        return "Low";
      case 2:
        return "Medium";
      case 3:
        return "High";
    }
  };

  return (
    <div
      className={`w-54 mt-4 px-4 py-4 flex-col bg-white mb-2 rounded-r-md shadow-md text-sm border-l-2 border-l-${color}-500/50`}
    >
      <div className="flex justify-between items-center">
        <h6 className="font-bold">{title}</h6>
        <IconButton icon={() => <MdOutlineOpenInNew size={20} />} />
      </div>
      <p className="break-words text-gray-600 word-break ">
        {description.length > 65
          ? description.slice(0, 64) + "..."
          : description}
      </p>
      <div
        className="mt-4 flex justify-between items-center group cursor-pointer"
        title={`Assignee : ${assigneeMail}`}
      >
        <img
          className="w-6 h-6 rounded-full"
          src={`${assigneeAvatar}`}
          alt="Rounded avatar"
        />
        <div
          className="w-18 h-6 mt-2 flex justify-end items-center px-2 "
          title={`Priority: ${priorityValue()}`}
        >
          {priorityArray.map((_, index) => (
            <span
              className={`w-2 h-2 rounded-full ${
                priority >= index + 1 ? "bg-red-400" : "bg-gray-400"
              } mr-[0.5px]`}
            />
          ))}
        </div>
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
