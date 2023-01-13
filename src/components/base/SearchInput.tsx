import React from "react";
import Input from "./Input";

const SearchInput: React.FC<{ twind: string }> = ({ twind }): JSX.Element => {
  const onHandleSearch = () => {
    console.log("handle");
  };
  return (
    <div className="flex-col">
      <Input type="text" />
      <ul></ul>
    </div>
  );
};

export default SearchInput;
