import React, { EffectCallback } from "react";
import { IoIosNotificationsOutline, IoIosMenu } from "react-icons/io";
import IconButton from "../base/IconButton";
import Input from "../base/Input";

const Navbar: React.FC<{ onOpen: EffectCallback }> = ({
  onOpen,
}): JSX.Element => {
  return (
    <nav className="h-14 flex justify-between px-2 py-2  bg-white shadow-md">
      <div className="flex items-center justify-center text-sm font-bold gap-2">
        <IconButton icon={() => <IoIosMenu size={20} />} onClick={onOpen} />
        <span>Kancollab.</span>
      </div>
      <div className="flex items-center align-center">
        <Input type="text" twind="bg-slate-100 w-96" placeholder="Search" />
      </div>
      <div className="flex items-center space-x-2">
        <IconButton icon={() => <IoIosNotificationsOutline size={20} />} />
      </div>
    </nav>
  );
};

export default Navbar;
