import React, { ReactNode } from "react";
import { IoIosArrowRoundDown, IoIosRefresh } from "react-icons/io";
import { QueryObserverResult } from "react-query";
import IconButton from "../base/IconButton";

interface IBoardContainer {
  onRefreshBoards?: () => Promise<QueryObserverResult<any, unknown>>;
  children: JSX.Element;
}
const BoardContainer: React.FC<IBoardContainer> = ({
  onRefreshBoards,
  children,
}): JSX.Element => {
  return (
    <div className="bg-white shadow-md mt-4 rounded w-1/2">
      <div className="flex justify-between px-1 text-center items-center">
        <div className="flex px-3 py-1 self-center text-sm font-medium  antialiased text-blue-600 ">
          Boards
        </div>
        <div className="p-2">
          <IconButton icon={IoIosArrowRoundDown} />
        </div>
      </div>
      <div className="mx-2 bg-white rounded">
        <div className="overflow-auto flex-col h-[320px]">{children}</div>
      </div>
      <div className="flex">
        <div className="p-2">
          <IconButton icon={IoIosRefresh} onClick={() => onRefreshBoards} />
        </div>
      </div>
    </div>
  );
};

export default BoardContainer;
