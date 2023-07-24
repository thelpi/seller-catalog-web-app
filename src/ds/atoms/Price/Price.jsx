import { oneOf, number } from "prop-types";

const EuroCurrency = "EUR";

export default function Price({ value, currency = EuroCurrency }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency,
  }).format(value);
}

Price.propTypes = {
  price: number,
  currency: oneOf([EuroCurrency, "USD"]),
};
