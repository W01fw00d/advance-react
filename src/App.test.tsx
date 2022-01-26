import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Some React Concepts examples/i);
  expect(linkElement).toBeInTheDocument();
});
