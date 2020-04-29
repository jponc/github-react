import React, { useEffect, useState } from "react";
import { SearchAppBar } from "../SearchAppBar";
import { useHistory, useLocation } from "react-router";
import { fetchRepositories } from "../../actions/github";
import { useRepository } from "../../context/RepositoryContext";
import {Container} from "@material-ui/core";
import "./app-layout.scss";

export const AppLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  const getUrlQuery = (): string => {
    const params = new URLSearchParams(location.search);
    return params.get("q") || "";
  };

  const [searchValue, setSearchValue] = useState<string>(getUrlQuery());
  const { setRepositories } = useRepository();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchValue(params.get("q") || "");
  }, [location.search]);

  useEffect(() => {
    (async () => {
      const repos = await fetchRepositories(searchValue);
      setRepositories(repos);
      console.log(`Fetching: ${searchValue}`);
    })();
  }, [setRepositories, searchValue]);

  const onSearchHandler = (newQuery: string) => {
    history.push(`${location.pathname}?q=${newQuery}`);
  };

  return (
    <div className="c-app-layout">
      <div className="c-app-layout__search-bar">
        <SearchAppBar onSearch={onSearchHandler} defaultValue={searchValue} />
      </div>
      <div className="c-app-layout__content">
      <Container>{children}</Container></div>
    </div>
  );
};
