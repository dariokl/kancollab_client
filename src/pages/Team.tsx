import React from "react";
import { IoIosAdd, IoMdTrash } from "react-icons/io";
import IconButton from "../components/base/IconButton";
import Button from "../components/base/Button";
import Select from "../components/base/Select";
import useAuth from "../hooks/useAuth";

const Team = () => {
  // Used for dummy data
  const user = useAuth();

  const dummyUserArray = Array.from({ length: 10 }, (x) => x);
  return (
    <div className="flex-col justify-center mt-6 px-16">
      <div className="flex justify-between mb-4">
        <p className="font-bold">Team Members</p>

        <div className="flex items-center divide-x-1 divide-gray-600 ">
          <Select
            onChange={() => console.log("a")}
            twind="bg-slate-100 w-24 border-none"
            placeholder="Sort by"
          />
          <span className="h-8 border-l-[1px] ml-2 mr-2"></span>
          <IconButton
            icon={() => <IoIosAdd size={20} color="white" />}
            twind="w-32 flex bg-blue-600 text-sm px-2 hover:bg-blue-600 hover:shadow-lg text-white"
            text="New Member"
          />
        </div>
      </div>
      {dummyUserArray.map((dummy) => (
        <div className="bg-white flex items-center justify-between shadow-md rounded-lg w-full h-20 mb-6 hover:shadow-lg">
          <div className="flex px-4 py-4">
            <img src={user.state.user?.avatar} className="h-10 w-10" />
            <div className="flex-col ml-1">
              <p className="font-bold ml-2">Dario Klopic</p>
              <p className="text-gray-400 ml-6 text-xs">Member</p>
            </div>
          </div>
          <div>
            <p className="text-gray-400 uppercase text-xs tracking-wider">
              email
            </p>
            <p className="font-bold text-sm">{user.state.user?.email}</p>
          </div>
          <div className="bg-green-200 flex justify-center items-center rounded-lg h-6 w-fit">
            <span className="text-xs px-4 py-2 text-green-500">Active</span>
          </div>
          <div className="px-4 py-4">
            <IconButton icon={() => <IoMdTrash size={20} />} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
