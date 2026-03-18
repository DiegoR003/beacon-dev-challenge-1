import { describe, expect, it } from "vitest";

/**
 * Example test — this exists to verify Vitest is configured correctly.
 * Replace this with your own tests as you build out the application.
 */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

describe("slugify", () => {
  it("converts text to a URL-friendly slug", () => {
    expect(slugify("Ibuprofen 400mg Tablets")).toBe("ibuprofen-400mg-tablets");
  });

  it("handles special characters", () => {
    expect(slugify("Vitamin C — 1000mg!")).toBe("vitamin-c-1000mg");
  });

  it("trims whitespace", () => {
    expect(slugify("  Omega-3  ")).toBe("omega-3");
  });
});
