import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vite-plus/test";
import App from "./App.tsx";

// To remove.
describe("App", () => {
  it("renders the heading", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "Get started" })).toBeInTheDocument();
  });

  it("increments the counter when the button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole("button", { name: "Count is 0" });
    await user.click(button);
    await user.click(button);

    expect(button).toHaveTextContent("Count is 2");
  });
});
