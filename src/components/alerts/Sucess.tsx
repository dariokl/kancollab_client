import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Sucess = ({ message }: { message: string }): JSX.Element => {
  return (
    <div
      className="p-2 mb-4 border border-green-200/80 rounded-lg bg-green-100 text-green-800/80"
      role="alert"
    >
      <div className="flex items-center justify-center">
        <IoIosCheckmarkCircle size={12} />
        <span className="sr-only">Info</span>
        <h3 className="text-xs ml-2   ">{message}</h3>
      </div>
    </div>
  );
};

export default Sucess;
