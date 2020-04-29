import React, { useState, useContext, createContext } from "react";
import { Repository } from "../common/types";

type RepositoryContextType = {
  repositories: Repository[];
  setRepositories: (additionalRepos: Repository[]) => void;
};

const RepositoryContext = createContext<RepositoryContextType>({
  repositories: [],
  setRepositories: () => {},
});

const RepositoryProvider: React.FC = (props) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const contextValue = {
    repositories,
    setRepositories
  };

  return (
    <RepositoryContext.Provider value={contextValue} {...props} />
  );
};

const useRepository = () => useContext(RepositoryContext);
export { RepositoryProvider, useRepository };
