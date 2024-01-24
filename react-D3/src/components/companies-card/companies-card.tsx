import { useMemo } from "react";
import ChartPreview from "./chart-preview";

const calculatePercentageIncrease = (openingPrice: number, closingPrice: number) => {
  const difference = closingPrice - openingPrice;
  const percentageIncrease = (difference / openingPrice) * 100;
  return percentageIncrease.toFixed(2); // returns result with 2 decimal places
};

interface CompaniesCardProps {
  symbol: string;
  name: string;
  logo?: string;
}

const CompaniesCard = ({ symbol, name, logo }: CompaniesCardProps) => {
  const initialPrice = 20 + Math.random() * 500;
  const data = useMemo(() => {
    const tempData = [];
    for (let i = 0; i < 30; i++) {
      const x = i;
      const y = initialPrice + Math.random() * 20 - 10;
      tempData.push({ x, y });
    }
    return tempData;
  }, [initialPrice]);
  const changePercentage = useMemo(
    () => calculatePercentageIncrease(data[0].y, data[data.length - 1].y),
    [data]
  );

  return (
    <div className="bg-zinc-200 rounded-xl p-3 dark:bg-zinc-800 w-[200px] min-h-[200px] flex flex-col justify-between">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="p-1 w-[35px] mr-2 rounded-lg bg-slate-300 dark:bg-slate-200"
        >
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
        <p className="m-0 mt-1 font-medium text-lg">{name}</p>
      </div>
      <ChartPreview data={data} />

      <div className="flex justify-between items-end">
        <div>
          <p className="m-0 mt-1 font-medium text-xs">Current Value</p>
          <p className="m-0 font-medium text-2xl">
            {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
              data[data.length - 1].y
            )}
          </p>
        </div>
        <div className="text-right">
          <p className="m-0 text-xs font-bold">{symbol}</p>
          <p
            className={`m-0 text-xs font-bold ${
              Number(changePercentage) < 0 ? "text-red-500" : "text-green-400"
            }`}
          >
            {changePercentage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
