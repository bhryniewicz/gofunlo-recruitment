import { cleanup, render, screen, within } from "@testing-library/react";
import { TripParticipantCard } from "@/components/TripParticipantCard";
import { expect, describe, it, beforeEach } from "vitest";
import { Participant } from "@/types/bookings";

beforeEach(() => {
  cleanup();
});

const participants = {
  withCity: {
    id: "kid_35pc44",
    first_name: "Janek",
    last_name: "Maly",
    birth_date: "2022-04-02",
    pesel: "81020202001",
    city: "Pokarp",
    province: "podkarpackie",
    street: "Ulica",
    house_number: "30",
    postcode: "90-001",
  } as Participant,

  withoutCity: {
    id: "kid_78a1x4",
    first_name: "Janek",
    last_name: "Kowalski",
    birth_date: "2022-04-17T17:00:00.000Z",
    pesel: "01010103243",
    city: "",
    province: null,
    street: "",
    house_number: "",
    postcode: "",
  } as Participant,
};

describe("TripParticipantCard Component", () => {
  it("displays city and province correctly when available", () => {
    render(<TripParticipantCard participant={participants.withCity} />);
    expect(screen.getByText(/pokarp, podkarpackie/i)).toBeTruthy();
  });

  it("displays 'Brak informacji' when city and province are missing", () => {
    render(<TripParticipantCard participant={participants.withoutCity} />);

    const citySection = screen.getByText("Miasto:").closest("p");
    expect(within(citySection!).getByText("Brak informacji")).toBeTruthy();

    const streetSection = screen.getByText("Ulica:").closest("p");
    expect(within(streetSection!).getByText("Brak informacji")).toBeTruthy();
  });
});
