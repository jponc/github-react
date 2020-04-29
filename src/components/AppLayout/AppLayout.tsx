import React from "react";
import { SearchAppBar } from "../SearchAppBar";

export const AppLayout: React.FC = ({ children }) => {
  const onSearchHandler = (newQuery: string) => {
    console.log(newQuery);
  };

  return (
    <div>
      <SearchAppBar onSearch={onSearchHandler} defaultValue={""} />
      {children}
    </div>
  );
};
