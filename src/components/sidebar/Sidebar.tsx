import React, { EffectCallback } from "react";
import { IoIosHome, IoIosLogOut } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation } from "react-router-dom";
import LinkItem from "./LinkItem";
import { MdSpaceDashboard } from "react-icons/md";

interface ISidebar {
  isOpen: boolean;
  setIsOpen: EffectCallback;
}

const Sidebar: React.FC<ISidebar> = ({ isOpen, setIsOpen }): JSX.Element => {
  const { state, dispatch } = useAuth();
  const handleLogoutClick = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <main
      className={
        " top-14 fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out z-40 " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "w-44 h-[500px] left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : "")
        }
      >
        <article className="relative pb-10 flex flex-col h-full">
          <div className="w-40 ml-2 mt-2 py-2 rounded-lg flex gap-1 items-center bg-slate-100">
            <img
              src={state?.user?.avatar}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="ml-2 text-sm">{state?.user?.email}</span>
          </div>
          <div className="px-2 mt-4 inset-0 flex items-center">
            <div className="w-full border-b border-gray-400"></div>
          </div>

          <div className="flex py-2">
            <ul className="py-2 px-2 space-y-2">
              <li>
                <Link to="/home">
                  <LinkItem icon={IoIosHome} text="Home" />
                </Link>
              </li>
              <li>
                <Link to="/board">
                  <LinkItem icon={MdSpaceDashboard} text="Board" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto border-t border-gray-400 flex w-40 py-2 ml-2">
            <a
              className="w-full cursor-pointer hover:border-r-2 hover:border-red-400 rounded-md h-8 w-40 px-2 flex items-center justify-start hover:bg-slate-100 gap-2"
              onClick={() => handleLogoutClick()}
            >
              <IoIosLogOut className="text-gray-600" />
              <span className="text-sm text-gray-700 font-semibold">
                Logout
              </span>
            </a>
          </div>
        </article>
      </section>
      <section
        className="w-[800px] h-[600px] cursor-pointer"
        onClick={setIsOpen}
      />
    </main>
  );
};

export default Sidebar;
