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
    const [emails, setEmails] = useState<string[]>([]);

    const invalidEmails = useMemo(() => {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

      const invalidIndexes: number[] = [];

      for (let i = 0; i < emails.length; i++) {
        if (!emailRegex.test(emails[i])) {
          invalidIndexes.push(i);
        }
      }

      return invalidIndexes;
    }, [emails]);

    const handleemails = (
      event: React.KeyboardEvent<HTMLInputElement>
    ): void => {
      const target = event.target as HTMLInputElement;
      const key = event.key;
      if (event.key === "Enter" && target.value !== "") {
        setEmails([...emails, target.value]);
        target.value = "";
      } else if (
        event.key === "Backspace" &&
        emails.length &&
        target.value === ""
      ) {
        const emailsCopy = [...emails];
        emailsCopy.pop();
        event.preventDefault();
        setEmails(emailsCopy);
      }
    };

    console.log(invalidEmails);

    const removeEmails = (index: number): void => {
      setEmails([...emails.filter((tag) => emails.indexOf(tag) !== index)]);
    };

    return (
      <div className="relative">
        <div className="flex flex-wrap overflow-hidden text-black border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
          {emails.map((tag, index) => (
            <div
              className={`flex shadow-sm items-center px-1 py-1 ml-1 mt-1 rounded-md whitespace-no-wrap bg-green-400/60 ${
                invalidEmails.includes(index)
                  ? "border-[1px] border-red-400 shadow-md"
                  : ""
              }`}
              key={index}
            >
              <span className="text-xs px-1">{tag}</span>
              <IoIosCloseCircle
                className="ml-1 cursor-pointer"
                onClick={() => removeEmails(index)}
              />
            </div>
          ))}
          <input
            className="w-[326px] peer ml-1 mt-2 border-none outline-none text-inherit "
            type="text"
            placeholder="Type email and press Enter."
            onKeyDown={(e) => handleemails(e)}
          />
          <label className="absolute bg-white text-gray-400 bg-white -translate-y-4 -translate-x-4 px-2 top-1 peer-focus:text-blue-600 scale-75 ">
            Members
          </label>
        </div>
        <div className="flex-col word-break mt-2">
          {emails.map((email, index) =>
            invalidEmails.includes(index) ? (
              <div className="ml-1 text-xs text-red-600 mb-1">
                {email} is not valid email.
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  }
);

export default EmailListInput;
