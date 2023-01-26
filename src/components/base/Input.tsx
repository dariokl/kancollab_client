import React, { forwardRef, useState } from "react";
import { IconType } from "../../types/iconType";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

interface Iinterface
  extends React.PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  type: string;
  placeholder?: string;
  twind?: string;
  icon?: IconType;
  error?: boolean;
  label?: string;
  infoLabel?: string;
}

const Input = forwardRef<HTMLInputElement, Iinterface>(
  (
    { twind, placeholder, icon, type, error, infoLabel, label, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const eye = () => {
      return !showPassword ? (
        <IoIosEye onClick={() => setShowPassword(!showPassword)} />
      ) : (
        <IoIosEyeOff onClick={() => setShowPassword(!showPassword)} />
      );
    };

    return (
      <div className="flex-col">
        <div className="relative flex w-full flex-wrap items-stretch content-center">
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center pl-3 py-[16px]">
            {icon && React.createElement(icon)}
          </span>
          <div className="flex">
            <input
              autoComplete="off"
              ref={ref}
              type={type && !showPassword ? type : "text"}
              className={`${twind} peer placeholder-transparent mt-1 text-inherit border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block p-2.5 `}
              placeholder={placeholder}
              {...props}
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              {label}
            </label>
          </div>

          <span className="h-full leading-snug ml-[90%] font-normal absolute text-center text-slate-700 absolute bg-transparent rounded text-base items-center justify-center py-[16px]">
            {type === "password" && eye()}
          </span>
        </div>
        <span className={`${error ? "text-red-600" : ""} text-xs`}>
          {infoLabel}
        </span>
      </div>
    );
  }
);

export default Input;
