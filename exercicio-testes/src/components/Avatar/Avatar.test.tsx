import { render, screen } from "@testing-library/react";
import Avatar from ".";

test("renders message", () => {
  render(<Avatar />);
  const avatarElement = screen.getByTestId("myAvatar");
  expect(avatarElement.firstElementChild).toHaveProperty(
    "src",
    "http://localhost/perfil.jpg"
  );
});
