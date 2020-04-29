import React from "react";
import { Repository } from "../../common/types";

type RepositoryCardProps = {
  repository: Repository
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return <div>{repository.id}</div>
}
