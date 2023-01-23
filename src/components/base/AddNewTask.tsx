import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

interface INewTask {
  addNewTask: () => void;
}

const AddNewTask: React.FC<INewTask> = ({ addNewTask }): JSX.Element => {
  return (
    <div
      className="flex h-8 rounded-lg border-dashed border-[0.5px] border-gray-500 justify-center items-center gap-2 mt-10 hover:opacity-80 cursor-pointer"
      onClick={() => addNewTask()}
    >
      <span>Add new Task</span>
      <IoIosAddCircleOutline size={20} />
    </div>
  );
};

export default AddNewTask;
