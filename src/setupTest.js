import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import { server } from "./mocks/server.js";

beforeAll(() => server.listen());

afterAll(() => server.close());

expect.extend(matchers);

afterEach(() => {
  cleanup();
  server.resetHandlers();
});
