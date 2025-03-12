import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Page", () => {
  it("renders a heading 2", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeVisible();
  });

  it("renders a heading 3", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeVisible();
  });

  it("renders a copyright notice", () => {
    render(<Home />);
    expect(
      screen.getByText("Copyright © 2025 Mona Weichelt")
    ).toBeInTheDocument();
  });
});
