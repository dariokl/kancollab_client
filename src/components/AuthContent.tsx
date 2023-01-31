import React from "react";
import { FaFlipboard } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";

const AuthContent = () => {
  return (
    <div className="flex px-8 w-24">
      <ul>
        <li className="flex items-center gap-2 mb-6">
          <span className="text-blue-600">
            <FaFlipboard size={20} />
          </span>
          <span className="font-bold text-xl">Kancollab.</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex items-center text-white bg-blue-600 rounded-full ">
            <IoIosCheckmark />
          </span>
          <span className="font-semibold text-md">Start quick</span>
        </li>
        <li className="mb-4">
          <span className="text-xs text-gray-500">
            Setting up boards is meant to be easy.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex items-center text-white bg-blue-600 rounded-full">
            <IoIosCheckmark />
          </span>

          <span className="font-semibold text-md">Minimal</span>
        </li>
        <li className="mb-4">
          <span className="text-xs text-gray-500">
            Keep things together with minimal efforts.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex items-center text-white bg-blue-600 rounded-full ">
            <IoIosCheckmark />
          </span>

          <span className="font-semibold text-md">Free</span>
        </li>
        <li className="mb-4">
          <span className="text-xs text-gray-500">
            Kancollab is a free tool.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AuthContent;
