import { Repository } from "../common/types";
import { config } from "../config";

export const fetchRepositories = async (
  query: string
): Promise<Repository[]> => {
  const url = `${config.githubApiUrl}/search/repositories?q=is:public%20${query}%20in:name&sort=stars&order=desc`;

  const res = await fetch(url);
  const body = await res.json();

  return body.items;
};
