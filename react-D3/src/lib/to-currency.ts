const toCurrency = (value: number): string =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);

export default toCurrency;
