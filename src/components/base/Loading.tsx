import React from "react";

const Loading: React.FC = (): JSX.Element => {
  return (
    <div className="absolute left-[10%] bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-600 border-8 h-64 w-64"></div>
    </div>
  );
};

export default Loading;
