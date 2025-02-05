import { testApiHandler } from "next-test-api-route-handler";
import { describe, expect, it } from "vitest";
import bookings from "@/data/response_bookings.json";
import { GET } from "./route";

describe("Producys API route", () => {
  it("get bookingData properly", async () => {
    await testApiHandler({
      appHandler: { GET },
      async test({ fetch }) {
        const res = await fetch({ method: "GET" });
        await expect(res.json()).resolves.toStrictEqual(bookings);
        expect(res.status).toBe(200);
      },
    });
  });
});
