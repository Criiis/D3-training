import { ReactNode } from "react";
import Button from "../button";
import clsx from "clsx";

interface HoldingCardProps {
  children: ReactNode;
  title: string;
  actionText: string;
  className?: string;
}

const HoldingCard = ({ children, title, actionText, className }: HoldingCardProps) => {
  return (
    <div
      className={clsx(
        "bg-gray-100 rounded-xl p-3 dark:bg-zinc-900 w-full flex flex-col justify-between bg-left-bottom bg-no-repeat",
        className && className
      )}
    >
      <h2 className="mt-0 mb-1">{title}</h2>
      {children}
      <Button className="mb-2" fullWidth>
        {actionText}
      </Button>
    </div>
  );
};

export default HoldingCard;
