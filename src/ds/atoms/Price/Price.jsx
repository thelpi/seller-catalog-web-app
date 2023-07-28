import { Typography } from "@mui/material";
import { oneOf, number } from "prop-types";

const Defaultcurrency = "EUR";
const supportedCurrencies = [Defaultcurrency, "USD"];

export default function Price({ value, currency = Defaultcurrency }) {
  const actualCurrency = supportedCurrencies.includes(currency)
    ? currency
    : Defaultcurrency;

  const priceWithCurrency = new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency: actualCurrency,
  }).format(value);

  return <Typography component="span">{priceWithCurrency}</Typography>;
}

Price.propTypes = {
  value: number,
  currency: oneOf(supportedCurrencies),
};
