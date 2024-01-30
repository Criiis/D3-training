import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  isActive?: boolean;
}

const variantClasses = {
  primary:
    "bg-zinc-300 dark:bg-zinc-800 px-5 py-2.5 me-2 mb-2 dark:hover:bg-zinc-700 hover:bg-zinc-200",
  secondary: "bg-transparent px-2 py-1 hover:bg-zinc-200 dark:hover:bg-zinc-700",
};

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  isActive = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "cursor-pointer border-none font-bold transition-colors text-base rounded-md",
        variantClasses[variant],
        fullWidth && "w-full",
        isActive && "bg-zinc-200 dark:bg-zinc-800"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
