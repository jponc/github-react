import React from "react";
import { RepositoryProvider } from "./RepositoryContext";

const AppProviders: React.FC = ({ children }) => {
  return <RepositoryProvider>{children}</RepositoryProvider>;
};

export { AppProviders };
