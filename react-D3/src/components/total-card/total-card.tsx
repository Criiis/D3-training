import { useMemo } from "react";
import { HoldingsArray } from "../../lib/update-holding-stocks";
import toCurrency from "../../lib/to-currency";
import clsx from "clsx";

interface TotalCardProps {
  holdings: HoldingsArray;
}
const TotalCard = ({ holdings }: TotalCardProps) => {
  const { invested, totalReturn, totalReturnPercentage } = useMemo(() => {
    let invested = 0;
    let totalReturn = 0;

    for (const key in holdings) {
      const holding = holdings[key];
      for (const item of holding) {
        invested += item.hold * item.price;
        totalReturn += item.hold * item.price * (Number(item.percentage) / 100);
      }
    }

    const totalReturnPercentage = ((totalReturn / invested) * 100).toFixed(2);

    return { invested, totalReturn, totalReturnPercentage };
  }, [holdings]);

  return (
    <div className="bg-gray-100 rounded-xl p-3 dark:bg-zinc-900 w-full md:max-w-[350px] min-h-[200px] flex flex-col justify-between">
      <p className="m-0 mt-1 font-medium text-s mb-5">Total Holding</p>

      <div>
        <p className="m-0 font-bold text-3xl">{toCurrency(invested)}</p>
        <p className="m-0 mt-1 font-medium text-xs">
          Total Return:
          <span
            className={clsx("text-base font-bold ml-2", {
              "text-red-500": totalReturn < 0,
              "text-green-400": totalReturn >= 0,
            })}
          >
            {totalReturnPercentage}% ({toCurrency(totalReturn)})
          </span>
        </p>
      </div>
    </div>
  );
};

export default TotalCard;
