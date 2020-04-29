import React from "react";
import { SearchAppBar } from "../SearchAppBar"

export const AppLayout: React.FC = ({ children }) => {
  const searchOnChangeHandler = (newQuery: string) => {
    console.log(newQuery)
  }

  return (
    <div>
      <SearchAppBar onChange={searchOnChangeHandler} defaultValue={""}/>
      {children}
    </div>
  )
}
