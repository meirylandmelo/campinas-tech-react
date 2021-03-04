import { render, screen } from "@testing-library/react";
import Lista from ".";

test("renders contain item", () => {
  render(<Lista />);
  const listElement = screen.getByTestId("list");
  expect(listElement).toContainHTML("<li>Primeiro item</li>");
});
