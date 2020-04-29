import React, { useState, useContext, createContext } from "react";
import { Repository } from "../common/types";

type RepositoryContextType = {
  repositories: Repository[];
  addRepositories: (additionalRepos: Repository[]) => void;
};

const RepositoryContext = createContext<RepositoryContextType>({
  repositories: [],
  addRepositories: () => {},
});

const RepositoryProvider: React.FC = (props) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const addRepositories = (additionalRepos: Repository[]) => {
    const newRepositories = { ...repositories, additionalRepos };
    setRepositories(newRepositories)
  };

  const contextValue = {
    repositories,
    addRepositories
  };

  return (
    <RepositoryContext.Provider value={contextValue} {...props} />
  );
};

const useRepository = () => useContext(RepositoryContext);
export { RepositoryProvider, useRepository };
