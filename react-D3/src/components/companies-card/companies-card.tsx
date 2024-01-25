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
  const data = useMemo(() => {
    const initialPrice = 20 + Math.random() * 500;
    const tempData = [];
    for (let i = 0; i < 30; i++) {
      const x = i;
      const y = initialPrice + Math.random() * 20 - 10;
      tempData.push({ x, y });
    }
    return tempData;
  }, []);
  const changePercentage = useMemo(
    () => calculatePercentageIncrease(data[0].y, data[data.length - 1].y),
    [data]
  );

  return (
    <div className="bg-zinc-200 rounded-xl p-3 dark:bg-zinc-800 w-[200px] min-h-[200px] flex flex-col justify-between">
      <div className="flex items-center">
        <div className="w-[35px] h-[35px] mr-2 rounded-lg bg-slate-300 dark:bg-slate-200">
          <img className="p-1 w-[35px] h-[35px] object-contain" src={logo} />
        </div>
        <p className="m-0 mt-1 font-medium text-lg">{name}</p>
      </div>
      <ChartPreview data={data} />

      <div className="flex justify-between items-end">
        <div>
          <p className="m-0 mt-1 font-medium text-xs">{symbol}</p>
          <p className="m-0 font-medium text-2xl leading-6">
            {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
              data[data.length - 1].y
            )}
          </p>
        </div>
        <div className="text-right">
          <p
            className={`m-0 text-xs font-bold ${
              Number(changePercentage) < 0 ? "text-red-500" : "text-green-400"
            }`}
          >
            {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
              data[data.length - 1].y - data[0].y
            )}
            <br />({changePercentage}%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
