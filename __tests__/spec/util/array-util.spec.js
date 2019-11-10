import { fill } from "../../../src/util/array-util";

describe("Array Utils", () => {
  describe("fill", () => {
    it("should fill array using the filler function", () => {
      const result = fill(new Array(3), Object);
      expect(result).toHaveLength(3);
      expect(result[0] === result[1]).toBeFalsy();
    });
  });
});
