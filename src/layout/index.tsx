import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const DashboradLayout: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-[560px] w-[760px] bg-slate-100 text-gray-800 font-sans overflow-y-scroll">
      <Sidebar isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      <Navbar onOpen={() => setIsOpen(true)} />
      <Outlet />
    </div>
  );
};

export default DashboradLayout;
