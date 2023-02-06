import React from "react";
import { IoMdTrash } from "react-icons/io";
import IconButton from "../base/IconButton";

interface IUserCard {
  avatar: string;
  email: string;
}

const UserCard: React.FC<IUserCard> = ({ avatar, email }): JSX.Element => {
  return (
    <div className="bg-white flex items-center justify-between shadow-md rounded-lg w-full h-20 mb-6 hover:shadow-lg">
      <div className="flex px-4 py-4">
        <img src={avatar} className="h-10 w-10" />
        <div className="flex-col ml-1">
          <p className="font-bold ml-2">Dario Klopic</p>
          <p className="text-gray-400 ml-6 text-xs">Member</p>
        </div>
      </div>
      <div>
        <p className="text-gray-400 uppercase text-xs tracking-wider">email</p>
        <p className="font-bold text-sm">{email}</p>
      </div>
      <div className="bg-green-200 flex justify-center items-center rounded-lg h-6 w-fit">
        <span className="text-xs px-4 py-2 text-green-500">Active</span>
      </div>
      <div className="px-4 py-4">
        <IconButton icon={() => <IoMdTrash size={20} />} />
      </div>
    </div>
  );
};

export default UserCard;
