import React, { forwardRef, useState } from "react";
import { IconType } from "../../types/iconType";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

interface Iinterface
  extends React.PropsWithoutRef<JSX.IntrinsicElements["select"]> {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options?: Record<"name", "value">[]; //  Fixed value for now.
  placeholder?: string;
  twind?: string;
  icon?: IconType;
  error?: boolean;
  infoLabel?: string;
  label?: string;
}

const Select = forwardRef<HTMLInputElement, Iinterface>(
  (
    { twind, placeholder, icon, error, label, infoLabel, onChange, ...props },
    ref
  ) => {
    const options = [
      { value: 0, name: "Select Priority..." },
      { value: 1, name: "Low" },
      { value: 2, name: "Medium" },
      { value: 3, name: "High" },
    ];

    return (
      <div className="flex-col">
        <select
          {...props}
          onChange={onChange}
          defaultValue={0}
          placeholder="Select Priority..."
          className="w-[334px] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {options.map((option, index) => (
            <option
              key={option.value}
              value={option.value}
              disabled={index === 0}
            >
              {option.name}
            </option>
          ))}
        </select>
        <span className={`${error ? "text-red-600" : ""} text-xs`}>
          {infoLabel}
        </span>
      </div>
    );
  }
);

export default Select;
