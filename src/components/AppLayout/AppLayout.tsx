import React, { useEffect, useState } from "react";
import { SearchAppBar } from "../SearchAppBar";
import { useHistory, useLocation } from "react-router";
import { Container } from "@material-ui/core";
import { useQuery } from "../../hooks/useQuery";
import "./app-layout.scss";

export const AppLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const { query } = useQuery(useLocation());

  const onSearchHandler = (newQuery: string) => {
    history.push(`/?q=${newQuery}`);
  };

  return (
    <div className="c-app-layout">
      <div className="c-app-layout__search-bar">
        <SearchAppBar onSearch={onSearchHandler} defaultValue={query} />
      </div>
      <div className="c-app-layout__content">
        <Container maxWidth="md">{children}</Container>
      </div>
    </div>
  );
};
