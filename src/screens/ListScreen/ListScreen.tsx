import React, { useEffect, useState } from "react";
import { AppLayout } from "../../components/AppLayout";
import { useRepository } from "../../context/RepositoryContext";
import { useQuery } from "../../hooks/useQuery";
import { RepositoryCard } from "../../components/RepositoryCard";
import { useLocation } from "react-router";
import { fetchRepositories } from "../../actions/github";
import { LinearProgress } from "@material-ui/core";

export const ListScreen = () => {
  const { repositories, setRepositories } = useRepository();
  const { query } = useQuery(useLocation());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      console.log(`Fetching: ${query}`);
      const repos = await fetchRepositories(query);
      setRepositories(repos);
      setIsLoading(false);
    })();
  }, [setRepositories, query]);

  return (
    <AppLayout>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <div>
          {repositories.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}
        </div>
      )}
    </AppLayout>
  );
};
