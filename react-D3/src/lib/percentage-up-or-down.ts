const calculatePercentageIncrease = (openingPrice: number, closingPrice: number) => {
  const difference = closingPrice - openingPrice;
  const percentageIncrease = (difference / openingPrice) * 100;
  return percentageIncrease.toFixed(2); // returns result with 2 decimal places
};

export default calculatePercentageIncrease;
