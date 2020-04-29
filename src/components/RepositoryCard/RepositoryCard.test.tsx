import React from "react";
import { render } from "@testing-library/react";
import { Repository } from "../../common/types";
import { RepositoryCard } from "./RepositoryCard";

it("renders information about repository", async () => {
  const repository: Repository = {
    id: "123",
    name: "github-search",
    full_name: "jponc/github-search",
    owner: {
      id: "1",
      avatar_url: "https://my-avatar.com/example.jpg",
      login: "jponc"
    },
    description: "Hello there",
    stargazers_count: 100,
    watchers_count: 300
  }
  const { getByText } = render(
    <RepositoryCard repository={repository} />
  );

  expect(getByText("jponc/github-search")).toBeVisible();
  expect(getByText("Hello there")).toBeVisible();
  expect(getByText("123")).toBeVisible();
  expect(getByText("100")).toBeVisible();
  expect(getByText("300")).toBeVisible();
});
