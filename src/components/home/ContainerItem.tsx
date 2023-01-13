import React from "react";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface IContainerItem {
  id: string;
  name: string;
  owner: string;
}

const ContainerItem: React.FC<IContainerItem> = ({ id, name, owner }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex-col cursor-pointer rounded hover:bg-gray-200 border-l-2 border-red-200 hover:border-blue-400"
      onClick={() => navigate(`/board/${id}`)}
    >
      <div className="flex items-center px-6 py-3 justify-between gap-2">
        <div className="flex justify-center items-center">
          <div className="flex items-center bg-blue-600 rounded h-6 w-6 p-1 justify-around">
            <MdDashboard color="white" />
          </div>
          <div className="font-bold text-gray-600 ml-1 mt-1 uppercase text-xs tracking-widest">
            <span>{name} </span>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex justify-between items-center gap-2">
            <span className="text-xs">{owner}</span>
            <button className="flex rounded-full p-1 pb-1 h-6 w-6 bg-orange-500 justify-around m-[0.5px]">
              <span className="text-xs font-bold uppercase">
                {owner.slice(0, 2)}
              </span>
            </button>
          </div>
          <div className="border-t-[1px] border-gray-700 text-xs lowercase text-gray-400">
            owner
          </div>
        </div>
      </div>
      <div className="mt-3"></div>
    </div>
  );
};

export default ContainerItem;
