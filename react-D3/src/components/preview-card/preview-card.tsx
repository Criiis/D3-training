import CompanyLogo from "../company-logo";
import clsx from "clsx";
import { Holding } from "../../lib/update-holding-stocks";
import toCurrency from "../../lib/to-currency";

interface PreviewCardProps {
  stock: Holding;
}

const PreviewCard = ({ stock }: PreviewCardProps) => {
  return (
    <div className="py-4 border-solid border-0 border-b border-zinc-200 dark:border-zinc-700 flex items-center last-of-type:border-none">
      <CompanyLogo logo={stock.logo} name={stock.name} />
      <div className="flex justify-between w-[calc(100%_-40px)] items-center pl-2">
        <div>
          <p className="m-0 font-medium text-base leading-5">
            {stock.name}
            <br />
            <span className="m-0 mt-2 font-medium text-zinc-400 text-xs">
              {stock.hold}
              {stock.symbol === "BTC" || stock.symbol === "ETH" ? " Coins" : " Shares"}
            </span>
          </p>
        </div>
        <p className="m-0 font-medium text-base leading-5 text-right">
          {toCurrency(stock.hold * stock.price)}
          <br />
          <span
            className={clsx("m-0 text-xs font-bold", {
              "text-red-500": Number(stock.percentage) < 0,
              "text-green-400": Number(stock.percentage) >= 0,
            })}
          >
            {stock.percentage}% (
            {toCurrency(
              stock.hold * stock.price + stock.hold * stock.price * (Number(stock.percentage) / 100)
            )}
            )
          </span>
        </p>
      </div>
    </div>
  );
};

export default PreviewCard;
