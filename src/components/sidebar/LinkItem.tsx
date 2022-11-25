import React, { useMemo } from "react";
import { IconType } from "react-icons";
import { useLocation } from "react-router-dom";

interface ILink {
  text: string;
  icon: IconType;
}

const LinkItem: React.FC<ILink> = ({ text, icon }): JSX.Element => {
  const { pathname } = useLocation();

  const isActive = useMemo(() => {
    const path = pathname.replace("/", "");

    return path === text.toLowerCase();
  }, [text, pathname]);
  return (
    <div
      className={`${
        isActive ? "bg-slate-100 border-r-2 border-blue-400" : ""
      } rounded-md h-8 w-40 px-2 text-gray-600 flex items-center justify-start hover:bg-slate-100 gap-2`}
    >
      {React.createElement(icon)}
      <span className="text-sm  font-semibold">{text}</span>
    </div>
  );
};

export default LinkItem;
