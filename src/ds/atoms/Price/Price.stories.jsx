import Price from "./Price.jsx";

export default {
  component: Price,
  argTypes: {
    currency: {
      options: ["USD", "EUR"],
      control: {
        type: "radio",
      },
    },
  },
};

export const Main = {
  args: { value: "12.99" },
};

export const WithDollar = {
  args: { ...Main.args, currency: "USD" },
};

export const WithUnsupportedCurrency = {
  args: { ...Main.args, currency: "NOPE" },
};
