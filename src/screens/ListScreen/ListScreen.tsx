import React from "react";
import { AppLayout } from "../../components/AppLayout";
import { useRepository } from "../../context/RepositoryContext";
import { Typography } from "@material-ui/core";
import { RepositoryCard } from "../../components/RepositoryCard";

export const ListScreen = () => {
  const { repositories } = useRepository();

  return (
    <AppLayout>
      <Typography variant="h4" gutterBottom>
        Repositories
      </Typography>
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </AppLayout>
  );
};
