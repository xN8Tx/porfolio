import { cn } from "./";

describe("cn", () => {
  test("Returns a string foo bar", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });
  test("Returns a string foo bar baz", () => {
    expect(cn("foo", "bar", true && "baz")).toBe("foo bar baz");
  });
  test("Returns a string foo", () => {
    expect(cn("foo", false && "bar")).toBe("foo");
  });
  test("Returns a string from array", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar");
  });
});
