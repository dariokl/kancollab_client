import React from "react";
import { IoIosAdd, IoMdTrash } from "react-icons/io";
import IconButton from "../components/base/IconButton";
import Button from "../components/base/Button";
import Select from "../components/base/Select";
import useAuth from "../hooks/useAuth";
import UserCard from "../components/user/UserCard";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  // Used for dummy data
  const user = useAuth();

  const dummyUserArray = Array.from({ length: 0 }, (x) => x);
  return (
    <div className="flex-col justify-center mt-6 px-16">
      <div className="flex justify-between items-center mb-4">
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
            onClick={() => navigate("/add-member")}
          />
        </div>
      </div>
      {dummyUserArray.length ? (
        dummyUserArray.map((dummy) => (
          <UserCard
            avatar={user.state.user?.avatar ?? ""}
            email={user.state.user?.email ?? ""}
          />
        ))
      ) : (
        <div className="flex mt-12 rounded-lg h-12 justify-center items-center font-bold uppercase border-[1.2px] border-gray-400 border-dotted">
          No Team Members
        </div>
      )}
    </div>
  );
};

export default Team;
