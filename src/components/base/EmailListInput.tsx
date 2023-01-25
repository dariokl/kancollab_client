import React, { useState, forwardRef, useEffect, useMemo } from "react";
import { Merge, FieldError } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";

interface ITagInput {
  setValue: (value: string[]) => void;
  label?: string;
  error?: boolean;
  infoLabel?: string;
  errorsObject?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
  defaultValue?: string[];
}

const EmailListInput = forwardRef<HTMLInputElement, ITagInput>(
  (
    { label, error, infoLabel, setValue, defaultValue, errorsObject, ...props },
    ref
  ) => {
    const [tags, setTags] = useState<string[]>([]);

    const handleTags = (event: React.KeyboardEvent<HTMLInputElement>): void => {
      const target = event.target as HTMLInputElement;
      const key = event.key;
      if (event.key === "Enter" && target.value !== "") {
        setTags([...tags, target.value]);
        target.value = "";
      } else if (
        event.key === "Backspace" &&
        tags.length &&
        target.value === ""
      ) {
        const tagsCopy = [...tags];
        tagsCopy.pop();
        event.preventDefault();
        setTags(tagsCopy);
      }
    };

    const removeTags = (index: number): void => {
      setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
    };

    return (
      <div className="relative">
        <div className="flex flex-wrap overflow-hidden text-black border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
          {tags.map((tag, index) => (
            <div
              className="flex shadow-sm items-center px-1 py-1 ml-1 rounded-md whitespace-no-wrap bg-green-400/60"
              key={index}
            >
              <span className="text-xs px-1">{tag}</span>
              <IoIosCloseCircle
                className="ml-1 cursor-pointer"
                onClick={() => removeTags(index)}
              />
            </div>
          ))}
          <input
            className="w-[326px] ml-1 mt-2 border-none peer outline-none text-inherit "
            type="text"
            placeholder="Type email and press Enter."
            onKeyDown={(e) => handleTags(e)}
          />
        </div>
        <label className="absolute text-sm text-gray-400 peer-focus:text-blue-600 bg-white duration-300 transform -translate-y-4 scale-75 top-2 origin-[4]">
          Members
        </label>

        <div className="error">{error}</div>
      </div>
    );
  }
);

export default EmailListInput;
