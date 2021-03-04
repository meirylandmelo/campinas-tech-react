import { render, screen } from "@testing-library/react";
import Alert from "./index";

test("renders message", () => {
  render(<Alert message="Você deve aceitar os termos" show={true} />);
  const alertElement = screen.getByTestId("myAlert");
  expect(alertElement).toHaveTextContent("Você deve aceitar os termos");
});
