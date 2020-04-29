import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchAppBar } from "./SearchAppBar";

it("renders title", async () => {
  const { getByText } = render(
    <SearchAppBar defaultValue={""} onSearch={jest.fn()} />
  );

  expect(getByText("Github Search")).toBeInTheDocument();
});

it("triggers onSearch when enter is pressed", async () => {
  const mockOnSearch = jest.fn();

  render(<SearchAppBar defaultValue={""} onSearch={mockOnSearch} />);

  const searchInput = screen.getByPlaceholderText("Search...");

  fireEvent.change(searchInput, { target: { value: "julian" } });
  fireEvent.keyDown(searchInput, { keyCode: 13})

  expect(mockOnSearch).toHaveBeenCalledWith("julian");
});
