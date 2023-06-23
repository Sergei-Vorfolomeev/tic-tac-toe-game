import * as React from "react";
import { ReactNode } from "react";
import { clsx } from "clsx";

type PropsType = {
  children: ReactNode;
  className?: string;
  size: "lg" | "md";
  variant: "primary" | "outline";
};

export const UiButton = ({ children, className, size, variant }: PropsType) => {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      md: "rounded px-6 py-2 text-sm leading-tight",
      lg: "rounded-lg px-5 py-2 text-2xl leading-tight",
    }[size],
    {
      primary: "text-white bg-teal-600 hover:bg-teal-500",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant]
  );

  return <button className={buttonClassName}>{children}</button>;
};
