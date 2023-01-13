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

const regexExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

const EmailListInput = forwardRef<HTMLInputElement, ITagInput>(
  (
    { label, error, infoLabel, setValue, defaultValue, errorsObject, ...props },
    ref
  ) => {
    const [tags, setTags] = useState<string[]>(defaultValue ?? []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const target = e.target as HTMLInputElement;
        setTags((prev) => [...prev, target.value]);
        target.blur();
      }
    };

    useEffect(() => {
      setValue(tags);
    }, [tags]);

    const errors = useMemo(() => {
      if (errorsObject && errorsObject.length) {
        // @ts-ignore
        const obj = errorsObject.map((error, index) => (
          <div className="flex-col" key={index}>
            <p className="mt-1">{error?.message}</p>
          </div>
        ));
        return obj.length > 3 ? "Invalid emails provided." : obj;
      } else {
        return errorsObject?.message;
      }
    }, [errorsObject]);

    return (
      <div className="flex-col">
        <div className="relative flex flex-wrap-reverse justify-start items-center text-inherit border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:ring-blue-500 focus-within:border-blue-500 ">
          {tags.map((tag, idx) => (
            <div
              className="px-2 py-2 mt-2 ml-2 bg-green-400/70 rounded-md h-6 w-fit flex items-center mb-2"
              key={idx}
            >
              <span className="text-xs flex items-center">
                <p>{tag.length > 20 ? tag.slice(0, 19) + "..." : tag}</p>
                <IoIosCloseCircle
                  size={16}
                  className="ml-1 text-slate-800/90 cursor-pointer"
                  onClick={() =>
                    setTags((prev) => prev.filter((item) => item != tag))
                  }
                />
              </span>
            </div>
          ))}

          <div>
            <input
              {...props}
              ref={ref}
              className="peer placeholder-transparent mt-2 ml-2 outline-none border-none h-12 text-white focus:text-inherit"
              placeholder="Add Project Members"
              onKeyDown={(e) => {
                handleKeyDown(e);
              }}
              type="text"
              onBlur={(e) => (e.target.value = `...`)}
              onFocus={(e) => (e.target.value = "")}
            />
            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              {label}
            </label>
          </div>
        </div>
        <span className={`${error ? "text-red-800/90" : ""} text-xs mt-2`}>
          {infoLabel}
          {errors}
        </span>
      </div>
    );
  }
);

export default EmailListInput;
