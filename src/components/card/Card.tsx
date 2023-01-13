import React from "react";
import IconButton from "../base/IconButton";
import { RiEditBoxLine } from "react-icons/ri";

const Card = ({ title }: { title: string }): JSX.Element => {
  return (
    <div className="mt-4 px-4 py-4 flex-col w-full bg-white mb-2 rounded-r-md shadow-md text-sm border-l-2 border-l-red-500/50">
      <div className="flex justify-between items-center">
        <h6 className="font-bold">{title}</h6>
        <IconButton icon={() => <RiEditBoxLine size={20} />} />
      </div>
      <div className="text-gray-600">Lorem ipsum</div>
    </div>
  );
};

export default Card;
