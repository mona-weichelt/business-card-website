import { render, screen } from "@testing-library/react";
import Blog from "./BlogEntry";

describe("blog entry", () => {
  it("renders variant 1", () => {
    render(<Blog.Entry variant={1} />);
    const component = screen.getByRole("heading", { level: 1 });
    expect(component).toBeInTheDocument();
  });

  it("displays fetched data", () => {
    const spy = jest.spyOn(Blog, "fetchData");
    render(<Blog.Entry variant={2} />);
    expect(spy).toHaveBeenCalled();
    expect(screen.getAllByRole("paragraph").length).toBe(3);
    spy.mockRestore();
  });
});
