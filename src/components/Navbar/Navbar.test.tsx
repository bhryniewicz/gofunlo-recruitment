import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Navbar } from "@/components/Navbar";
import { expect, describe, it, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";

beforeEach(() => {
  cleanup();
});

describe("Navbar Component", () => {
  it("should navigate to the homepage when logo is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/bookings"]}>
        <Navbar />
      </MemoryRouter>
    );

    const logoLink = screen.getByAltText("funlo logo");
    fireEvent.click(logoLink);

    expect(window.location.pathname).toBe("/");
  });
});

describe("List inside Navbar", () => {
  it("should render a list with 5 items", () => {
    render(<Navbar />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(5);
  });
});
