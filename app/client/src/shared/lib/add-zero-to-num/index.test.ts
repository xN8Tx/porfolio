import { addZeroToNum } from "./";

describe("addZeroToNum", () => {
  test("Add zero to number lower than 10", () => {
    expect(addZeroToNum(5)).toBe("05");
    expect(addZeroToNum(9)).toBe("09");
  });

  test("Does not add zero to number greater than or equal to 10", () => {
    expect(addZeroToNum(10)).toBe("10");
    expect(addZeroToNum(15)).toBe("15");
    expect(addZeroToNum(100)).toBe("100");
  });
});
