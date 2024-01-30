import { ReactNode } from "react";
import clsx from "clsx";

interface PillProps {
  children: ReactNode;
  active?: boolean;
}
const Pill = ({ children, active = false }: PillProps) => {
  return (
    <button
      className={clsx(
        "inline-block rounded-full px-3 py-1.5 text-s font-bold leading-normal shadow-md transition duration-150 ease-in-out border-solid border bg-transparent mr-2 cursor-pointer border-zinc-800 hover:dark:bg-zinc-800 hover:bg-zinc-200",
        active && "bg-zinc-200 dark:bg-zinc-800"
      )}
    >
      {children}
    </button>
  );
};

export default Pill;
