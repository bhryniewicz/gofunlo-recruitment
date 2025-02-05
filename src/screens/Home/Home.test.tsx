import { render, fireEvent, screen } from "@testing-library/react";
import { Home } from "@/screens/Home"; // Make sure to import the Home component
import trips from "@/data/response_products.json";
import { describe, expect, it } from "vitest";

describe("Home Screen", () => {
  it("renders the dedicated offers section when 'Dedykowane oferty' is clicked", () => {
    const { getByText } = render(<Home trips={trips.data} />);

    const offerOption = getByText("Dedykowane oferty");
    fireEvent.click(offerOption);

    const dedicatedOffersDiv = screen.getByTestId("dedicated-offers");
    expect(dedicatedOffersDiv).toBeTruthy();
  });
});
