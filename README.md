To recreate:

- `npm` or `yarn` to install packages
- `yarn vitest` to see test hang forever

The line causing the problem is line 13 in parse.test.ts. Comment it out and restart vitest to see the test pass.
