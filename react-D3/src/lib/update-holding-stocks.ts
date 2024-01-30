export type Holding = {
  symbol: string;
  name: string;
  logo: string;
  hold: number;
  price: number;
  percentage?: number;
};
export type HoldingsArray = {
  [key: string]: Holding[];
};

const addPercentage = () => Number((Math.random() * (10 - -15) + -15).toFixed(2));
const updateHoldingStocks = (holdings: HoldingsArray) => {
  for (const key in holdings) {
    const holding = holdings[key];
    for (const item of holding) {
      item.percentage = addPercentage();
    }
  }
  return holdings;
};
export default updateHoldingStocks;
