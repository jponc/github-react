import React from "react";
import { AppLayout } from "../../components/AppLayout";
import { useRepository } from "../../context/RepositoryContext";
import { RepositoryCard } from "../../components/RepositoryCard";

export const ListScreen = () => {
  const { repositories } = useRepository();

  return (
    <AppLayout>
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </AppLayout>
  );
};
