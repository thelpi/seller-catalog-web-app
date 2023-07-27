import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter.jsx";

const counter = (value) =>
  screen.getByRole("heading", { level: 4, name: `${value}` });
const button = (name) => screen.getByRole("button", { name });
const incButton = () => button("increment");
const decButton = () => button("decrement");

describe("Counter", () => {
  test("with default values, renders the counter at 0", () => {
    render(<Counter />);

    expect(counter(0)).toBeInTheDocument();
  });

  test("with default values, displays 2 buttons", () => {
    render(<Counter />);

    expect(decButton()).toBeInTheDocument();
    expect(incButton()).toBeInTheDocument();
  });

  test("with default values, when clicking on increment, increment the value", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(incButton());
    expect(counter(1)).toBeInTheDocument();
  });

  test("with default values, when clicking on decrement, decrement the value", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(decButton());
    expect(counter(-1)).toBeInTheDocument();
  });

  test("with specific init value, renders the counter at the specific value", () => {
    const initV = 10;

    render(<Counter initValue={initV} />);

    expect(counter(initV)).toBeInTheDocument();
  });

  test("with specific step value, displays 2 buttons with step value", () => {
    const step = 5;

    render(<Counter step={step} />);

    expect(decButton()).toBeInTheDocument();
    expect(incButton()).toBeInTheDocument();
  });

  test("with specific step value and init value, when clicking on increment, increment from the step value", async () => {
    const user = userEvent.setup();
    const initV = 10;
    const step = 5;
    const expectedCounter = initV + step;

    render(<Counter initValue={initV} step={step} />);

    await user.click(incButton());
    expect(counter(expectedCounter)).toBeInTheDocument();
  });

  test("with specific step value and init value, when clicking on decrement, decrement from the step value", async () => {
    const user = userEvent.setup();
    const initV = 10;
    const step = 5;
    const expectedCounter = initV - step;

    render(<Counter initValue={initV} step={step} />);

    await user.click(decButton());
    expect(counter(expectedCounter)).toBeInTheDocument();
  });
});
