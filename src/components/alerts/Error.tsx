import React from "react";
import { IoIosAlert } from "react-icons/io";

const Error = ({ message }: { message: string }): JSX.Element => {
  return (
    <div
      className="p-2 border border-red-200/80 rounded-lg bg-red-100 text-red-900"
      role="alert"
    >
      <div className="flex items-center justify-center">
        <IoIosAlert />
        <span className="sr-only">Info</span>
        <h3 className="text-xs ml-2  ">{message}</h3>
      </div>
    </div>
  );
};

export default Error;
