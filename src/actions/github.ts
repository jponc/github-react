import { Repository } from "../common/types";

export const fetchRepositories = async (
  query: string
): Promise<Repository[]> => {
  const url = `https://api.github.com/search/repositories?q=is:public%20${query}%20in:name&sort=stars&order=desc`;

  const res = await fetch(url);
  const body = await res.json();

  return body.items;
};
