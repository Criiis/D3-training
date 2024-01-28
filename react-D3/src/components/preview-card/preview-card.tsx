import { useMemo } from "react";

const PreviewCard = ({ stock }: any) => {
  const movePercentage = useMemo(() => (Math.random() * (10 - -15) + -15).toFixed(2), []);

  return (
    <div className="py-4 border-solid border-0 border-b border-zinc-700 flex items-center last-of-type:border-none">
      <div className="w-[40px] h-[40px] rounded-lg bg-zinc-200" />
      <div className="flex justify-between w-[calc(100%_-40px)] items-end pl-2">
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
          {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
            stock.hold * stock.price
          )}
          <br />
          <span
            className={`m-0 text-xs font-bold ${
              Number(movePercentage) < 0 ? "text-red-500" : "text-green-400"
            }`}
          >
            {movePercentage}% /{" "}
            {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
              stock.hold * stock.price * (Number(movePercentage) / 100)
              // (stock.hold * stock.price) / movePercentage
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PreviewCard;