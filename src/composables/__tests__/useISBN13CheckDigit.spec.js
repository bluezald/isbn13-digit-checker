import { describe, it, expect } from "vitest";

import useISBN13CheckDigit from "../useISBN13CheckDigit";

describe("useISBN13CheckDigit", () => {
  it("should be able to get the correct 13th digit from a code", () => {
    const given = 978014300723;
    const { getCompleteISBN13Code } = useISBN13CheckDigit();
    const result = getCompleteISBN13Code(given);
    expect(result).toEqual(`${given}4`);
  });
});
