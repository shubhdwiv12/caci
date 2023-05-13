import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("Renders First Load", () => {
  render(<Home />);
  const pElement = screen.getByText(/Click to Get Ships....../i);
  expect(pElement).toBeInTheDocument();
});
