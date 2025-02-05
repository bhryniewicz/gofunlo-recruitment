import { testApiHandler } from "next-test-api-route-handler";
import { describe, expect, it } from "vitest";
import products from "@/data/response_products.json";
import { GET } from "./route";

describe("Producys API route", () => {
  it("get producysData properly", async () => {
    await testApiHandler({
      appHandler: { GET },
      async test({ fetch }) {
        const res = await fetch({ method: "GET" });
        await expect(res.json()).resolves.toStrictEqual(products);
        expect(res.status).toBe(200);
      },
    });
  });
});
