import { useMemo } from "react";
import ChartPreview from "./chart-preview";
import CompanyLogo from "../company-logo";
import calculatePercentageIncrease from "../../lib/percentage-up-or-down";
import toCurrency from "../../lib/to-currency";
import clsx from "clsx";

interface CompaniesCardProps {
  symbol: string;
  name: string;
  logo: string;
}

const CompaniesCard = ({ symbol, name, logo }: CompaniesCardProps) => {
  const data = useMemo(() => {
    const initialPrice = 20 + Math.random() * 500;
    const tempData = [];
    for (let i = 0; i < 30; i++) {
      const value: number = tempData[i - 1]?.y || initialPrice;
      const x = i;
      const y = value + Math.random() * 4 - 2;
      tempData.push({ x, y });
    }
    return tempData;
  }, []);
  const changePercentage = useMemo(
    () => calculatePercentageIncrease(data[0].y, data[data.length - 1].y),
    [data]
  );

  return (
    <div className="bg-gray-100 rounded-xl p-3 dark:bg-zinc-900 w-[200px] min-h-[200px] flex flex-col justify-between">
      <div className="flex items-center">
        <CompanyLogo logo={logo} name={name} />
        <p className="m-0 mt-1 font-medium text-lg">{name}</p>
      </div>
      <ChartPreview data={data} symbol={symbol} />

      <div className="flex justify-between items-end">
        <div>
          <p className="m-0 mt-1 font-medium text-xs">{symbol}</p>
          <p className="m-0 font-medium text-2xl leading-6">
            {toCurrency(data[data.length - 1].y)}
          </p>
        </div>
        <div className="text-right">
          <p
            className={clsx("m-0 text-xs font-bold", {
              "text-red-500": Number(changePercentage) < 0,
              "text-green-400": Number(changePercentage) >= 0,
            })}
          >
            {toCurrency(data[data.length - 1].y - data[0].y)}
            <br />
            {changePercentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
