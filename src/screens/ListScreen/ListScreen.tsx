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
      try {
        const repos = await fetchRepositories(query);
        setRepositories(repos);
      } catch (e) {
        alert(`Error: ${e.message}`)
      } finally {
        setIsLoading(false);
      }
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
