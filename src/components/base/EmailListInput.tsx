import React, { useState, forwardRef, useEffect, useMemo } from "react";
import { Merge, FieldError } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";

interface ITagInput {
  setValue: (value: string[]) => void;
  label: string;
  error?: boolean;
}

const EmailListInput = forwardRef<HTMLInputElement, ITagInput>(
  ({ error, setValue, label, ...props }, ref) => {
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

    const handleEmails = (
      event: React.KeyboardEvent<HTMLInputElement>
    ): void => {
      const target = event.target as HTMLInputElement;
      const key = event.key;
      if (event.key === "Enter" && target.value !== "") {
        event.preventDefault();
        if (!emails.includes(target.value)) {
          setEmails([...emails, target.value]);
          setValue([...emails, target.value]);
        }
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
        setValue(emailsCopy);
      }
    };

    const removeEmails = (index: number): void => {
      const emailsList = [
        ...emails.filter((email) => emails.indexOf(email) !== index),
      ];
      setEmails(emailsList);
      setValue(emailsList);
    };

    return (
      <div className="relative">
        <div className="flex flex-wrap overflow-hidden text-black border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:outline-none">
          {emails.map((email, index) => (
            <div
              className={`flex shadow-sm items-center px-1 py-1 ml-1 mt-1 rounded-md whitespace-no-wrap bg-green-400/60 ${
                invalidEmails.includes(index)
                  ? "border-[1px] border-red-400 shadow-md"
                  : ""
              }`}
              key={index}
            >
              <span className="text-xs px-1 break-all">{email}</span>
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
            onKeyDown={(e) => handleEmails(e)}
          />
          <label className="absolute bg-white text-gray-400 bg-white -translate-y-4 -translate-x-4 px-2 top-1 peer-focus:text-blue-600 scale-75 ">
            {label}
          </label>
        </div>
        <div className="flex-col word-break mt-2">
          {emails.map((email, index) =>
            invalidEmails.includes(index) ? (
              <div key={index} className="ml-1 text-xs text-red-600 mb-1">
                {email.length > 10 ? `${email.slice(0, 10)}...` : email} is not
                valid email.
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  }
);

export default EmailListInput;
