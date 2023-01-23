import React from "react";

interface ICard {
  title: string;
  description: string;
  color: string;
  priority: number;
  assigneeMail: string;
  assigneeAvatar: string;
}

enum PriorityEnum {
  Lowest = 1,
  Medium,
  Highest,
}

const Card: React.FC<ICard> = ({
  title,
  description,
  color,
  priority,
  assigneeMail,
  assigneeAvatar,
}): JSX.Element => {
  return (
    <div
      className={`mt-4 px-4 py-4 flex-col bg-white mb-2 rounded-lg shadow-lg text-sm `}
    >
      <div className="flex justify-between items-center mb-2">
        <h6 className="cursor-pointer font-bold text-sm tracking-wider uppercase hover:underline">
          {title}
        </h6>
        <span
          className={`cursor-pointer w-8 bg-red-${
            priority + 1
          }00  rounded-lg h-2`}
          title={`${PriorityEnum[priority]} priority`}
        ></span>
      </div>

      <p className="break-words text-gray-600 word-break text-xs">
        {description.length > 65
          ? description.slice(0, 64) + "..."
          : description}
      </p>
      <div className="mt-4 flex justify-between items-center group">
        <img
          className="w-6 h-6 rounded-full cursor-pointer"
          src={`${assigneeAvatar}`}
          alt="Rounded avatar"
          title={`${assigneeMail}`}
        />

        <div
          className={`flex justift-center items-center bg-purple-100 w-18 h-6 rounded-md cursor-pointer`}
          title="Due date"
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
