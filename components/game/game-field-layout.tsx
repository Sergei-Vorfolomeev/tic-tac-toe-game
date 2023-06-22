import * as React from "react";
import { ReactNode } from "react";
import { clsx } from "clsx";

type PropsType = {
  children: ReactNode;
  className: string;
};

export const GameFieldLayout = ({ children, className }: PropsType) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white shadow-md rounded-2xl px-8 pt-5 pb-7"
      )}
    >
      {children}
    </div>
  );
};
