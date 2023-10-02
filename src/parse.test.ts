import { expect, test } from "vitest";

import { float, string, whitespace } from "parjs";
import { between, manySepBy } from "parjs/combinators";

const sum = (a: number, b: number) => a + b;

test("adds 1 + 2 to equal 3", () => {
  const tupleElement = float();

  //   const paddedElement = tupleElement.pipe(between(whitespace()));

  //   const separated = paddedElement.pipe(manySepBy(","));

  //   const surrounded = separated.pipe(between("(", ")"));
  expect(sum(1, 2)).toBe(3);
});
