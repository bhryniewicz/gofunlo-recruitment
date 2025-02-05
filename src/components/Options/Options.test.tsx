import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Options } from "./Options";

import { cleanup } from "@testing-library/react";

beforeEach(() => {
  cleanup();
});

const mockSetIsRecommendations = vi.fn();

describe("Options Component", () => {
  it("Options component renders correctly", () => {
    const { getByText } = render(
      <Options setIsRecommendations={mockSetIsRecommendations} />
    );

    const myAccount = getByText("Moje konto");
    const myData = getByText("Moje dane");
    const reservations = getByText("Rezerwacje");
    const dedicated = getByText("Dedykowane oferty");
    const logOut = getByText("Wyloguj się");

    expect(myData).toBeTruthy();
    expect(myAccount).toBeTruthy();
    expect(reservations).toBeTruthy();
    expect(dedicated).toBeTruthy();
    expect(logOut).toBeTruthy();
  });

  it("calls setIsRecommendations when 'Dedykowane oferty' is clicked", () => {
    const { getByText } = render(
      <Options setIsRecommendations={mockSetIsRecommendations} />
    );

    const offerOption = getByText("Dedykowane oferty");
    fireEvent.click(offerOption);

    expect(mockSetIsRecommendations).toHaveBeenCalledTimes(1);
    expect(mockSetIsRecommendations).toHaveBeenCalledWith(true);
  });
});
