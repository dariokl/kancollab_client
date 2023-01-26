import React, { forwardRef } from "react";

interface ITextArea {
  label?: string;
  error?: boolean;
  infoLabel?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ label, error, infoLabel, ...props }, ref) => {
    return (
      <div className="flex flex-col justify-center w-full relative gap-2">
        <textarea
          {...props}
          ref={ref}
          rows={2}
          className="overflow-hidden peer placeholder-transparent max-h-32 w-full p-2.5 text-xs border border-gray-300 rounded-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
        />
        <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
          {label}
        </label>
        <span className={`${error ? "text-red-600" : ""} text-xs`}>
          {infoLabel}
        </span>
      </div>
    );
  }
);

export default TextArea;
